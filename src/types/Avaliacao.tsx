import { Casa } from "./Casa";

export type Avaliacao = {
    id : number;
    notaCasa : number;
    descricaoCasa : string;
    notaLocador : number;
    descricaoLocador : string;
    casa : Casa;
}