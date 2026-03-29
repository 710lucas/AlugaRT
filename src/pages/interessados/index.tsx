import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';
import Header from '../../components/Header/Header';
import InteressadoCard from '../../components/InteressadoCard/InteressadoCard';
import { Casa } from '../../types/Casa';
import { Usuario } from '../../types/Usuario';
import { CasaContext } from '../../contexts/CasaContext/CasaContext';
import { UsuarioContext } from '../../contexts/UsuarioContext/UsuarioContext';
import { ContratoContext } from '../../contexts/ContratoContext/ContratoContext';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

export default function InteressadosPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [casa, setCasa] = useState<Casa | undefined>();
    const [interessados, setInteressados] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState<string>("");
    const [modalAberto, setModalAberto] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(null);
    const [dataFim, setDataFim] = useState<string>("");

    const casaContext = useContext(CasaContext);
    const usuarioContext = useContext(UsuarioContext);
    const contratoContext = useContext(ContratoContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        try {
            const casaId = Number(id);
            const casaEncontrada = casaContext?.getCasaById(casaId);

            if (!casaEncontrada) {
                throw new Error("Casa não encontrada");
            }

            const proprietario = usuarioContext?.getProprietarioByCasaId(casaId);
            if (!proprietario) {
                throw new Error("Proprietário não encontrado para esta casa");
            }

            let usuarioAutenticado = authContext?.usuario;
            
            if (!usuarioAutenticado) {
                const nomeSalvo = localStorage.getItem('loggedUser');
                if (nomeSalvo) {
                    const usuario = usuarioContext?.usuarios.find(u => u.nome === nomeSalvo);
                    usuarioAutenticado = usuario;
                }
            }
            
            if (!usuarioAutenticado) {
                setErro("Usuário não autenticado. Por favor, faça login novamente.");
                setLoading(false);
                return;
            }

            if (usuarioAutenticado.id !== proprietario.id) {
                setErro(`Acesso negado. Apenas o proprietário pode ver os interessados.`);
                setLoading(false);
                return;
            }

            setCasa(casaEncontrada);

            if (casaEncontrada.interessados && casaEncontrada.interessados.length > 0) {
                const usuarios = casaEncontrada.interessados
                    .map(usuarioId => usuarioContext?.usuarios.find(u => u.id === usuarioId))
                    .filter((u): u is Usuario => u !== undefined);
                setInteressados(usuarios);
            }

            setLoading(false);
        } catch (err) {
            console.error(err);
            setErro(err instanceof Error ? err.message : "Erro ao carregar interessados");
            setLoading(false);
        }
    }, [id, casaContext, usuarioContext, authContext, navigate]);

    const handleEnviarContrato = (usuario: Usuario) => {
        setUsuarioSelecionado(usuario);
        setDataFim("");
        setModalAberto(true);
    };

    const handleSalvarContrato = () => {
        if (!casa || !usuarioSelecionado || !dataFim) {
            alert("Por favor, preencha a data de término");
            return;
        }

        try {
            contratoContext?.createContrato({
                casa: casa,
                dataInicio: new Date(),
                dataFim: new Date(dataFim),
                enviado: true,
                aceito: false,
                dataAceito: undefined
            });

            alert(`Contrato enviado para ${usuarioSelecionado.nome} com sucesso!`);
            setModalAberto(false);
            setUsuarioSelecionado(null);
            setDataFim("");
        } catch (err) {
            console.error(err);
            alert("Erro ao enviar contrato");
        }
    };

    const handleRemoverInteressado = (usuarioId: number) => {
        if (!casa) return;

        try {
            const usuariosAtualizados = casa.interessados?.filter(id => id !== usuarioId) || [];
            const casaAtualizada = {
                ...casa,
                interessados: usuariosAtualizados
            };

            const casaIndex = casaContext?.casas.findIndex(c => c.id === casa.id) ?? -1;
            
            if (casaIndex >= 0) {
                casaContext?.updateCasa(casaIndex, casaAtualizada);
                setCasa(casaAtualizada);
                setInteressados(interessados.filter(u => u.id !== usuarioId));
                alert("Interessado removido com sucesso!");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao remover interessado");
        }
    };

    const handleVerPerfil = (usuarioId: number) => {
        navigate(`/usuario/${usuarioId}`);
    };

    if (loading) {
        return (
            <div className="interessados-container">
                <Header />
                <p>Carregando...</p>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="interessados-container">
                <Header />
                <div style={{ padding: '40px', textAlign: 'center', color: '#ff5a5f' }}>
                    <h2>Erro</h2>
                    <p>{erro}</p>
                    <button onClick={() => navigate('/')} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
                        Voltar para Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="interessados-container">
            <Header />
            
            <div className="interessados-content">
                <div className="interessados-header">
                    <div className="casa-info">
                        {casa && casa.imagens && casa.imagens.length > 0 && (
                            <img src={casa.imagens[0]} alt={casa.nome} className="casa-thumbnail" />
                        )}
                        <div className="casa-details">
                            <h1 className="casa-nome">{casa?.nome}</h1>
                            <p className="casa-endereco">{casa?.endereco}</p>
                        </div>
                    </div>
                </div>

                <div className="interessados-header-title">
                    <h2>Interessados ({interessados.length})</h2>
                </div>

                <div className="interessados-grid">
                    {interessados.length > 0 ? (
                        interessados.map(usuario => (
                            <InteressadoCard
                                key={usuario.id}
                                usuario={usuario}
                                onEnviarContrato={handleEnviarContrato}
                                onRemover={handleRemoverInteressado}
                                onVerPerfil={handleVerPerfil}
                            />
                        ))
                    ) : (
                        <div className="sem-interessados">
                            <p>Nenhum interessado nesta casa ainda.</p>
                        </div>
                    )}
                </div>
            </div>

            {modalAberto && (
                <div className="modal-overlay" onClick={() => setModalAberto(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Informações do contrato</h2>
                        <div className="modal-body">
                            <label>Data fim</label>
                            <input 
                                type="date" 
                                placeholder="Data de finalização do contrato"
                                value={dataFim}
                                onChange={(e) => setDataFim(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn-salvar" 
                                onClick={handleSalvarContrato}
                            >
                                Salvar ✓
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
