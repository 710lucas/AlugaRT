import { useEffect, useState } from "react"
import './style.css'

/*

    Componente de botoes rapidos embaixo da aba de pesquisa

    Este componentecontem somente o botao (nome e estilo) da barra

    Logica:
        1) marcar como clicado ou nao (const [clicked, setClicked]...)
        2) Informar (caso necessario) que foi clicado (props.onclick)

*/

/*
    Aqui definimos algumas variáveis do nosso componente, sendo elas

    1) nome do botao
    2) funcao que sera executada quando ele for clicado

    ou seja, todo botao precisa de um nome e precisa realizar uma ação a ser clicado, 
    entao determinamos isso com os argumentos (props) do nosso botao.

    Podemos pensar o seguinte:
        o botao é um componente generico, mas que vai ser usado várias vezes
        para que eu possa fazer vários botoes do botao generico, ele precisa de atributos variaveis
        sendo eles os props

        ou seja: cada botao vai ter um nome e realizar uma acao (filtro nesse caso) diferente
*/
type quickButtonsProps = {
    name : string;
    onClick : (clicked : boolean) => void;
}

export default function QuickSearchButtons (props : quickButtonsProps) { 

    const [clicked, setClicked] = useState(false);

    function handleClick () {
        //ao clicar, seta clicked como o oposto do que estava
        //ou seja, se estava apertado, marca como falso (se estava apertado já e eu apertei novamente, entao é para desmarcar)
        setClicked(!clicked); 
    }

    /*
        um useEffect determina um código que deve ser executado toda
        vez que uma certa variável for modificada.

        Nesse caso, esse useEffect é executado toda vez que o clicked mudar
        [clicked] -> determina a variável que será 'observada'

        o codigo props.onClick(clicked) é o código que o useEffect roda ao clicar

        ou seja: quando clicamosno botao, ele usa o 'handleClick' para modificar a variável,
        quando essa variável for editada, a gente informa para o 'props.onClick' qual o estado atual do clique

        isso pode ser usado para fazer filtragens, por exemplo, clicamos no botao 'casas', filtra so as casas
    */
    useEffect(() => {
        props.onClick(clicked);
    }, [clicked])

    return (
        <div className={`quick-search-button ${clicked ? 'clicked-button' : ''}`} onClick={handleClick}>{props.name}</div>
    )
}