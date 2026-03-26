import { useContext, useEffect, useState } from 'react';
import './style.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import BaseIcon from '../../components/Icon/BaseIcon';
import ActionButton from '../../components/ActionButton/ActionButton';
import TagParaCasa from '../../components/Tag/Tag';
import Header from '../../components/Header/Header';
import { Casa } from '../../types/Casa';
import { CasaContext } from '../../contexts/CasaContext/CasaContext';
import { AvaliacaoContext } from '../../contexts/AvaliacaoContext/AvaliacaoContext';
import { Usuario } from '../../types/Usuario';
import { UsuarioContext } from '../../contexts/UsuarioContext/UsuarioContext';
import { calcularAnosInteiros } from '../../utils/calcularAnosInteiros';
import { Avaliacao } from '../../types/Avaliacao';

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
    const [casa, setCasa] = useState<Casa & {
        avaliacao : number; 
        proprietario : Usuario;
    } | undefined>()
    const [avaliacoes, setAvaliacoes] = useState<(Avaliacao & {avaliador : Usuario})[]>([])

    const casaContext = useContext(CasaContext);
    const avaliacaoContext = useContext(AvaliacaoContext);
    const usuarioContext = useContext(UsuarioContext);

    useEffect(() => {
        try{
            const casaId = Number(window.location.pathname.split('/').filter(Boolean).pop())
            const avaliacoes_ : any = avaliacaoContext?.getAvaliacoesByCasaId(casaId) ?? []
            let casa_ : any = casaContext?.getCasaById(casaId)
            if(casa_ === undefined){
                console.log("casas")
                throw new Error("Casa não encontrada, casaId="+casaId)
                return;
            }
            casa_!.avaliacao = avaliacoes_.length > 0 ? avaliacoes_?.map((a : Avaliacao) => a.notaCasa).reduce((acc : number, n : number) =>acc+n)/avaliacoes_.length : 0

            const locador = usuarioContext?.getProprietarioByCasaId(casaId)

            if(!locador){
                throw new Error("Locador não encontrado")
            } 

            casa_!.proprietario = locador;

            console.log("avaliacoes", avaliacoes_)

            avaliacoes_.forEach((avaliacao : Avaliacao & {avaliador : Usuario}) => {
                let usuario_ = usuarioContext?.getUsuarioByAvaliacaoId(avaliacao.id);
                if(usuario_)
                    avaliacao.avaliador = usuario_
            });


            setCasa(casa_)
            setAvaliacoes(avaliacoes_ ?? [])
        } catch(err){
            console.error(err)
        }
    }, [])

    // const casa = {
    //     nome: "Casa Conjunto 3 quartos",
    //     endereco: "Rua Abc do Teste 123 - 600",
    //     valor: "700,00",
    //     descricao: "Casa ampla com 3 quartos, ideal para famílias, bem localizada e com ótimo custo-benefício por R$ 700. Ambiente arejado, segura e próxima a serviços essenciais.",
    //     proprietario: {
    //         nome: "Carlos Teste da Silva",
    //         info: "10 imóveis na plataforma | 2 anos",
    //         foto: "" 
    //     },
    //     avaliacao: 4
    // };

    // Estado para o carrossel de imagens
    const [imagemAtual, setImagemAtual] = useState(0);

    return (
        <div className="detalhes-container">
            <Header/>
            <div className="detalhes-card-main">
                <div className="coluna-imagem">
                    {/* Carrossel de imagens */}
                    {casa && casa.imagens && casa.imagens.length > 0 && (
                        <div className="carrossel-imagens-integrado">
                            <img 
                                src={casa.imagens[imagemAtual]}
                                alt={`Imagem ${imagemAtual + 1} da casa`}
                                className="foto-principal"
                            />
                            <button 
                                className={`carrossel-btn-integrado carrossel-btn-esq ${imagemAtual == 0 && 'hidden'}`}
                                onClick={() => setImagemAtual(i => i === 0 ? casa.imagens.length - 1 : i - 1)}
                                aria-label="Imagem anterior"
                            >
                                <span className="carrossel-seta">&#8592;</span>
                            </button>
                            <button 
                                className={`carrossel-btn-integrado carrossel-btn-dir ${imagemAtual == casa.imagens.length - 1 && 'hidden'}`}
                                onClick={() => setImagemAtual(i => i === casa.imagens.length - 1 ? 0 : i + 1)}
                                aria-label="Próxima imagem"
                            >
                                <span className="carrossel-seta">&#8594;</span>
                            </button>
                            <div className="carrossel-indicadores">
                                {casa.imagens.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={
                                            'carrossel-indicador' + (idx === imagemAtual ? ' ativo' : '')
                                        }
                                        onClick={() => setImagemAtual(idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
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
                                    {renderEstrelas(casa?.avaliacao ?? 0, 32)}
                                    <ActionButton name="Avalie a casa" cor="#FF5A5F" action={() => document.location='/feedback/'+casa?.id} />
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
                            <div className='info-proprietario'>
                                <h3 className="nome-dono">{casa?.proprietario.nome}</h3>
                                <p className="stats-dono">{casa ? casa.proprietario.casas?.length : ''} imoveis na plataforma | {casa ? calcularAnosInteiros(casa.proprietario.createdAt, new Date()) : ''} anos na plataforma</p>
                            </div>
                        </div>
                        <div className="whatsapp-circle">
                            <BaseIcon iconName="chat" color="#25D366" size={30} fill />
                        </div>
                    </div>

                    <h1 className="titulo-casa">{casa?.nome}</h1>
                    <p className="endereco-casa">{casa?.endereco}</p>

                    <div className="preco-row">
                        <span className="valor-casa">R$ {casa?.valor}</span>
                        <span className="vagas-casa">{casa?.vagas} vagas disponíveis</span>
                    </div>

                    <hr className="linha-separadora" />
                    <p className="desc-casa">{casa?.descricao}</p>
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
                {avaliacoes.map((avaliacao) => (
                    <div className="card-comentario" key={avaliacao.id}>
                        <div className="header-comentario">
                            <ProfileImage size={40} />
                            <div className="info-comentario">
                                <strong>{avaliacao.avaliador?.nome}</strong>
                                <div className="estrelas-comentario">
                                    {renderEstrelas(avaliacao.notaCasa, 16)}
                                </div>
                            </div>
                        </div>
                        <p className="texto-comentario">{avaliacao.descricaoCasa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}