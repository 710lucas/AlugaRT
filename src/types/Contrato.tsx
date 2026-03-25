import { Casa } from "./Casa"

export type Contrato = {
    casa : Casa;
    dataInicio : Date;
    dataFim? : Date;
    enviado : boolean;
    aceito : boolean;
    dataAceito? : Date;
}