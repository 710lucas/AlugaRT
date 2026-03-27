import { Usuario } from '../../types/Usuario';
import ProfileImage from '../ProfileImage/ProfileImage';
import BaseIcon from '../Icon/BaseIcon';
import ActionButton from '../ActionButton/ActionButton';
import './style.css';

interface InteressadoCardProps {
    usuario: Usuario;
    onEnviarContrato: (usuario: Usuario) => void;
    onRemover: (usuarioId: number) => void;
    onVerPerfil?: (usuarioId: number) => void;
}

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

export default function InteressadoCard({
    usuario,
    onEnviarContrato,
    onRemover,
    onVerPerfil
}: InteressadoCardProps) {
    
    const mediaAvaliacoes = usuario.avaliacoes.length > 0
        ? usuario.avaliacoes.reduce((acc, a) => acc + a.notaLocador, 0) / usuario.avaliacoes.length
        : 0;

    const ultimaAvaliacao = usuario.avaliacoes.length > 0
        ? usuario.avaliacoes[usuario.avaliacoes.length - 1]
        : null;

    const descricao = ultimaAvaliacao?.descricaoLocador || "Nenhuma descrição disponível";

    return (
        <div className="interessado-card">
            <div className="interessado-header">
                <div 
                    className="interessado-perfil" 
                    onClick={() => onVerPerfil?.(usuario.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <ProfileImage size={60} />
                    <div className="interessado-info">
                        <h3 className="interessado-nome">{usuario.nome}</h3>
                        <p className="interessado-telefone">({usuario.telefone})</p>
                    </div>
                </div>
            </div>

            <div className="interessado-estrelas">
                {renderEstrelas(Math.round(mediaAvaliacoes), 20)}
            </div>

            <p className="interessado-descricao">{descricao}</p>

            <div className="interessado-acoes">
                <ActionButton 
                    name="Enviar contrato" 
                    cor="#28A745"
                    icon="send"
                    action={() => onEnviarContrato(usuario)} 
                />
                <ActionButton 
                    name="Remover interessado" 
                    cor="#FF5A5F"
                    action={() => onRemover(usuario.id)} 
                />
            </div>
        </div>
    );
}
