import { Avaliacao } from "../types/Avaliacao";
import { Casa } from "../types/Casa";
import { Contrato } from "../types/Contrato";
import { Usuario } from "../types/Usuario";


const CASAS : Casa[] = [
    {
        id: 1,
        nome: "Casa do Sol",
        descricao: "Casa ampla, bem iluminada, próxima à praia.",
        endereco: "Rua das Flores, 123, João Pessoa",
        vagas: 3,
        categoria: "Praia",
        tags: ["arejada", "vista mar", "wifi"],
        valor: 1200,
        imagens: ["https://projetaronline.com/wp-content/uploads/2025/04/Casa-de-Campo-pequena-1-quarto-02.png"],
        estado: "disponivel"
    },
    {
        id: 2,
        nome: "Apartamento Central",
        descricao: "Apartamento mobiliado no centro da cidade.",
        endereco: "Av. Central, 456, João Pessoa",
        vagas: 2,
        categoria: "Urbano",
        tags: ["mobiliado", "ar-condicionado", "garagem"],
        valor: 900,
        imagens: ["https://cdn.assets-casacor.tec.br/file/casacor-images-news/2025/02/apartamento-vista-quatro-cartoes-postais-rio-de-janeiro-joao-panaggio-credito-denilson-machado-17.webp"],
        estado: "disponivel"
    }
];

const CONTRATOS : Contrato[] = [
    {
        casa: CASAS[0],
        dataInicio: new Date("2024-03-01"),
        dataFim: undefined,
        enviado: true,
        aceito: true,
        dataAceito: new Date("2024-03-02")
    }
];

const USUARIOS : Usuario[] = [
    {
        id: 1,
        nome: "João Silva",
        avaliacoes: [],
        createdAt: new Date("2024-01-10"),
        telefone: 83999990001,
        contratos: [],
        favoritos: [CASAS[0]],
        casas: undefined,
        password: "senha123",
        role: "locatario"
    },
    {
        id: 2,
        nome: "Maria Souza",
        avaliacoes: [],
        createdAt: new Date("2024-02-15"),
        telefone: 83999990002,
        contratos: [CONTRATOS[0]],
        favoritos: [CASAS[1]],
        casas: [],
        password: "senha456",
        role: "locador"
    }
];

const AVALIACOES : Avaliacao[] = [
    {
        id: 1,
        notaCasa: 5,
        descricaoCasa: "Casa excelente, muito confortável!",
        notaLocador: 4,
        descricaoLocador: "Locador atencioso e prestativo.",
        casa: CASAS[0]
    },
    {
        id: 2,
        notaCasa: 4,
        descricaoCasa: "Apartamento bem localizado, mas um pouco barulhento.",
        notaLocador: 5,
        descricaoLocador: "Locador muito educado.",
        casa: CASAS[1]
    }
];

export class MockDatabase {
    usuarios : Usuario[] = [...USUARIOS];
    avaliacoes : Avaliacao[] = [...AVALIACOES];
    casas : Casa[] = [...CASAS];
    contratos : Contrato[] = [...CONTRATOS];
    private usuarioId = USUARIOS.length + 1;
    private casaId = CASAS.length + 1;
    private avaliacaoId = AVALIACOES.length + 1;

    // USUÁRIO
    createUsuario(usuario: Omit<Usuario, "id">): Usuario {
        const novoUsuario = { ...usuario, id: this.usuarioId++ };
        this.usuarios = [...this.usuarios, novoUsuario];
        return novoUsuario;
    }
    readUsuarios(): Usuario[] {
        return [...this.usuarios];
    }
    getUsuarioByNome(nome : string) : Usuario | undefined{
        return this.usuarios.find(u => u.nome == nome);
    }
    updateUsuario(index: number, usuario: Partial<Usuario>): Usuario {
        const updated = { ...this.usuarios[index], ...usuario };
        this.usuarios = this.usuarios.map((u, i) => (i === index ? updated : u));
        return updated;
    }
    deleteUsuario(index: number): Usuario[] {
        this.usuarios = this.usuarios.filter((_, i) => i !== index);
        return [...this.usuarios];
    }

    // CASA
    createCasa(casa: Omit<Casa, "id">): Casa {
        const novaCasa = { ...casa, id: this.casaId++ };
        this.casas = [...this.casas, novaCasa];
        return novaCasa;
    }
    readCasas(): Casa[] {
        return [...this.casas];
    }
    updateCasa(index: number, casa: Partial<Casa>): Casa {
        const updated = { ...this.casas[index], ...casa };
        this.casas = this.casas.map((c, i) => (i === index ? updated : c));
        return updated;
    }
    deleteCasa(index: number): Casa[] {
        this.casas = this.casas.filter((_, i) => i !== index);
        return [...this.casas];
    }

    // CONTRATO
    createContrato(contrato: Contrato): Contrato {
        this.contratos = [...this.contratos, contrato];
        return contrato;
    }
    readContratos(): Contrato[] {
        return [...this.contratos];
    }
    updateContrato(index: number, contrato: Partial<Contrato>): Contrato {
        const updated = { ...this.contratos[index], ...contrato };
        this.contratos = this.contratos.map((c, i) => (i === index ? updated : c));
        return updated;
    }
    deleteContrato(index: number): Contrato[] {
        this.contratos = this.contratos.filter((_, i) => i !== index);
        return [...this.contratos];
    }

    // AVALIAÇÃO
    createAvaliacao(avaliacao: Omit<Avaliacao, "id">): Avaliacao {
        const novaAvaliacao = { ...avaliacao, id: this.avaliacaoId++ };
        this.avaliacoes = [...this.avaliacoes, novaAvaliacao];
        return novaAvaliacao;
    }
    readAvaliacoes(): Avaliacao[] {
        return [...this.avaliacoes];
    }
    updateAvaliacao(index: number, avaliacao: Partial<Avaliacao>): Avaliacao {
        const updated = { ...this.avaliacoes[index], ...avaliacao };
        this.avaliacoes = this.avaliacoes.map((a, i) => (i === index ? updated : a));
        return updated;
    }
    deleteAvaliacao(index: number): Avaliacao[] {
        this.avaliacoes = this.avaliacoes.filter((_, i) => i !== index);
        return [...this.avaliacoes];
    }

    // Métodos utilitários
    adicionarCasaParaUsuario(usuarioIndex: number, casa: Casa): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.casas) usuario.casas = [];
        if (!usuario.casas.find((c) => c.id === casa.id)) {
            usuario.casas.push(casa);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
    }

    adicionarFavoritoParaUsuario(usuarioIndex: number, casa: Casa): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.favoritos.find((c) => c.id === casa.id)) {
            usuario.favoritos.push(casa);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
    }

    adicionarContratoParaUsuario(usuarioIndex: number, contrato: Contrato): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.contratos.find((c) => c === contrato)) {
            usuario.contratos.push(contrato);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
    }

    adicionarAvaliacaoParaUsuario(usuarioIndex: number, avaliacao: Avaliacao): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.avaliacoes.find((a) => a.id === avaliacao.id)) {
            usuario.avaliacoes.push(avaliacao);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
    }

    adicionarAvaliacaoParaCasa(casaIndex: number, avaliacao: Avaliacao): void {
        // Não há campo direto em Casa, mas pode ser útil para lógica futura
    }
}

export const db = new MockDatabase();