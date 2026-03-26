
import { useContext, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './style.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import BaseIcon from '../../components/Icon/BaseIcon';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { UsuarioContext } from '../../contexts/UsuarioContext/UsuarioContext';
import { AvaliacaoContext } from '../../contexts/AvaliacaoContext/AvaliacaoContext';

const renderEstrelas = (avaliacao: number, size: number = 20) => {
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


type Aba = 'feedbacks' | 'contratos' | 'favoritos' | 'pendente' | 'casas';

export default function PerfilUsuarioPage() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const { usuario: usuarioLogado } = useContext(AuthContext);
    const usuarioContext = useContext(UsuarioContext);
    const avaliacaoContext = useContext(AvaliacaoContext);

    // Busca usuário pelo id da URL
    const usuario = usuarioContext?.usuarios.find(u => u.id === Number(id));
    if (!usuario) {
        return <div className="detalhes-container"><h2>Usuário não encontrado</h2></div>;
    }

    // Permissões de visualização
    const isSelf = usuarioLogado && usuarioLogado.id === usuario.id;
    const isLocador = usuario.role === 'locador';

    // Abas disponíveis
    let abasDisponiveis: { key: Aba; label: string }[] = [
        { key: 'feedbacks', label: 'Feedbacks' },
    ];
    if (isSelf) {
        abasDisponiveis = [
            { key: 'feedbacks', label: 'Feedbacks' },
            { key: 'contratos', label: 'Meus contratos' },
            { key: 'favoritos', label: 'Meus Favoritos' },
            { key: 'pendente', label: 'Contrato Pendente' },
        ];
        if (isLocador) {
            let abas_ = [{key : 'casas' as Aba, label: 'Minhas Casas'}]
            abasDisponiveis.forEach(aba => abas_.push(aba))
            abasDisponiveis = abas_;
        }
    } else if (isLocador) {
        let abas_ = [{key : 'casas' as Aba, label: 'Casas'}]
        abasDisponiveis.forEach(aba => abas_.push(aba))
        abasDisponiveis = abas_;
    }

    // Dados de perfil
    const minhasCasas = usuario.casas || [];
    let feedbacks = usuario.avaliacoes || [];
    if (isLocador) {
        feedbacks = []
        minhasCasas.forEach(casa => {
            avaliacaoContext?.getAvaliacoesByCasaId(casa.id)?.forEach(avaliacao => feedbacks.push(avaliacao))
        }
        );
    }
    const meusContratos = usuario.contratos || [];
    const favoritos = usuario.favoritos || [];
    const contratoPendente = meusContratos.find(c => c.enviado && !c.aceito);
    const dataCriacao = new Date(usuario.createdAt);
    const mesAno = dataCriacao.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
    const telefone = usuario.telefone ? usuario.telefone.toString().replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3') : '';
    const mediaAvaliacao = feedbacks.length > 0 ? Math.round(feedbacks.map(a => a.notaCasa).reduce((acc, n) => acc + n, 0) / feedbacks.length) : 0;

    // Define aba inicial pelo query param, se existir e for válida
    const abaParam = searchParams.get('aba') as Aba | null;
    const abasValidas: Aba[] = ['feedbacks', 'contratos', 'favoritos', 'pendente', 'casas'];
    const abaInicial: Aba = abaParam && abasValidas.includes(abaParam) ? abaParam : (isLocador || isSelf ? 'casas' : 'feedbacks');
    const [aba, setAba] = useState<Aba>(abaInicial);

    return (
        <div className="perfil-desktop-bg">
            <Header />
            <div className="perfil-bg">
                <div className="perfil-card">
                    <div className="perfil-header">
                        <ProfileImage size={140} />
                        <h2 className="perfil-nome">{usuario.nome}</h2>
                        <div className="perfil-estrelas">{renderEstrelas(mediaAvaliacao, 24)}</div>
                        <div className="perfil-info">Usuário desde: {mesAno.charAt(0).toUpperCase() + mesAno.slice(1)}</div>
                        <div className="perfil-telefone">{telefone}</div>
                    </div>
                    <div className="perfil-abas">
                        {abasDisponiveis.map(a => (
                            <button
                                key={a.key}
                                className={`perfil-aba-btn${aba === a.key ? ' ativo' : ''}`}
                                onClick={() => setAba(a.key)}
                            >
                                {a.label}
                            </button>
                        ))}
                    </div>
                    <div className="perfil-conteudo">
                        {aba === 'casas' && isLocador && (
                            <div className="perfil-favoritos-lista">
                                {minhasCasas.length === 0 && <div className="perfil-sem-feedback">Nenhuma casa cadastrada.</div>}
                                {minhasCasas.map((casa) => (
                                    <a
                                        className="perfil-favorito-card"
                                        key={casa.id}
                                        href={`/casa/${casa.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {casa.imagens && casa.imagens.length > 0 ? (
                                            <img className="perfil-favorito-img" src={casa.imagens[0]} alt={casa.nome} />
                                        ) : (
                                            <div className="perfil-favorito-img" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                <BaseIcon iconName="home" size={36} color="#bbb" fill />
                                            </div>
                                        )}
                                        <div className="perfil-favorito-info">
                                            <div className="perfil-favorito-nome">{casa.nome}</div>
                                            <div className="perfil-favorito-endereco">{casa.endereco}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                        {aba === 'feedbacks' && (
                            <div className="perfil-feedbacks-lista">
                                {feedbacks.length === 0 && <div className="perfil-sem-feedback">Nenhum feedback recebido ainda.</div>}
                                {feedbacks.map((fb) => (
                                    <div className="perfil-feedback-card" key={fb.id}>
                                        <div className="perfil-feedback-header">
                                            <ProfileImage size={40} />
                                            <div>
                                                <strong>{fb.casa?.nome || 'Casa'}</strong>
                                                <div className="perfil-feedback-estrelas">{renderEstrelas(fb.notaCasa, 18)}</div>
                                            </div>
                                        </div>
                                        <div className="perfil-feedback-texto">{fb.descricaoCasa}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {aba === 'contratos' && isSelf && (
                            <div className="perfil-contratos-lista">
                                {meusContratos.length === 0 && <div className="perfil-sem-feedback">Nenhum contrato encontrado.</div>}
                                {meusContratos.map((c, i) => (
                                    <div className="perfil-contrato-card" key={i}>
                                        <div className="contrato-nome">{c.casa?.nome}</div>
                                        <div className="contrato-info">Início: {new Date(c.dataInicio).toLocaleDateString()}</div>
                                        {c.dataFim && <div className="contrato-info">Fim: {new Date(c.dataFim).toLocaleDateString()}</div>}
                                        <div className="contrato-status">
                                            Status: {c.aceito ? 'Aceito' : c.enviado ? 'Pendente' : 'Rascunho'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {aba === 'favoritos' && isSelf && (
                            <div className="perfil-favoritos-lista">
                                {favoritos.length === 0 && <div className="perfil-sem-feedback">Nenhum favorito salvo.</div>}
                                {favoritos.map((casa) => (
                                    <a
                                        className="perfil-favorito-card"
                                        key={casa.id}
                                        href={`/casa/${casa.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {casa.imagens && casa.imagens.length > 0 ? (
                                            <img className="perfil-favorito-img" src={casa.imagens[0]} alt={casa.nome} />
                                        ) : (
                                            <div className="perfil-favorito-img" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                <BaseIcon iconName="home" size={36} color="#bbb" fill />
                                            </div>
                                        )}
                                        <div className="perfil-favorito-info">
                                            <div className="perfil-favorito-nome">{casa.nome}</div>
                                            <div className="perfil-favorito-endereco">{casa.endereco}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                        {aba === 'pendente' && isSelf && contratoPendente && (
                            <div className="perfil-contrato-pendente">
                                <div><strong>{contratoPendente.casa?.nome}</strong></div>
                                <div>Início: {new Date(contratoPendente.dataInicio).toLocaleDateString()}</div>
                                <div>Status: Pendente de aceite</div>
                            </div>
                        )}
                        {aba === 'pendente' && isSelf && !contratoPendente && (
                            <div className="perfil-sem-feedback">Nenhum contrato pendente.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
