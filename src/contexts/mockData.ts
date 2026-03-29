import { Avaliacao } from "../types/Avaliacao";
import { Casa } from "../types/Casa";
import { Contrato } from "../types/Contrato";
import { Usuario } from "../types/Usuario";

export const CASAS: Casa[] = [
    {
        id: 1,
        nome: "Chalé Aconchegante com Piscina Privativa",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua Empresário João Rodrigues, Bancários, João Pessoa - PB, 67",
        vagas: 1,
        categoria: "Urbano",
        tags: ["home office","ar-condicionado","piscina","churrasqueira"],
        valor: 1917,
        imagens: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"],
        estado: "disponivel",
        interessados: [16,17,18]
    },
    {
        id: 2,
        nome: "Lindo Flat com Vista para o Mar",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Sítio Alto da Serra, Bananeiras - PB, 681",
        vagas: 3,
        categoria: "Campo",
        tags: ["ar-condicionado","churrasqueira","vista mar"],
        valor: 1027,
        imagens: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 3,
        nome: "Apartamento Prático com Piscina Privativa",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua Principal, Pipa - RN, 837",
        vagas: 3,
        categoria: "Praia",
        tags: ["pet-friendly","churrasqueira","garagem","piscina"],
        valor: 3215,
        imagens: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 4,
        nome: "Bangalô Charme na Natureza",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Sítio Alto da Serra, Bananeiras - PB, 132",
        vagas: 3,
        categoria: "Campo",
        tags: ["home office","churrasqueira","pet-friendly","academia"],
        valor: 2180,
        imagens: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 5,
        nome: "Casa Espaçosa com Varanda Gourmet",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Condomínio Bosque de Areia, Areia - PB, 907",
        vagas: 3,
        categoria: "Campo",
        tags: ["churrasqueira","piscina","wifi"],
        valor: 2896,
        imagens: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 6,
        nome: "Bangalô Charme com Piscina Privativa",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Av. Cabo Branco, João Pessoa - PB, 429",
        vagas: 2,
        categoria: "Praia",
        tags: ["ar-condicionado","churrasqueira","wifi","piscina"],
        valor: 1478,
        imagens: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 7,
        nome: "Cantinho com Vista para o Mar",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua das Tartarugas, Bessa, João Pessoa - PB, 207",
        vagas: 2,
        categoria: "Praia",
        tags: ["pet-friendly","academia","piscina","churrasqueira"],
        valor: 3094,
        imagens: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 8,
        nome: "Chalé Aconchegante perto de tudo",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Sítio Alto da Serra, Bananeiras - PB, 545",
        vagas: 2,
        categoria: "Campo",
        tags: ["academia","garagem","churrasqueira","home office"],
        valor: 2539,
        imagens: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 9,
        nome: "Casa Espaçosa com Vista para o Mar",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua da Aurora, Santo Amaro, Recife - PE, 146",
        vagas: 0,
        categoria: "Urbano",
        tags: ["home office","garagem","academia"],
        valor: 2802,
        imagens: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 10,
        nome: "Apartamento Prático com Vista para o Mar",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Av. Paulista, Bela Vista, São Paulo - SP, 689",
        vagas: 2,
        categoria: "Urbano",
        tags: ["vista mar","academia","piscina"],
        valor: 3282,
        imagens: ["https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 11,
        nome: "Bangalô Charme com Varanda Gourmet",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua Epitácio Pessoa, Tambaú, João Pessoa - PB, 712",
        vagas: 2,
        categoria: "Urbano",
        tags: ["piscina","academia","churrasqueira","home office"],
        valor: 1243,
        imagens: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 12,
        nome: "Lindo Flat no Coração da Cidade",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Av. Senador Ruy Carneiro, Miramar, João Pessoa - PB, 455",
        vagas: 3,
        categoria: "Urbano",
        tags: ["varanda gourmet","pet-friendly","academia","vista mar"],
        valor: 915,
        imagens: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 13,
        nome: "Casa Espaçosa com Design Industrial",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua Principal, Pipa - RN, 853",
        vagas: 1,
        categoria: "Praia",
        tags: ["piscina","vista mar","varanda gourmet","academia"],
        valor: 2475,
        imagens: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 14,
        nome: "Cantinho para Home Office",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua das Hortênsias, Martins - RN, 597",
        vagas: 0,
        categoria: "Campo",
        tags: ["vista mar","garagem"],
        valor: 1197,
        imagens: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 15,
        nome: "Cobertura de Luxo perto de tudo",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Sítio Alto da Serra, Bananeiras - PB, 195",
        vagas: 2,
        categoria: "Campo",
        tags: ["ar-condicionado","vista mar","churrasqueira"],
        valor: 2591,
        imagens: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 16,
        nome: "Casa Espaçosa na Natureza",
        descricao: "Propriedade recém-reformada na categoria Campo. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Sítio Pôr do Sol, Gravatá - PE, 622",
        vagas: 0,
        categoria: "Campo",
        tags: ["wifi","piscina","varanda gourmet","home office"],
        valor: 1562,
        imagens: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 17,
        nome: "Cantinho com Vista para o Mar",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua do Surfista, Intermares, Cabedelo - PB, 606",
        vagas: 0,
        categoria: "Praia",
        tags: ["pet-friendly","ar-condicionado","vista mar","piscina"],
        valor: 817,
        imagens: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 18,
        nome: "Refúgio com Design Industrial",
        descricao: "Propriedade recém-reformada na categoria Urbano. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Av. Senador Ruy Carneiro, Miramar, João Pessoa - PB, 198",
        vagas: 3,
        categoria: "Urbano",
        tags: ["pet-friendly","wifi","home office","academia"],
        valor: 2564,
        imagens: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"],
        estado: "indisponivel"
    },
    {
        id: 19,
        nome: "Studio Moderno na Natureza",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Rua das Tartarugas, Bessa, João Pessoa - PB, 169",
        vagas: 0,
        categoria: "Praia",
        tags: ["varanda gourmet","piscina","pet-friendly","wifi"],
        valor: 1885,
        imagens: ["https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"],
        estado: "disponivel"
    },
    {
        id: 20,
        nome: "Studio Moderno com Design Industrial",
        descricao: "Propriedade recém-reformada na categoria Praia. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.",
        endereco: "Av. Cabo Branco, João Pessoa - PB, 74",
        vagas: 2,
        categoria: "Praia",
        tags: ["ar-condicionado","pet-friendly","academia"],
        valor: 1069,
        imagens: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"],
        estado: "indisponivel",
    },
];

export const CONTRATOS: Contrato[] = [
    { casa: CASAS[2], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[10], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[2], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[10], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[17], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[7], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[12], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[6], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[18], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[15], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[12], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[19], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[13], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[6], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[13], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[9], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[13], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[4], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[13], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[2], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[3], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[19], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[4], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[18], dataInicio: new Date("2024-02-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[14], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[0], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[6], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
    { casa: CASAS[18], dataInicio: new Date("2024-02-01"), dataFim: new Date("2024-11-30"), enviado: true, aceito: true, dataAceito: new Date("2024-01-25") },
];

export const AVALIACOES: Avaliacao[] = [
    {
        id: 1,
        notaCasa: 5,
        descricaoCasa: "Espaço funcional e bem dividido. Senti falta apenas de mais utensílios na cozinha, mas deu para nos virarmos bem.",
        notaLocador: 4,
        descricaoLocador: "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
        casa: CASAS[10]
    },
    {
        id: 2,
        notaCasa: 5,
        descricaoCasa: "Lugar incrível! A vista é surreal e o Wi-Fi funcionou super bem para o meu home office. Voltarei com certeza.",
        notaLocador: 5,
        descricaoLocador: "Responde muito rápido no WhatsApp e foi extremamente flexível com nosso horário de check-out. Nota 10!",
        casa: CASAS[2]
    },
    {
        id: 3,
        notaCasa: 5,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 4,
        descricaoLocador: "Responde muito rápido no WhatsApp e foi extremamente flexível com nosso horário de check-out. Nota 10!",
        casa: CASAS[16]
    },
    {
        id: 4,
        notaCasa: 5,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 4,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[10]
    },
    {
        id: 5,
        notaCasa: 5,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 4,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[17]
    },
    {
        id: 6,
        notaCasa: 5,
        descricaoCasa: "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
        notaLocador: 4,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[7]
    },
    {
        id: 7,
        notaCasa: 3,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 5,
        descricaoLocador: "Anfitrião correto, cumpriu tudo que prometeu no anúncio. Apenas o contato foi um pouco burocrático, mas tudo correu bem.",
        casa: CASAS[12]
    },
    {
        id: 8,
        notaCasa: 5,
        descricaoCasa: "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
        notaLocador: 5,
        descricaoLocador: "Responde muito rápido no WhatsApp e foi extremamente flexível com nosso horário de check-out. Nota 10!",
        casa: CASAS[6]
    },
    {
        id: 9,
        notaCasa: 4,
        descricaoCasa: "Lugar incrível! A vista é surreal e o Wi-Fi funcionou super bem para o meu home office. Voltarei com certeza.",
        notaLocador: 4,
        descricaoLocador: "Anfitrião super atencioso, nos deu dicas de restaurantes locais e o check-in foi super tranquilo por senha.",
        casa: CASAS[18]
    },
    {
        id: 10,
        notaCasa: 3,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 5,
        descricaoLocador: "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
        casa: CASAS[19]
    },
    {
        id: 11,
        notaCasa: 4,
        descricaoCasa: "O apartamento é exatamente como nas fotos, muito limpo e organizado. O único ponto é que o barulho da rua incomoda um pouco à noite.",
        notaLocador: 4,
        descricaoLocador: "Responde muito rápido no WhatsApp e foi extremamente flexível com nosso horário de check-out. Nota 10!",
        casa: CASAS[13]
    },
    {
        id: 12,
        notaCasa: 4,
        descricaoCasa: "O apartamento é exatamente como nas fotos, muito limpo e organizado. O único ponto é que o barulho da rua incomoda um pouco à noite.",
        notaLocador: 5,
        descricaoLocador: "Anfitrião correto, cumpriu tudo que prometeu no anúncio. Apenas o contato foi um pouco burocrático, mas tudo correu bem.",
        casa: CASAS[6]
    },
    {
        id: 13,
        notaCasa: 5,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 5,
        descricaoLocador: "Anfitrião correto, cumpriu tudo que prometeu no anúncio. Apenas o contato foi um pouco burocrático, mas tudo correu bem.",
        casa: CASAS[16]
    },
    {
        id: 14,
        notaCasa: 5,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 5,
        descricaoLocador: "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
        casa: CASAS[13]
    },
    {
        id: 15,
        notaCasa: 3,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 4,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[4]
    },
    {
        id: 16,
        notaCasa: 5,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 4,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[13]
    },
    {
        id: 17,
        notaCasa: 5,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 5,
        descricaoLocador: "Anfitrião correto, cumpriu tudo que prometeu no anúncio. Apenas o contato foi um pouco burocrático, mas tudo correu bem.",
        casa: CASAS[2]
    },
    {
        id: 18,
        notaCasa: 5,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 5,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[3]
    },
    {
        id: 19,
        notaCasa: 5,
        descricaoCasa: "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
        notaLocador: 5,
        descricaoLocador: "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
        casa: CASAS[19]
    },
    {
        id: 20,
        notaCasa: 5,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 3,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[4]
    },
    {
        id: 21,
        notaCasa: 4,
        descricaoCasa: "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
        notaLocador: 5,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[16]
    },
    {
        id: 22,
        notaCasa: 5,
        descricaoCasa: "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
        notaLocador: 5,
        descricaoLocador: "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
        casa: CASAS[18]
    },
    {
        id: 23,
        notaCasa: 4,
        descricaoCasa: "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
        notaLocador: 4,
        descricaoLocador: "Anfitrião super atencioso, nos deu dicas de restaurantes locais e o check-in foi super tranquilo por senha.",
        casa: CASAS[6]
    },
    {
        id: 24,
        notaCasa: 3,
        descricaoCasa: "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
        notaLocador: 5,
        descricaoLocador: "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
        casa: CASAS[18]
    },
];

export const USUARIOS: Usuario[] = [
    { id: 1, nome: "Rafael Martins", avaliacoes: [], createdAt: new Date("2024-01-01"), telefone: 83956838855, contratos: [CONTRATOS[0]], favoritos: [CASAS[9], CASAS[9]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 2, nome: "Felipe Alves", avaliacoes: [AVALIACOES[0]], createdAt: new Date("2024-01-01"), telefone: 83985885239, contratos: [CONTRATOS[1]], favoritos: [CASAS[1], CASAS[8]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 3, nome: "João Pedro Mendes", avaliacoes: [AVALIACOES[1], AVALIACOES[2], AVALIACOES[3]], createdAt: new Date("2024-01-01"), telefone: 83946497093, contratos: [CONTRATOS[2], CONTRATOS[3], CONTRATOS[4]], favoritos: [CASAS[2], CASAS[10]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 4, nome: "Rodrigo Henrique", avaliacoes: [AVALIACOES[4], AVALIACOES[5]], createdAt: new Date("2024-01-01"), telefone: 83977079351, contratos: [CONTRATOS[5], CONTRATOS[6]], favoritos: [CASAS[16], CASAS[17]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 5, nome: "Beatriz Cavalcanti", avaliacoes: [AVALIACOES[6], AVALIACOES[7], AVALIACOES[8]], createdAt: new Date("2024-01-01"), telefone: 83961694807, contratos: [CONTRATOS[7], CONTRATOS[8], CONTRATOS[9]], favoritos: [CASAS[17], CASAS[12]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 6, nome: "Rafael Alves", avaliacoes: [AVALIACOES[9]], createdAt: new Date("2024-01-01"), telefone: 83939657035, contratos: [CONTRATOS[10], CONTRATOS[11], CONTRATOS[12]], favoritos: [CASAS[0], CASAS[3]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 7, nome: "Felipe Costa", avaliacoes: [AVALIACOES[10], AVALIACOES[11]], createdAt: new Date("2024-01-01"), telefone: 83956951072, contratos: [CONTRATOS[13], CONTRATOS[14], CONTRATOS[15]], favoritos: [CASAS[0], CASAS[9]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 8, nome: "Beatriz Henrique", avaliacoes: [AVALIACOES[12]], createdAt: new Date("2024-01-01"), telefone: 83966179741, contratos: [CONTRATOS[16]], favoritos: [CASAS[14], CASAS[3]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 9, nome: "João Pedro Lima", avaliacoes: [AVALIACOES[13]], createdAt: new Date("2024-01-01"), telefone: 83947246581, contratos: [CONTRATOS[17], CONTRATOS[18], CONTRATOS[19]], favoritos: [CASAS[12], CASAS[14]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 10, nome: "Matheus Barros", avaliacoes: [AVALIACOES[14], AVALIACOES[15], AVALIACOES[16]], createdAt: new Date("2024-01-01"), telefone: 83932741617, contratos: [CONTRATOS[20], CONTRATOS[21], CONTRATOS[22]], favoritos: [CASAS[17], CASAS[4]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 11, nome: "Camila Carvalho", avaliacoes: [AVALIACOES[17]], createdAt: new Date("2024-01-01"), telefone: 83990057021, contratos: [CONTRATOS[23]], favoritos: [CASAS[13], CASAS[4]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 12, nome: "Letícia Dias", avaliacoes: [], createdAt: new Date("2024-01-01"), telefone: 83961417739, contratos: [CONTRATOS[24]], favoritos: [CASAS[8], CASAS[17]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 13, nome: "Lucas Martins", avaliacoes: [AVALIACOES[18], AVALIACOES[19], AVALIACOES[20]], createdAt: new Date("2024-01-01"), telefone: 83950048816, contratos: [CONTRATOS[25], CONTRATOS[26], CONTRATOS[27]], favoritos: [CASAS[7], CASAS[14]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 14, nome: "Beatriz Lima", avaliacoes: [AVALIACOES[21]], createdAt: new Date("2024-01-01"), telefone: 83979653134, contratos: [CONTRATOS[28], CONTRATOS[29]], favoritos: [CASAS[16], CASAS[9]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 15, nome: "Letícia Dias", avaliacoes: [AVALIACOES[22], AVALIACOES[23]], createdAt: new Date("2024-01-01"), telefone: 83963369415, contratos: [CONTRATOS[30], CONTRATOS[31], CONTRATOS[32]], favoritos: [CASAS[2], CASAS[3]], casas: undefined, password: "senha123", role: "locatario" },

    { id: 16, nome: "Beatriz Mendes", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83973682457, contratos: [CONTRATOS[0], CONTRATOS[2], CONTRATOS[22]], favoritos: [], casas: [CASAS[2]], password: "senha123", role: "locador" },
    { id: 17, nome: "João Pedro Barros", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83945476461, contratos: [CONTRATOS[7], CONTRATOS[11], CONTRATOS[20], CONTRATOS[26], CONTRATOS[29]], favoritos: [], casas: [CASAS[4], CASAS[12], CASAS[14]], password: "senha123", role: "locador" },
    { id: 18, nome: "Igor Henrique", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83921015672, contratos: [CONTRATOS[12], CONTRATOS[25]], favoritos: [], casas: [CASAS[19]], password: "senha123", role: "locador" },
    { id: 19, nome: "Thiago Barros", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83955008848, contratos: [CONTRATOS[6]], favoritos: [], casas: [CASAS[7]], password: "senha123", role: "locador" },
    { id: 20, nome: "Rafael Henrique", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83988737068, contratos: [CONTRATOS[5]], favoritos: [], casas: [CASAS[5], CASAS[17]], password: "senha123", role: "locador" },
    { id: 21, nome: "Thiago Lima", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83990404912, contratos: [CONTRATOS[8], CONTRATOS[15], CONTRATOS[30], CONTRATOS[31]], favoritos: [], casas: [CASAS[0], CASAS[1], CASAS[6]], password: "senha123", role: "locador" },
    { id: 22, nome: "Letícia Carvalho", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83986496343, contratos: [CONTRATOS[3], CONTRATOS[13], CONTRATOS[14], CONTRATOS[16], CONTRATOS[17], CONTRATOS[19], CONTRATOS[21], CONTRATOS[24], CONTRATOS[27]], favoritos: [], casas: [CASAS[13], CASAS[16]], password: "senha123", role: "locador" },
    { id: 23, nome: "João Pedro Costa", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83952779729, contratos: [CONTRATOS[1], CONTRATOS[4]], favoritos: [], casas: [CASAS[10], CASAS[11]], password: "senha123", role: "locador" },
    { id: 24, nome: "Fernanda Rocha", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83942067937, contratos: [CONTRATOS[9], CONTRATOS[10], CONTRATOS[18], CONTRATOS[23], CONTRATOS[28], CONTRATOS[32]], favoritos: [], casas: [CASAS[3], CASAS[8], CASAS[9], CASAS[15], CASAS[18]], password: "senha123", role: "locador" },
    { id: 25, nome: "Ana Clara Barros", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: 83933383125, contratos: [], favoritos: [], casas: [], password: "senha123", role: "locador" },
];
