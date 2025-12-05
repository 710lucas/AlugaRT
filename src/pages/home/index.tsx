import CasaCard from "../../components/CasaCard/CasaCard";
import Header from "../../components/Header/Header";
import './style.css'

export type Casa = {
    nome : string;
    descricao : string;
    valor : number;
    status : 'Disponível' | 'Indisponível';
    imagem : string;
}

export default function HomePage () {


    const casas : Casa[] = [
        {
            nome : 'Casa Conjunto 3 Quartos',
            descricao: 'rua abc do teste 123',
            valor : 700,
            status: 'Disponível',
            imagem: 'x'
        },
        {
            nome : 'Casa Conjunto 3 Quartos',
            descricao: 'Rua abc do teste 123',
            valor : 700,
            status: 'Disponível',
            imagem: 'x'
        },
        {
            nome : 'Casa Conjunto 3 Quartos',
            descricao: 'rua abc do teste 123',
            valor : 700,
            status: 'Disponível',
            imagem: 'x'
        },
    ]

    return (
        <div className="home-page-container">
            <Header/>
            <div className="main-page">
                {
                    casas.map((casa) => {
                        return <CasaCard casa={casa}/>
                    })
                }
            </div>
        </div>
    )

}