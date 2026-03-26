import { useContext, useEffect, useState } from "react";
import "./style.css";
import { CasaContext } from "../../contexts/CasaContext/CasaContext";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Casa } from "../../types/Casa";
import Header from "../../components/Header/Header";
import ActionButton from "../../components/ActionButton/ActionButton";
import ImageInput from "../../components/ImageInput/ImageInput";
import { UsuarioContext } from "../../contexts/UsuarioContext/UsuarioContext";

// Se usar react-router-dom, pode usar useParams/useNavigate, senão fallback para window.location
function getCasaIdFromUrl() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const id = parts[parts.length - 1];
  return isNaN(Number(id)) ? undefined : Number(id);
}

export function CriarCasaPage() {
	const casaContext = useContext(CasaContext);
	const authContext = useContext(AuthContext);
	const usuarioContext = useContext(UsuarioContext);
	const casaId = getCasaIdFromUrl();

	const [editando, setEditando] = useState(false);
	const [casa, setCasa] = useState<Casa | null>(null);
	const [imagens, setImagens] = useState<string[]>([]);
	const [nome, setNome] = useState("");
	const [endereco, setEndereco] = useState("");
	const [descricao, setDescricao] = useState("");
	const [vagas, setVagas] = useState("");
	const [categoria, setCategoria] = useState("Casa");
	const [comodos, setComodos] = useState<string[]>([]);
	const [valor, setValor] = useState("");
	const [status, setStatus] = useState<'disponivel' | 'indisponivel'>("disponivel");
	const [novoComodo, setNovoComodo] = useState("");

	useEffect(() => {
		if (casaId) {
			const casa_ = casaContext?.getCasaById(casaId);
			if (casa_ && authContext.usuario?.casas?.some(c => c.id === casaId)) {
				setEditando(true);
				setCasa(casa_);
				setImagens(casa_.imagens);
				setNome(casa_.nome);
				setEndereco(casa_.endereco);
				setDescricao(casa_.descricao);
				setVagas(casa_.vagas.toString());
				setCategoria(casa_.categoria);
				setComodos(casa_.tags);
				setValor(casa_.valor.toString());
				setStatus(casa_.estado);
			}
		}
	}, [casaId, casaContext, authContext.usuario]);

	const handleSalvar = () => {
		if (!nome || !endereco || !descricao || !vagas || !valor || imagens.length === 0) {
			alert("Preencha todos os campos obrigatórios e adicione pelo menos uma imagem.");
			return;
		}
		const novaCasa: Omit<Casa, "id"> = {
			nome,
			endereco,
			descricao,
			vagas: Number(vagas),
			categoria,
			tags: comodos,
			valor: Number(valor.replace(/[^0-9]/g, "")),
			imagens,
			estado: status
		};
		if (editando && casa) {
			const index = casaContext?.casas.findIndex(c => c.id === casa.id) as number;
			casaContext?.updateCasa(index, novaCasa);
			alert("Casa atualizada com sucesso!");
		} else {
			let usuario = authContext.usuario;
			if(!usuario) return;

			let casa = casaContext?.createCasa(novaCasa);
			if(!casa) return;


			// Garante imutabilidade ao adicionar a casa
			const novasCasas = usuario.casas ? [...usuario.casas, casa] : [casa];
			const usuarioAtualizado = { ...usuario, casas: novasCasas };

			console.log("usuario: ", usuarioAtualizado)
			const index = usuarioContext?.usuarios.findIndex(u => u.id == usuario.id) as number;
			console.log("index: ", index)
			const usuarioResult = usuarioContext?.updateUsuario(index, usuarioAtualizado);
			console.log("usuario: ", usuarioResult)

			alert("Casa criada com sucesso!");
		}
		window.location.href = "/casa/"+casa?.id;
	};

	const handleExcluir = () => {
		if (editando && casa) {
			if (window.confirm("Tem certeza que deseja excluir este imóvel?")) {
				casaContext?.deleteCasa(casa.id);
				alert("Casa excluída com sucesso!");
				window.location.href = "/casa";
			}
		}
	};

	const handleAddComodo = () => {
		if (novoComodo && !comodos.includes(novoComodo)) {
			setComodos([...comodos, novoComodo]);
			setNovoComodo("");
		}
	};
	const handleRemoveComodo = (comodo: string) => {
		setComodos(comodos.filter(c => c !== comodo));
	};

	if (editando && (!casa || !authContext.usuario?.casas?.some(c => c.id === casa.id))) {
		return (
			<div className="feedback-sem-permissao">
				<div className="feedback-sem-permissao-box">
					<span role="img" aria-label="Aviso" style={{fontSize: 48, color: '#FF5A5F', marginBottom: 16}}>⚠️</span>
					<h2>Permissão necessária</h2>
					<p>Você não tem permissão para editar este imóvel.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="criar-casa-pagina">
			<Header />
			<div className="criar-casa-container">
				<h1 className="criar-casa-titulo">{editando ? "Editar Imóvel" : "Cadastrar Imóvel"}</h1>
				<div className="criar-casa-flex">
					<div className="criar-casa-imagens">
						<h2>Editar Imagens</h2>
						<ImageInput imagens={imagens} setImagens={setImagens} />
					</div>
					<form className="criar-casa-form" onSubmit={e => {e.preventDefault(); handleSalvar();}}>
						<h2>Editar Dados</h2>
						<label>Título do Anúncio
							<input value={nome} onChange={e => setNome(e.target.value)} required />
						</label>
						<label>Endereço
							<input value={endereco} onChange={e => setEndereco(e.target.value)} required />
						</label>
						<label>Descrição
							<textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
						</label>
						<label>Vagas
							<input value={vagas} onChange={e => setVagas(e.target.value.replace(/\D/g, ""))} required />
						</label>
						<label>Categoria
							<select value={categoria} onChange={e => setCategoria(e.target.value)}>
								<option value="Casa">Casa</option>
								<option value="Apartamento">Apartamento</option>
								<option value="Chácara">Chácara</option>
								<option value="Campo">Campo</option>
								<option value="Praia">Praia</option>
								<option value="Urbano">Urbano</option>
							</select>
						</label>
						<label>Cômodos</label>
						<div className="criar-casa-comodos">
							{comodos.map((c, i) => (
								<span key={i} className="criar-casa-comodo">
									{c}
									<button type="button" onClick={() => handleRemoveComodo(c)} title="Remover">🗑️</button>
								</span>
							))}
							<input type="text" placeholder="Novo cômodo" value={novoComodo} onChange={e => setNovoComodo(e.target.value)} onKeyDown={e => {if(e.key==="Enter"){e.preventDefault();handleAddComodo();}}} />
							<button type="button" onClick={handleAddComodo} className="criar-casa-add-comodo">+</button>
						</div>
						<label>Valor
							<input value={valor} onChange={e => setValor(e.target.value.replace(/[^0-9,]/g, ""))} required />
						</label>
						<label>Status do Imóvel
							<select value={status} onChange={e => setStatus(e.target.value as 'disponivel' | 'indisponivel')}>
								<option value="disponivel">Disponível</option>
								<option value="indisponivel">Indisponível</option>
							</select>
						</label>
						<div className="criar-casa-btns">
							{editando && <ActionButton name="Excluir" cor="#FF5A5F" icon="delete" action={handleExcluir} />}
							<ActionButton name="Salvar" cor="#2ecc71" icon="check" action={handleSalvar} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
