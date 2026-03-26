import fs from 'fs';

// ==========================================
// CONFIGURAÇÕES DE QUANTIDADE
// ==========================================
const QTD_CASAS = 20;
const QTD_LOCATARIOS = 15;
const QTD_LOCADORES = 10;

// ==========================================
// POOLS DE DADOS REAIS
// ==========================================
const imagensPool = [
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80"
];

const nomes = ["João Pedro", "Ana Clara", "Lucas", "Mariana", "Felipe", "Juliana", "Thiago", "Camila", "Rodrigo", "Letícia", "Matheus", "Beatriz", "Rafael", "Isadora", "Igor", "Fernanda"];
const sobrenomes = ["Silva", "Costa", "Mendes", "Alves", "Rocha", "Henrique", "Barros", "Tavares", "Lima", "Gomes", "Dias", "Azevedo", "Carvalho", "Martins", "Souza", "Cavalcanti"];
const categorias = ["Praia", "Urbano", "Campo"];
const estados = ["disponivel", "indisponivel"];
const tagsBase = ["wifi", "piscina", "garagem", "ar-condicionado", "churrasqueira", "vista mar", "pet-friendly", "varanda gourmet", "home office", "academia"];

// Endereços mais realistas e localizados
const enderecos = {
    "Praia": ["Av. Cabo Branco, João Pessoa - PB", "Rua do Surfista, Intermares, Cabedelo - PB", "Rua Principal, Pipa - RN", "Av. Beira Mar, Recife - PE", "Rua das Tartarugas, Bessa, João Pessoa - PB"],
    "Urbano": ["Rua Empresário João Rodrigues, Bancários, João Pessoa - PB", "Av. Senador Ruy Carneiro, Miramar, João Pessoa - PB", "Rua da Aurora, Santo Amaro, Recife - PE", "Av. Paulista, Bela Vista, São Paulo - SP", "Rua Epitácio Pessoa, Tambaú, João Pessoa - PB"],
    "Campo": ["Sítio Alto da Serra, Bananeiras - PB", "Condomínio Bosque de Areia, Areia - PB", "Estrada de Aldeia, Camaragibe - PE", "Sítio Pôr do Sol, Gravatá - PE", "Rua das Hortênsias, Martins - RN"]
};

// Nomes de casas que chamam atenção
const prefixosCasa = ["Lindo Flat", "Casa Espaçosa", "Studio Moderno", "Cobertura de Luxo", "Chalé Aconchegante", "Bangalô Charme", "Apartamento Prático", "Refúgio", "Cantinho"];
const sufixosCasa = ["com Vista para o Mar", "no Coração da Cidade", "com Piscina Privativa", "perto de tudo", "na Natureza", "com Varanda Gourmet", "para Home Office", "com Design Industrial"];

// Avaliações verossímeis (misturando elogios e pequenas críticas)
const descricoesCasaReview = [
    "Lugar incrível! A vista é surreal e o Wi-Fi funcionou super bem para o meu home office. Voltarei com certeza.",
    "O apartamento é exatamente como nas fotos, muito limpo e organizado. O único ponto é que o barulho da rua incomoda um pouco à noite.",
    "Excelente custo-benefício. Camas muito confortáveis e cozinha super equipada. A área da churrasqueira rendeu ótimos momentos.",
    "A localização é perfeita, perto de padarias, mercados e da praia. O chuveiro demorava um pouco para esquentar, mas nada que atrapalhasse a viagem.",
    "As fotos não fazem jus ao lugar, é muito maior e mais bonito pessoalmente. A decoração é de super bom gosto.",
    "Espaço funcional e bem dividido. Senti falta apenas de mais utensílios na cozinha, mas deu para nos virarmos bem."
];

const descricoesLocadorReview = [
    "Anfitrião super atencioso, nos deu dicas de restaurantes locais e o check-in foi super tranquilo por senha.",
    "Responde muito rápido no WhatsApp e foi extremamente flexível com nosso horário de check-out. Nota 10!",
    "Tivemos um pequeno problema com o ar-condicionado no primeiro dia, mas ele mandou um técnico consertar na mesma hora. Excelente suporte.",
    "Comunicação clara e objetiva. Chegamos e havia cápsulas de café e águas de cortesia na geladeira. Detalhes que fazem a diferença.",
    "Anfitrião correto, cumpriu tudo que prometeu no anúncio. Apenas o contato foi um pouco burocrático, mas tudo correu bem."
];

// Utilitários
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomItem = (arr) => arr[randomInt(0, arr.length - 1)];
const randomName = () => `${randomItem(nomes)} ${randomItem(sobrenomes)}`;
const randomImages = () => [randomItem(imagensPool), randomItem(imagensPool), randomItem(imagensPool)];
const randomTags = () => {
    let t = new Set([randomItem(tagsBase), randomItem(tagsBase), randomItem(tagsBase), randomItem(tagsBase)]);
    return Array.from(t);
};

// ==========================================
// 1. GERAÇÃO DE DADOS 
// ==========================================

// CASAS
let casas = [];
for (let i = 0; i < QTD_CASAS; i++) {
    const categoria = randomItem(categorias);
    casas.push({
        id: i + 1,
        nome: `${randomItem(prefixosCasa)} ${randomItem(sufixosCasa)}`,
        descricao: `Propriedade recém-reformada na categoria ${categoria}. Conta com espaços integrados, iluminação natural e móveis planejados. Ideal para casais, pequenas famílias ou nômades digitais buscando conforto e praticidade. Acesso fácil a comércio local e vias principais.`,
        endereco: `${randomItem(enderecos[categoria])}, ${randomInt(10, 999)}`,
        vagas: randomInt(0, 3),
        categoria: categoria,
        tags: randomTags(),
        valor: randomInt(600, 3500),
        imagens: randomImages(),
        estado: randomItem(estados)
    });
}

// LOCADORES
let locadores = [];
for (let i = 0; i < QTD_LOCADORES; i++) {
    locadores.push({
        id: i + 1 + QTD_LOCATARIOS, 
        nome: randomName(),
        telefone: Number(`839${randomInt(1000, 9999)}${randomInt(1000, 9999)}`),
        role: "locador",
        casasIndices: [], 
        contratosIndices: []
    });
}

// Distribuir as casas
casas.forEach((casa, index) => {
    let dono = randomItem(locadores);
    dono.casasIndices.push(index);
});

// LOCATÁRIOS
let locatarios = [];
for (let i = 0; i < QTD_LOCATARIOS; i++) {
    locatarios.push({
        id: i + 1,
        nome: randomName(),
        telefone: Number(`839${randomInt(1000, 9999)}${randomInt(1000, 9999)}`),
        role: "locatario",
        favoritosIndices: [randomInt(0, QTD_CASAS - 1), randomInt(0, QTD_CASAS - 1)],
        contratosIndices: [],
        avaliacoesIndices: []
    });
}

// CONTRATOS & AVALIAÇÕES
let contratos = [];
let avaliacoes = [];

locatarios.forEach((locatario) => {
    let qtdContratos = randomInt(1, 3); // Todo locatário tem pelo menos 1 contrato agora
    
    for (let c = 0; c < qtdContratos; c++) {
        let casaIdx = randomInt(0, casas.length - 1);
        let idxContratoAtual = contratos.length;
        
        contratos.push({
            casaIndex: casaIdx,
            dataInicio: "2024-02-01",
            dataFim: Math.random() > 0.4 ? "2024-11-30" : "undefined",
            enviado: true,
            aceito: true,
            dataAceito: "2024-01-25"
        });

        locatario.contratosIndices.push(idxContratoAtual);

        let locadorDono = locadores.find(l => l.casasIndices.includes(casaIdx));
        if (locadorDono) {
            locadorDono.contratosIndices.push(idxContratoAtual);
        }

        // 70% de chance de avaliar
        if (Math.random() > 0.3) {
            let idxAvaliacaoAtual = avaliacoes.length;
            
            // Lógica para variar as notas (a maioria boa, algumas médias)
            let notaC = Math.random() > 0.8 ? 3 : randomInt(4, 5);
            let notaL = Math.random() > 0.9 ? 3 : randomInt(4, 5);

            avaliacoes.push({
                id: idxAvaliacaoAtual + 1,
                notaCasa: notaC,
                descricaoCasa: randomItem(descricoesCasaReview),
                notaLocador: notaL,
                descricaoLocador: randomItem(descricoesLocadorReview),
                casaIndex: casaIdx
            });
            locatario.avaliacoesIndices.push(idxAvaliacaoAtual);
        }
    }
});

// ==========================================
// 2. CONSTRUÇÃO DO ARQUIVO TYPESCRIPT
// ==========================================
let output = `import { Avaliacao } from "../types/Avaliacao";
import { Casa } from "../types/Casa";
import { Contrato } from "../types/Contrato";
import { Usuario } from "../types/Usuario";

// 1. CASAS (${casas.length} Casas)
export const CASAS: Casa[] = [\n`;

casas.forEach(c => {
    output += `    {
        id: ${c.id},
        nome: "${c.nome}",
        descricao: "${c.descricao}",
        endereco: "${c.endereco}",
        vagas: ${c.vagas},
        categoria: "${c.categoria}",
        tags: ${JSON.stringify(c.tags)},
        valor: ${c.valor},
        imagens: ${JSON.stringify(c.imagens)},
        estado: "${c.estado}"
    },\n`;
});
output += `];\n\n`;

output += `// 2. CONTRATOS (${contratos.length} Contratos)\nexport const CONTRATOS: Contrato[] = [\n`;
contratos.forEach(c => {
    let dFim = c.dataFim === "undefined" ? "undefined" : `new Date("${c.dataFim}")`;
    output += `    { casa: CASAS[${c.casaIndex}], dataInicio: new Date("${c.dataInicio}"), dataFim: ${dFim}, enviado: ${c.enviado}, aceito: ${c.aceito}, dataAceito: new Date("${c.dataAceito}") },\n`;
});
output += `];\n\n`;

output += `// 3. AVALIACOES (${avaliacoes.length} Avaliações)\nexport const AVALIACOES: Avaliacao[] = [\n`;
avaliacoes.forEach(a => {
    output += `    {
        id: ${a.id},
        notaCasa: ${a.notaCasa},
        descricaoCasa: "${a.descricaoCasa}",
        notaLocador: ${a.notaLocador},
        descricaoLocador: "${a.descricaoLocador}",
        casa: CASAS[${a.casaIndex}]
    },\n`;
});
output += `];\n\n`;

output += `// 4. USUARIOS (${locatarios.length} Locatários, ${locadores.length} Locadores)\nexport const USUARIOS: Usuario[] = [\n`;

// Print Locatários
output += `    // --- LOCATÁRIOS ---\n`;
locatarios.forEach(u => {
    let favs = u.favoritosIndices.map(i => `CASAS[${i}]`).join(", ");
    let contrs = u.contratosIndices.map(i => `CONTRATOS[${i}]`).join(", ");
    let avs = u.avaliacoesIndices.map(i => `AVALIACOES[${i}]`).join(", ");
    
    output += `    { id: ${u.id}, nome: "${u.nome}", avaliacoes: [${avs}], createdAt: new Date("2024-01-01"), telefone: ${u.telefone}, contratos: [${contrs}], favoritos: [${favs}], casas: undefined, password: "senha123", role: "${u.role}" },\n`;
});

// Print Locadores
output += `\n    // --- LOCADORES ---\n`;
locadores.forEach(u => {
    let casasRef = u.casasIndices.map(i => `CASAS[${i}]`).join(", ");
    let contrs = u.contratosIndices.map(i => `CONTRATOS[${i}]`).join(", ");
    
    output += `    { id: ${u.id}, nome: "${u.nome}", avaliacoes: [], createdAt: new Date("2023-06-15"), telefone: ${u.telefone}, contratos: [${contrs}], favoritos: [], casas: [${casasRef}], password: "senha123", role: "${u.role}" },\n`;
});
output += `];\n`;

fs.writeFileSync("dadosGerados.ts", output, "utf-8");
console.log("Sucesso! Arquivo 'dadosGerados.ts' criado.");