export type Casa = {
    id : number
    nome : string;
    descricao : string;
    endereco : string;
    vagas : number;
    categoria : string;
    tags : string[];
    valor : number;
    imagens : string[];
    estado : 'disponivel' | 'indisponivel'
    interessados?: number[] // IDs dos usuários interessados
}