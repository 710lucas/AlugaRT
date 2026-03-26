import { Casa } from '../types/Casa';

/**
 * Função de busca que filtra casas por texto (nome, descrição, endereço, tags)
 * @param casas - Array de casas para filtrar
 * @param searchTerm - Termo de busca
 * @returns Array de casas que correspondem ao termo de busca
 */
export const searchCasasByText = (casas: Casa[], searchTerm: string): Casa[] => {
    if (!searchTerm.trim()) {
        return casas;
    }

    const term = searchTerm.toLowerCase().trim();

    return casas.filter(casa => {
        // Busca no nome
        if (casa.nome.toLowerCase().includes(term)) {
            return true;
        }

        // Busca na descrição
        if (casa.descricao.toLowerCase().includes(term)) {
            return true;
        }

        // Busca no endereço
        if (casa.endereco.toLowerCase().includes(term)) {
            return true;
        }

        // Busca nas tags
        if (casa.tags.some(tag => tag.toLowerCase().includes(term))) {
            return true;
        }

        // Busca na categoria
        if (casa.categoria.toLowerCase().includes(term)) {
            return true;
        }

        return false;
    });
};

/**
 * Função que indexa as tags de uma casa para busca
 * @param casa - Casa para indexar
 * @returns Array com todas as palavras-chave indexadas
 */
export const indexCasaTags = (casa: Casa): string[] => {
    const indexed = new Set<string>();

    // Adiciona todas as tags
    casa.tags.forEach(tag => {
        indexed.add(tag.toLowerCase());
    });

    // Adiciona a categoria
    indexed.add(casa.categoria.toLowerCase());

    // Adiciona palavras-chave do nome
    casa.nome.toLowerCase().split(' ').forEach(word => {
        if (word.length > 2) {
            indexed.add(word);
        }
    });

    return Array.from(indexed);
};
