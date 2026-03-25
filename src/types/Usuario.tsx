import { Avaliacao } from "./Avaliacao";
import { Casa } from "./Casa";
import { Contrato } from "./Contrato";

export type Usuario = {
    id: number;
    nome : string;
    avaliacoes : Avaliacao[];
    createdAt : Date;
    telefone: number;
    contratos : Contrato[];
    favoritos : Casa[]
    casas : Casa[] | undefined
    password : string;
    role : 'locatario' | 'locador'
}