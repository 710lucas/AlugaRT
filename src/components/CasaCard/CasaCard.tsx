import { useState } from 'react';
import { Casa } from '../../pages/home'
import TextInput from '../TextInput/TextInput';
import './style.css'

export type CasaCardProps = {
    casa : Casa;
}

export default function CasaCard (props : CasaCardProps) {

    const casa = props.casa;

    return (
        <div className="casa-card">
            <div className="image-container"></div>
            <div className="text-container">
                <div className="title">{casa.nome}</div>
                <div className="descricao">{casa.descricao}</div>
                <div className="title">R$ {casa.valor}</div>
                <div className="status">
                    {casa.status}
                    <div className={`bola-disponibilidade ${casa.status === 'Disponível' ? 'bola-verde' : ''}`}></div>
                </div>
            </div>
        </div>
    )

}