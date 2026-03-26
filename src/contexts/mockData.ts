import { Avaliacao } from "../types/Avaliacao";
import { Casa } from "../types/Casa";
import { Contrato } from "../types/Contrato";
import { Usuario } from "../types/Usuario";

// --- Funções Utilitárias para Geração de Imagens (Estilo Imobiliária) ---
// Trocamos paisagens por termos focados em imóveis: interiores, fachadas, salas e quartos.

// Foco em casas de praia, vilas com piscina e interiores bem iluminados
const getBeachImage = (id: number, seq: number) => 
    `https://loremflickr.com/800/600/villa,pool,interior?lock=${id}${seq}`;

// Foco em apartamentos por dentro, salas de estar modernas e condomínios
const getUrbanoImage = (id: number, seq: number) => 
    `https://loremflickr.com/800/600/apartment,livingroom,interior?lock=${id}${seq}`;

// Foco em chalés, fazendas, interiores rústicos e aconchegantes
const getCampoImage = (id: number, seq: number) => 
    `https://loremflickr.com/800/600/farmhouse,cabin,interior?lock=${id}${seq}`;

// 1. CASAS (20 Casas variadas - Imagens Únicas e Geradas Programaticamente)
export const CASAS: Casa[] = [
    // --- Praia ---
    { id: 1, nome: "Casa do Sol", descricao: "Casa ampla, bem iluminada, próxima à praia.", endereco: "Rua das Flores, 123, João Pessoa", vagas: 3, categoria: "Praia", tags: ["arejada", "vista mar", "wifi"], valor: 1200, imagens: [getBeachImage(1, 1), getBeachImage(1, 2)], estado: "indisponivel" },
    { id: 4, nome: "Cobertura Beira-Mar", descricao: "Luxuosa cobertura com vista panorâmica.", endereco: "Av. Cabo Branco, 1000, João Pessoa", vagas: 2, categoria: "Praia", tags: ["luxo", "vista mar", "piscina privativa"], valor: 3500, imagens: [getBeachImage(4, 1), getBeachImage(4, 2), getBeachImage(4, 3)], estado: "indisponivel" },
    { id: 8, nome: "Mansão das Águas", descricao: "Alto padrão com acesso direto ao mar.", endereco: "Praia de Intermares, 33, Cabedelo", vagas: 6, categoria: "Praia", tags: ["alto padrão", "pé na areia", "espaçoso"], valor: 5000, imagens: [getBeachImage(8, 1), getBeachImage(8, 2)], estado: "disponivel" },
    { id: 11, nome: "Bangalô Romântico", descricao: "Ideal para casais, vista para as falésias.", endereco: "Praia de Tambaba, s/n, Conde", vagas: 1, categoria: "Praia", tags: ["casal", "privacidade", "natureza"], valor: 1800, imagens: [getBeachImage(11, 1), getBeachImage(11, 2)], estado: "indisponivel" },
    { id: 13, nome: "Pousada familiar", descricao: "Quartos confortáveis com café da manhã.", endereco: "Av. Beira Mar, 88, Pipa", vagas: 4, categoria: "Praia", tags: ["familia", "serviço", "piscina"], valor: 2500, imagens: [getBeachImage(13, 1), getBeachImage(13, 2)], estado: "disponivel" },
    { id: 18, nome: "Ilha Privativa", descricao: "Para quem busca isolamento total.", endereco: "Baía da Traição, Ilha 1", vagas: 8, categoria: "Praia", tags: ["exclusivo", "barco", "mar"], valor: 15000, imagens: [getBeachImage(18, 1), getBeachImage(18, 2)], estado: "disponivel" },

    // --- Urbano ---
    { id: 2, nome: "Apartamento Central", descricao: "Apartamento mobiliado no centro da cidade.", endereco: "Av. Central, 456, João Pessoa", vagas: 2, categoria: "Urbano", tags: ["mobiliado", "ar-condicionado", "garagem"], valor: 900, imagens: [getUrbanoImage(2, 1), getUrbanoImage(2, 2)], estado: "disponivel" },
    { id: 5, nome: "Flat Moderno", descricao: "Ideal para executivos e estudantes.", endereco: "Rua Universitária, 50, Campina Grande", vagas: 1, categoria: "Urbano", tags: ["compacto", "wifi", "academia"], valor: 1100, imagens: [getUrbanoImage(5, 1), getUrbanoImage(5, 2)], estado: "disponivel" },
    { id: 7, nome: "Studio Compacto", descricao: "Perto de tudo, super prático.", endereco: "Av. Epitácio Pessoa, 800, João Pessoa", vagas: 1, categoria: "Urbano", tags: ["prático", "centro", "mobiliado"], valor: 750, imagens: [getUrbanoImage(7, 1), getUrbanoImage(7, 2)], estado: "indisponivel" },
    { id: 9, nome: "Loft Industrial", descricao: "Design moderno em tijolos aparentes.", endereco: "Rua da Aurora, 101, Recife", vagas: 1, categoria: "Urbano", tags: ["design", "loft", "centro"], valor: 1300, imagens: [getUrbanoImage(9, 1), getUrbanoImage(9, 2), getUrbanoImage(9, 3)], estado: "indisponivel" },
    { id: 12, nome: "Kitnet Universitária", descricao: "Apenas a 5 min da UFPB.", endereco: "Rua dos Estudantes, 42, João Pessoa", vagas: 0, categoria: "Urbano", tags: ["barato", "estudante", "simples"], valor: 550, imagens: [getUrbanoImage(12, 1)], estado: "disponivel" },
    { id: 15, nome: "Duplex Executivo", descricao: "Móveis planejados e automação residencial.", endereco: "Bairro Altiplano, 777, João Pessoa", vagas: 2, categoria: "Urbano", tags: ["tecnologia", "luxo", "novo"], valor: 4000, imagens: [getUrbanoImage(15, 1), getUrbanoImage(15, 2)], estado: "disponivel" },
    { id: 17, nome: "Sobrado Colonial", descricao: "Casa antiga reformada com muito charme.", endereco: "Rua do Carmo, 11, Olinda", vagas: 1, categoria: "Urbano", tags: ["historico", "cultural", "amplo"], valor: 1600, imagens: [getUrbanoImage(17, 1), getUrbanoImage(17, 2)], estado: "indisponivel" },
    { id: 19, nome: "Casa Container", descricao: "Sustentável e moderna.", endereco: "Rua Ecológica, 99, Campina Grande", vagas: 1, categoria: "Urbano", tags: ["sustentável", "diferente", "compacto"], valor: 800, imagens: [getUrbanoImage(19, 1)], estado: "indisponivel" },

    // --- Campo ---
    { id: 3, nome: "Chácara Verde", descricao: "Lugar tranquilo com piscina e área de lazer.", endereco: "Estrada do Sol, Km 5, Bananeiras", vagas: 5, categoria: "Campo", tags: ["piscina", "churrasqueira", "natureza"], valor: 850, imagens: [getCampoImage(3, 1), getCampoImage(3, 2)], estado: "disponivel" },
    { id: 6, nome: "Casa da Montanha", descricao: "Clima frio e aconchegante para o inverno.", endereco: "Rua das Lareiras, 12, Areia", vagas: 4, categoria: "Campo", tags: ["lareira", "frio", "natureza"], valor: 1500, imagens: [getCampoImage(6, 1), getCampoImage(6, 2)], estado: "disponivel" },
    { id: 10, nome: "Sítio Recanto", descricao: "Área verde gigante com pomar e cavalos.", endereco: "Rodovia BR 232, Km 45, Gravatá", vagas: 10, categoria: "Campo", tags: ["animais", "espaço", "pomar"], valor: 2200, imagens: [getCampoImage(10, 1), getCampoImage(10, 2)], estado: "disponivel" },
    { id: 14, nome: "Casa de Vidro", descricao: "Inteira de vidro no meio da floresta.", endereco: "Serra de Martins, s/n", vagas: 2, categoria: "Campo", tags: ["exclusivo", "arquitetura", "isolado"], valor: 3100, imagens: [getCampoImage(14, 1), getCampoImage(14, 2)], estado: "indisponivel" },
    { id: 16, nome: "Chalé Suíço", descricao: "Inspirado na arquitetura europeia.", endereco: "Centro, 10, Martins", vagas: 2, categoria: "Campo", tags: ["frio", "romantico", "lareira"], valor: 1400, imagens: [getCampoImage(16, 1), getCampoImage(16, 2)], estado: "disponivel" },
    { id: 20, nome: "Fazenda Histórica", descricao: "Mergulhe no passado colonial.", endereco: "Zona Rural, Areia", vagas: 12, categoria: "Campo", tags: ["historia", "grande grupo", "eventos"], valor: 6000, imagens: [getCampoImage(20, 1), getCampoImage(20, 8)], estado: "disponivel" }
];

// (CONTRATOS, AVALIACOES, USUARIOS permanecem os mesmos da versão anterior)
// 2. CONTRATOS (Várias casas com contratos ativos)
export const CONTRATOS: Contrato[] = [
    { casa: CASAS[0], dataInicio: new Date("2024-03-01"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-03-02") },
    { casa: CASAS[3], dataInicio: new Date("2024-01-15"), dataFim: new Date("2024-12-15"), enviado: true, aceito: true, dataAceito: new Date("2024-01-16") },
    { casa: CASAS[6], dataInicio: new Date("2024-02-10"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-02-11") },
    { casa: CASAS[8], dataInicio: new Date("2024-04-01"), dataFim: new Date("2025-04-01"), enviado: true, aceito: true, dataAceito: new Date("2024-03-25") },
    { casa: CASAS[10], dataInicio: new Date("2024-05-10"), dataFim: undefined, enviado: true, aceito: false, dataAceito: undefined }, // Contrato pendente
    { casa: CASAS[13], dataInicio: new Date("2023-11-01"), dataFim: new Date("2024-05-01"), enviado: true, aceito: true, dataAceito: new Date("2023-10-30") },
    { casa: CASAS[16], dataInicio: new Date("2024-02-20"), dataFim: undefined, enviado: true, aceito: true, dataAceito: new Date("2024-02-21") },
    { casa: CASAS[18], dataInicio: new Date("2024-01-05"), dataFim: new Date("2026-01-05"), enviado: true, aceito: true, dataAceito: new Date("2024-01-06") }
];

// 3. AVALIAÇÕES (Expandido para 25 avaliações variadas)
export const AVALIACOES: Avaliacao[] = [
    { id: 1, notaCasa: 5, descricaoCasa: "Casa excelente, muito confortável!", notaLocador: 4, descricaoLocador: "Locador atencioso.", casa: CASAS[0] },
    { id: 2, notaCasa: 4, descricaoCasa: "Apartamento bem localizado, mas um pouco barulhento.", notaLocador: 5, descricaoLocador: "Locador muito educado.", casa: CASAS[1] },
    { id: 3, notaCasa: 5, descricaoCasa: "Cobertura espetacular, valeu cada centavo.", notaLocador: 5, descricaoLocador: "Tudo perfeito.", casa: CASAS[3] },
    { id: 4, notaCasa: 3, descricaoCasa: "O studio é menor do que parecia nas fotos.", notaLocador: 4, descricaoLocador: "Boa comunicação.", casa: CASAS[6] },
    { id: 5, notaCasa: 5, descricaoCasa: "Lugar incrível para descansar, a piscina estava ótima.", notaLocador: 5, descricaoLocador: "Dona Maria foi um anjo.", casa: CASAS[2] },
    { id: 6, notaCasa: 2, descricaoCasa: "Tivemos problemas com a internet o tempo todo.", notaLocador: 3, descricaoLocador: "Demorou a responder.", casa: CASAS[8] },
    { id: 7, notaCasa: 5, descricaoCasa: "Vista inesquecível do bangalô.", notaLocador: 5, descricaoLocador: "Perfeito.", casa: CASAS[10] },
    { id: 8, notaCasa: 4, descricaoCasa: "Casa de vidro linda, mas faz muito calor de dia.", notaLocador: 4, descricaoLocador: "Razoável.", casa: CASAS[13] },
    { id: 9, notaCasa: 5, descricaoCasa: "O sobrado colonial superou as expectativas.", notaLocador: 5, descricaoLocador: "Super atencioso.", casa: CASAS[16] },
    { id: 10, notaCasa: 4, descricaoCasa: "Flat moderno bem equipado, ótimo custo benefício.", notaLocador: 4, descricaoLocador: "Tranquilo.", casa: CASAS[4] },
    { id: 11, notaCasa: 5, descricaoCasa: "Mansão impecável, festa em família maravilhosa.", notaLocador: 5, descricaoLocador: "Extremamente profissional.", casa: CASAS[7] },
    { id: 12, notaCasa: 3, descricaoCasa: "Casa container é apertada, não gostei muito.", notaLocador: 4, descricaoLocador: "Educado.", casa: CASAS[18] },
    
    // --- Novas Avaliações ---
    { id: 13, notaCasa: 5, descricaoCasa: "A ilha privativa é o melhor lugar do mundo para se isolar.", notaLocador: 5, descricaoLocador: "Tudo esquematizado com o barqueiro, nota 10.", casa: CASAS[17] },
    { id: 14, notaCasa: 4, descricaoCasa: "Duplex tecnológico muito legal, mas a Alexa estava desconfigurada no primeiro dia.", notaLocador: 5, descricaoLocador: "Resolveu o problema rápido.", casa: CASAS[14] },
    { id: 15, notaCasa: 5, descricaoCasa: "Fazenda fantástica, as crianças amaram os cavalos.", notaLocador: 5, descricaoLocador: "Muito receptivo, deixou um bolo para nós.", casa: CASAS[19] },
    { id: 16, notaCasa: 3, descricaoCasa: "Kitnet quebra o galho para estudante, mas tem mofo no banheiro.", notaLocador: 4, descricaoLocador: "Deixou produtos de limpeza, pelo menos.", casa: CASAS[11] },
    { id: 17, notaCasa: 4, descricaoCasa: "O chalé é muito charmoso, mas faltou lenha para a lareira.", notaLocador: 3, descricaoLocador: "Tivemos que comprar lenha na cidade.", casa: CASAS[15] },
    { id: 18, notaCasa: 5, descricaoCasa: "Loft maravilhoso, super estiloso e perto dos melhores bares.", notaLocador: 5, descricaoLocador: "Deu ótimas dicas de restaurantes locais.", casa: CASAS[8] },
    { id: 19, notaCasa: 4, descricaoCasa: "Sítio ótimo para grandes grupos. Churrasqueira boa.", notaLocador: 4, descricaoLocador: "Fácil de negociar os horários.", casa: CASAS[9] },
    { id: 20, notaCasa: 5, descricaoCasa: "A Casa do Sol é incrível, voltaremos no próximo verão.", notaLocador: 5, descricaoLocador: "Anfitriã maravilhosa.", casa: CASAS[0] },
    { id: 21, notaCasa: 2, descricaoCasa: "Pousada com muito barulho de noite, não conseguimos dormir.", notaLocador: 3, descricaoLocador: "Não fez nada a respeito do barulho dos vizinhos.", casa: CASAS[12] },
    { id: 22, notaCasa: 5, descricaoCasa: "Cobertura absurda de linda. A piscina privativa estava limpa.", notaLocador: 5, descricaoLocador: "Tudo ocorreu perfeitamente.", casa: CASAS[3] },
    { id: 23, notaCasa: 4, descricaoCasa: "Apartamento central e prático, bom para viagem de negócios.", notaLocador: 5, descricaoLocador: "Check-in super fácil com senha.", casa: CASAS[1] },
    { id: 24, notaCasa: 5, descricaoCasa: "O flat é exatamente como nas fotos. Academia do prédio é ótima.", notaLocador: 5, descricaoLocador: "Responde no WhatsApp em 5 minutos.", casa: CASAS[4] },
    { id: 25, notaCasa: 4, descricaoCasa: "Chácara muito gostosa, mas a água da piscina estava gelada.", notaLocador: 4, descricaoLocador: "Caseiro super gente boa.", casa: CASAS[2] }
];

// 4. USUÁRIOS (15 Locatários, 10 Locadores)
export const USUARIOS: Usuario[] = [
    // --- LOCATÁRIOS ---
    { id: 1, nome: "João Silva", avaliacoes: [AVALIACOES[0], AVALIACOES[19]], createdAt: new Date("2024-01-10"), telefone: 83999990001, contratos: [CONTRATOS[0]], favoritos: [CASAS[0], CASAS[3], CASAS[10]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 2, nome: "Ana Paula", avaliacoes: [AVALIACOES[1], AVALIACOES[4], AVALIACOES[22]], createdAt: new Date("2024-03-05"), telefone: 83999990002, contratos: [], favoritos: [CASAS[1], CASAS[2]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 3, nome: "Lucas Mendes", avaliacoes: [AVALIACOES[2], AVALIACOES[21]], createdAt: new Date("2023-11-20"), telefone: 83999990003, contratos: [CONTRATOS[1]], favoritos: [CASAS[3], CASAS[7], CASAS[14]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 4, nome: "Mariana Costa", avaliacoes: [AVALIACOES[9], AVALIACOES[23]], createdAt: new Date("2024-02-28"), telefone: 83999990004, contratos: [], favoritos: [CASAS[2], CASAS[5]], casas: undefined, password: "senha123", role: "locatario" },
    /**/{ id: 5, nome: "Felipe Alves", avaliacoes: [AVALIACOES[3]], createdAt: new Date("2024-01-05"), telefone: 83999990005, contratos: [CONTRATOS[2]], favoritos: [CASAS[6], CASAS[8]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 6, nome: "Juliana Rocha", avaliacoes: [AVALIACOES[12]], createdAt: new Date("2024-04-10"), telefone: 83999990006, contratos: [], favoritos: [CASAS[4], CASAS[19]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 7, nome: "Pedro Henrique", avaliacoes: [AVALIACOES[5], AVALIACOES[18]], createdAt: new Date("2023-12-15"), telefone: 83999990007, contratos: [CONTRATOS[3]], favoritos: [CASAS[8], CASAS[9]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 8, nome: "Camila Barros", avaliacoes: [AVALIACOES[6], AVALIACOES[15]], createdAt: new Date("2024-02-01"), telefone: 83999990008, contratos: [CONTRATOS[4]], favoritos: [CASAS[10], CASAS[11]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 9, nome: "Rodrigo Tavares", avaliacoes: [AVALIACOES[7]], createdAt: new Date("2023-09-10"), telefone: 83999990009, contratos: [CONTRATOS[5]], favoritos: [CASAS[13], CASAS[15]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 10, nome: "Amanda Lima", avaliacoes: [AVALIACOES[8], AVALIACOES[14]], createdAt: new Date("2024-01-22"), telefone: 83999990010, contratos: [CONTRATOS[6]], favoritos: [CASAS[16], CASAS[17]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 11, nome: "Bruno Gomes", avaliacoes: [AVALIACOES[10], AVALIACOES[20]], createdAt: new Date("2023-05-30"), telefone: 83999990011, contratos: [], favoritos: [CASAS[7]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 12, nome: "Fernanda Dias", avaliacoes: [AVALIACOES[11]], createdAt: new Date("2024-03-12"), telefone: 83999990012, contratos: [CONTRATOS[7]], favoritos: [CASAS[18], CASAS[12]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 13, nome: "Diego Azevedo", avaliacoes: [AVALIACOES[17]], createdAt: new Date("2024-04-02"), telefone: 83999990013, contratos: [], favoritos: [CASAS[0], CASAS[1]], casas: undefined, password: "senha123", role: "locatario" },
    { id: 14, nome: "Sofia Carvalho", avaliacoes: [AVALIACOES[16]], createdAt: new Date("2024-04-15"), telefone: 83999990014, contratos: [], favoritos: [], casas: undefined, password: "senha123", role: "locatario" },
    { id: 15, nome: "Gabriel Martins", avaliacoes: [AVALIACOES[13], AVALIACOES[24]], createdAt: new Date("2024-04-20"), telefone: 83999990015, contratos: [], favoritos: [CASAS[19]], casas: undefined, password: "senha123", role: "locatario" },

    // --- LOCADORES ---
    { id: 16, nome: "Maria Souza", avaliacoes: [], createdAt: new Date("2023-10-15"), telefone: 83999990016, contratos: [CONTRATOS[0], CONTRATOS[4]], favoritos: [], casas: [CASAS[0], CASAS[1], CASAS[10]], password: "senha123", role: "locador" },
    { id: 17, nome: "Carlos Lima", avaliacoes: [], createdAt: new Date("2023-09-20"), telefone: 83999990017, contratos: [], favoritos: [], casas: [CASAS[2], CASAS[9]], password: "senha123", role: "locador" },
    { id: 18, nome: "Beatriz Nogueira", avaliacoes: [], createdAt: new Date("2023-08-11"), telefone: 83999990018, contratos: [CONTRATOS[1]], favoritos: [], casas: [CASAS[3], CASAS[4]], password: "senha123", role: "locador" },
    { id: 19, nome: "Thiago Martins", avaliacoes: [], createdAt: new Date("2023-12-01"), telefone: 83999990019, contratos: [CONTRATOS[2]], favoritos: [], casas: [CASAS[5], CASAS[6], CASAS[7]], password: "senha123", role: "locador" },
    { id: 20, nome: "Roberto Freitas", avaliacoes: [], createdAt: new Date("2022-11-10"), telefone: 83999990020, contratos: [CONTRATOS[3]], favoritos: [], casas: [CASAS[8], CASAS[11]], password: "senha123", role: "locador" },
    { id: 21, nome: "Vanessa Ribeiro", avaliacoes: [], createdAt: new Date("2023-01-05"), telefone: 83999990021, contratos: [CONTRATOS[5]], favoritos: [], casas: [CASAS[12], CASAS[13]], password: "senha123", role: "locador" },
    { id: 22, nome: "Eduardo Fonseca", avaliacoes: [], createdAt: new Date("2023-03-22"), telefone: 83999990022, contratos: [], favoritos: [], casas: [CASAS[14], CASAS[15]], password: "senha123", role: "locador" },
    { id: 23, nome: "Luciana Monteiro", avaliacoes: [], createdAt: new Date("2023-06-14"), telefone: 83999990023, contratos: [CONTRATOS[6]], favoritos: [], casas: [CASAS[16], CASAS[17]], password: "senha123", role: "locador" },
    { id: 24, nome: "Igor Dantas", avaliacoes: [], createdAt: new Date("2022-09-09"), telefone: 83999990024, contratos: [CONTRATOS[7]], favoritos: [], casas: [CASAS[18]], password: "senha123", role: "locador" },
    { id: 25, nome: "Patrícia Viana", avaliacoes: [], createdAt: new Date("2024-01-02"), telefone: 83999990025, contratos: [], favoritos: [], casas: [CASAS[19]], password: "senha123", role: "locador" }
];