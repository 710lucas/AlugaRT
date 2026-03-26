import { useContext, useEffect, useState } from "react";
import "./style.css";
import { AvaliacaoContext } from "../../contexts/AvaliacaoContext/AvaliacaoContext";
import Header from "../../components/Header/Header";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import BaseIcon from "../../components/Icon/BaseIcon";
import ActionButton from "../../components/ActionButton/ActionButton";
import { CasaContext } from "../../contexts/CasaContext/CasaContext";
import { Usuario } from "../../types/Usuario";
import { UsuarioContext } from "../../contexts/UsuarioContext/UsuarioContext";
import { Casa } from "../../types/Casa";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export function FeedbackPage() {

    const [notaCasa, setNotaCasa] = useState(0);
    const [notaLocador, setNotaLocador] = useState(0);
    const [descCasa, setDescCasa] = useState("");
    const [descLocador, setDescLocador] = useState("");
    const [casa, setCasa] = useState<undefined | Casa>();
    const [locador, setLocador] = useState<undefined | Usuario>();

    const casaContext = useContext(CasaContext);
    const usuarioContext = useContext(UsuarioContext);
    const avaliacaoContext = useContext(AvaliacaoContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        const casaId = Number(window.location.pathname.split('/').filter(Boolean).pop())
        
        let casa_ = casaContext?.getCasaById(casaId);
        let locador_ = usuarioContext?.getProprietarioByCasaId(casaId);

        setCasa(casa_);
        setLocador(locador_)
    }, [])

    const renderEstrelas = (valor: number, setValor: (v: number) => void) => (
        <div className="estrelas-feedback">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} onClick={() => setValor(i + 1)} style={{ cursor: "pointer" }}>
                    <BaseIcon iconName="star" color="#FF5A5F" fill={i < valor} size={24} />
                </span>
            ))}
        </div>
    );

    return (
        authContext.usuario?.contratos.some(c => c.casa.id === casa?.id) ?
        <div className="feedback-pagina">
            <Header />
            <form className="feedback-form">
                <div className="feedback-bloco feedback-casa">
                    <h2 className="feedback-titulo">Avalie a casa</h2>
                    <div className="feedback-casa-flex">
                        <div className="feedback-casa-imgbox">
                            <img src={casa?.imagens[0]} alt="Casa" className="feedback-casa-img" />
                            <div className="feedback-casa-nome">{casa?.nome}</div>
                        </div>
                        <div className="feedback-casa-avaliacao">
                            <label className="feedback-label">Que nota você daria para sua experiência?</label>
                            {renderEstrelas(notaCasa, setNotaCasa)}
                            <textarea
                                className="feedback-textarea"
                                placeholder="Tem algo a dizer? Digite aqui"
                                value={descCasa}
                                onChange={e => setDescCasa(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="feedback-bloco feedback-locador">
                    <h2 className="feedback-titulo">Avalie o locatário</h2>
                    <div className="feedback-locador-flex">
                        <div className="feedback-locador-imgbox">
                            <ProfileImage size={80} />
                            <div className="feedback-locador-nome">{locador?.nome}</div>
                        </div>
                        <div className="feedback-locador-avaliacao">
                            <label className="feedback-label">Que nota você daria para o locatário?</label>
                            {renderEstrelas(notaLocador, setNotaLocador)}
                            <textarea
                                className="feedback-textarea"
                                placeholder="Tem algo a dizer? Digite aqui"
                                value={descLocador}
                                onChange={e => setDescLocador(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="feedback-btn-box">
                    <ActionButton
                        name="Enviar avaliação"
                        cor="#FF5A5F"
                        icon="check"
                        action={() => {
                            if(casa === undefined)
                                return;
                            const av = avaliacaoContext?.createAvaliacao({
                                casa: casa,
                                descricaoCasa: descCasa,
                                descricaoLocador: descLocador,
                                notaCasa: notaCasa,
                                notaLocador: notaLocador
                            })

                            if(!av){
                                return;
                            }

                            let avaliador = authContext.usuario as Usuario;
                            avaliador.avaliacoes.push(av);
                            usuarioContext?.updateUsuario(avaliador.id, avaliador)
                            console.log(av)
                            alert("Avaliação cadastrada com sucesso")
                            setTimeout(() => {document.location='/casa/'+casa.id}, 500)
                        }}
                    />
                </div>
            </form>
        </div>
        :
        <div className="feedback-sem-permissao">
            <div className="feedback-sem-permissao-box">
                <span role="img" aria-label="Aviso" style={{fontSize: 48, color: '#FF5A5F', marginBottom: 16}}>⚠️</span>
                <h2>Permissão necessária</h2>
                <p>Você precisa estar logado e ter alugado esta casa para deixar um feedback.</p>
                <a href="/login" className="feedback-sem-permissao-btn">Fazer login</a>
            </div>
        </div>
    );
}