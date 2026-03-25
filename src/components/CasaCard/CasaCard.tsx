import { Casa } from '../../types/Casa';
import './style.css'

export type CasaCardProps = {
    casa : Casa;
}

export default function CasaCard (props : CasaCardProps) {

    const casa = props.casa;

    return (
        <div className="casa-card">
            <div className="image-container" style={{
                backgroundImage: `url(${casa.imagens[0]})`
            }}></div>
            <div className="text-container">
                <div className="title">{casa.nome}</div>
                <div className="descricao">{casa.descricao}</div>
                <div className="title">R$ {casa.valor}</div>
                <div className="status">
                    {casa.vagas > 0 ? 'Disponível' : 'Indisponível'}
                    <div className={`bola-disponibilidade ${casa.vagas > 0 ? 'bola-verde' : ''}`}></div>
                </div>
            </div>
        </div>
    )

}