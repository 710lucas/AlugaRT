import { Avaliacao } from "../types/Avaliacao";
import { Casa } from "../types/Casa";
import { Contrato } from "../types/Contrato";
import { Usuario } from "../types/Usuario";
// Importe as constantes do arquivo de dados criado acima

import { USUARIOS, CASAS, CONTRATOS, AVALIACOES } from "./mockData";

const STORAGE_KEY = "alugart_db";

function getDefaultData() {
    return {
        usuarios: [...USUARIOS],
        avaliacoes: [...AVALIACOES],
        casas: [...CASAS],
        contratos: [...CONTRATOS],
        usuarioId: USUARIOS.length + 1,
        casaId: CASAS.length + 1,
        avaliacaoId: AVALIACOES.length + 1
    };
}

function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch {
            return getDefaultData();
        }
    }
    return getDefaultData();
}

function saveToStorage(data: any) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export class MockDatabase {

    usuarios: Usuario[];
    avaliacoes: Avaliacao[];
    casas: Casa[];
    contratos: Contrato[];
    private usuarioId: number;
    private casaId: number;
    private avaliacaoId: number;

    constructor() {
        const data = loadFromStorage();
        this.usuarios = data.usuarios;
        this.avaliacoes = data.avaliacoes;
        this.casas = data.casas;
        this.contratos = data.contratos;
        this.usuarioId = data.usuarioId;
        this.casaId = data.casaId;
        this.avaliacaoId = data.avaliacaoId;
    }

    private persist() {
        saveToStorage({
            usuarios: this.usuarios,
            avaliacoes: this.avaliacoes,
            casas: this.casas,
            contratos: this.contratos,
            usuarioId: this.usuarioId,
            casaId: this.casaId,
            avaliacaoId: this.avaliacaoId
        });
    }

    // --- USUÁRIO ---
    createUsuario(usuario: Omit<Usuario, "id">): Usuario {
        const novoUsuario = { ...usuario, id: this.usuarioId++ };
        this.usuarios = [...this.usuarios, novoUsuario];
        this.persist();
        return novoUsuario;
    }
    readUsuarios(): Usuario[] {
        return [...this.usuarios];
    }
    getUsuarioByNome(nome: string): Usuario | undefined {
        return this.usuarios.find(u => u.nome === nome);
    }
    updateUsuario(index: number, usuario: Partial<Usuario>): Usuario {
        const updated = { ...this.usuarios[index], ...usuario };
        this.usuarios = this.usuarios.map((u, i) => (i === index ? updated : u));
        this.persist();
        return updated;
    }
    deleteUsuario(index: number): Usuario[] {
        this.usuarios = this.usuarios.filter((_, i) => i !== index);
        this.persist();
        return [...this.usuarios];
    }

    // --- CASA ---
    createCasa(casa: Omit<Casa, "id">): Casa {
        const novaCasa = { ...casa, id: this.casaId++ };
        this.casas = [...this.casas, novaCasa];
        this.persist();
        return novaCasa;
    }
    readCasas(): Casa[] {
        return [...this.casas];
    }
    updateCasa(index: number, casa: Partial<Casa>): Casa {
        const updated = { ...this.casas[index], ...casa };
        this.casas = this.casas.map((c, i) => (i === index ? updated : c));
        this.persist();
        return updated;
    }
    deleteCasa(index: number): Casa[] {
        this.casas = this.casas.filter((_, i) => i !== index);
        this.persist();
        return [...this.casas];
    }

    // --- CONTRATO ---
    createContrato(contrato: Contrato): Contrato {
        this.contratos = [...this.contratos, contrato];
        this.persist();
        return contrato;
    }
    readContratos(): Contrato[] {
        return [...this.contratos];
    }
    updateContrato(index: number, contrato: Partial<Contrato>): Contrato {
        const updated = { ...this.contratos[index], ...contrato };
        this.contratos = this.contratos.map((c, i) => (i === index ? updated : c));
        this.persist();
        return updated;
    }
    deleteContrato(index: number): Contrato[] {
        this.contratos = this.contratos.filter((_, i) => i !== index);
        this.persist();
        return [...this.contratos];
    }

    // --- AVALIAÇÃO ---
    createAvaliacao(avaliacao: Omit<Avaliacao, "id">): Avaliacao {
        const novaAvaliacao = { ...avaliacao, id: this.avaliacaoId++ };
        this.avaliacoes = [...this.avaliacoes, novaAvaliacao];
        this.persist();
        return novaAvaliacao;
    }
    readAvaliacoes(): Avaliacao[] {
        return [...this.avaliacoes];
    }
    updateAvaliacao(index: number, avaliacao: Partial<Avaliacao>): Avaliacao {
        const updated = { ...this.avaliacoes[index], ...avaliacao };
        this.avaliacoes = this.avaliacoes.map((a, i) => (i === index ? updated : a));
        this.persist();
        return updated;
    }
    deleteAvaliacao(index: number): Avaliacao[] {
        this.avaliacoes = this.avaliacoes.filter((_, i) => i !== index);
        this.persist();
        return [...this.avaliacoes];
    }

    // --- MÉTODOS UTILITÁRIOS ---
    adicionarCasaParaUsuario(usuarioIndex: number, casa: Casa): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.casas) usuario.casas = [];
        if (!usuario.casas.find((c) => c.id === casa.id)) {
            usuario.casas.push(casa);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
        this.persist();
    }

    adicionarFavoritoParaUsuario(usuarioIndex: number, casa: Casa): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.favoritos.find((c) => c.id === casa.id)) {
            usuario.favoritos.push(casa);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
        this.persist();
    }

    adicionarContratoParaUsuario(usuarioIndex: number, contrato: Contrato): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.contratos.find((c) => c === contrato)) {
            usuario.contratos.push(contrato);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
        this.persist();
    }

    adicionarAvaliacaoParaUsuario(usuarioIndex: number, avaliacao: Avaliacao): void {
        const usuario = this.usuarios[usuarioIndex];
        if (!usuario.avaliacoes.find((a) => a.id === avaliacao.id)) {
            usuario.avaliacoes.push(avaliacao);
        }
        this.usuarios = this.usuarios.map((u, i) => (i === usuarioIndex ? usuario : u));
        this.persist();
    }

    // adicionarAvaliacaoParaCasa(casaIndex: number, avaliacao: Avaliacao): void {
    //     // Lógica futura caso adicione o array de avaliações em Casa.
    // }

    resetDatabase() {
        const data = getDefaultData();
        this.usuarios = data.usuarios;
        this.avaliacoes = data.avaliacoes;
        this.casas = data.casas;
        this.contratos = data.contratos;
        this.usuarioId = data.usuarioId;
        this.casaId = data.casaId;
        this.avaliacaoId = data.avaliacaoId;
        this.persist();
    }
}

export const db = new MockDatabase();