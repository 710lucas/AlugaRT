import { Casa } from '../types/Casa';

export const searchCasasByText = (casas: Casa[], searchTerm: string): Casa[] => {
    if (!searchTerm.trim()) {
        return casas;
    }

    const term = searchTerm.toLowerCase().trim();

    return casas.filter(casa => {
        if (casa.nome.toLowerCase().includes(term)) {
            return true;
        }

        if (casa.descricao.toLowerCase().includes(term)) {
            return true;
        }

        if (casa.endereco.toLowerCase().includes(term)) {
            return true;
        }

        if (casa.tags.some(tag => tag.toLowerCase().includes(term))) {
            return true;
        }

        if (casa.categoria.toLowerCase().includes(term)) {
            return true;
        }

        return false;
    });
};

export const indexCasaTags = (casa: Casa): string[] => {
    const indexed = new Set<string>();

    casa.tags.forEach(tag => {
        indexed.add(tag.toLowerCase());
    });

    indexed.add(casa.categoria.toLowerCase());

    casa.nome.toLowerCase().split(' ').forEach(word => {
        if (word.length > 2) {
            indexed.add(word);
        }
    });

    return Array.from(indexed);
};
