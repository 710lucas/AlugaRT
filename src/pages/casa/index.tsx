import { useState } from 'react';
import './style.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import BaseIcon from '../../components/Icon/BaseIcon';
import ActionButton from '../../components/ActionButton/ActionButton';
import TagParaCasa from '../../components/Tag/Tag';
import Header from '../../components/Header/Header';

const renderEstrelas = (avaliacao: number, size: number = 16) => {
    return Array.from({ length: 5 }, (_, index) => (
        <BaseIcon 
            key={index}
            iconName="star" 
            color="#FF5A5F" 
            fill={index < avaliacao} 
            size={size} 
        />
    ));
};

export default function CasaDetalhesPage() {
    const [perfilUsuario] = useState<'proprietario' | 'locador' | 'visitante'>('locador');

    const casa = {
        nome: "Casa Conjunto 3 quartos",
        endereco: "Rua Abc do Teste 123 - 600",
        valor: "700,00",
        descricao: "Casa ampla com 3 quartos, ideal para famílias, bem localizada e com ótimo custo-benefício por R$ 700. Ambiente arejado, segura e próxima a serviços essenciais.",
        proprietario: {
            nome: "Carlos Teste da Silva",
            info: "10 imóveis na plataforma | 2 anos",
            foto: "" 
        },
        avaliacao: 4
    };

    return (
        <div className="detalhes-container">
            <Header/>
            <div className="detalhes-card-main">
                <div className="coluna-imagem">
                    <img 
                        src="https://plantasdecasas.com/wp-content/uploads/2016/11/309-plantas-de-casas-fachadas-front.jpg" 
                        alt="Casa" 
                        className="foto-principal" 
                    />
                    <div className="acoes-abaixo-imagem">
                        {perfilUsuario === 'proprietario' && (
                            <div className="modo-proprietario-acoes">
                                <span className="txt-interessados">8 Interessados</span>
                                <ActionButton name="Ver interessados" cor="#FF5A5F" action={() => {}} />
                                <ActionButton name="Editar Casa" cor="#FF5A5F" icon="edit" action={() => {}} />
                            </div>
                        )}
                        {perfilUsuario === 'locador' && (
                            <div className="modo-locador-acoes">
                                <div className="estrelas-avaliacao-grande">
                                    {renderEstrelas(casa.avaliacao, 32)}
                                    <ActionButton name="Avalie a casa" cor="#FF5A5F" action={() => alert("Avaliar")} />
                                </div>
                                <div className="favoritar-btn">
                                    <span>Favoritar</span>
                                    <BaseIcon iconName="favorite" color="#FF5A5F" fill={false} />
                                </div>
                            </div>
                        )}
                        {perfilUsuario === 'visitante' && (
                            <div className="modo-visitante-acoes">
                                <div className="favoritar-btn">
                                    <span>Favoritar</span>
                                    <BaseIcon iconName="favorite" color="#FF5A5F" fill={false} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="coluna-info">
                    <div className="header-dono">
                        <div className="perfil-flex">
                            <ProfileImage size={55} />
                            <div>
                                <h3 className="nome-dono">{casa.proprietario.nome}</h3>
                                <p className="stats-dono">{casa.proprietario.info}</p>
                            </div>
                        </div>
                        <div className="whatsapp-circle">
                            <BaseIcon iconName="chat" color="#25D366" size={30} fill />
                        </div>
                    </div>

                    <h1 className="titulo-casa">{casa.nome}</h1>
                    <p className="endereco-casa">{casa.endereco}</p>

                    <div className="preco-row">
                        <span className="valor-casa">R$ {casa.valor}</span>
                        <span className="vagas-casa">2 Quartos disponíveis</span>
                    </div>

                    <hr className="linha-separadora" />
                    <p className="desc-casa">{casa.descricao}</p>
                    <hr className="linha-separadora" />

                    <div className="tags-container-grid">
                        <TagParaCasa name="3 quartos" />
                        <TagParaCasa name="2 banheiros" />
                        <TagParaCasa name="Garagem 2 Carros" />
                    </div>
                </div>
            </div>
            <div className="secao-comentarios">
                <h2 className="titulo-avaliacoes">Avaliações</h2>
                {[1, 2].map((i) => (
                    <div className="card-comentario" key={i}>
                        <div className="header-comentario">
                            <ProfileImage size={40} />
                            <div className="info-comentario">
                                <strong>Vanessa Teste da Silva</strong>
                                <div className="estrelas-comentario">
                                    {renderEstrelas(4, 16)}
                                </div>
                            </div>
                        </div>
                        <p className="texto-comentario">Muito boa, fiquei hospedada por 3 anos, bem localizada e ventilada!</p>
                    </div>
                ))}
            </div>
        </div>
    );
}