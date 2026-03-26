import { useContext, useState, useMemo } from "react";
import CasaCard from "../../components/CasaCard/CasaCard";
import Header from "../../components/Header/Header";
import './style.css'
import { CasaContext } from "../../contexts/CasaContext/CasaContext";
import { searchCasasByText } from "../../utils/searchCasas";

export interface Filtros {
    tags: string[];
    quartos: string;
}

export default function HomePage () {

    const casaContext = useContext(CasaContext)
    const [filtros, setFiltros] = useState<Filtros>({
        tags: [],
        quartos: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [quickSearchFilters, setQuickSearchFilters] = useState<{
        casas: boolean;
        apartamentos: boolean;
        disponiveis: boolean;
    }>({
        casas: false,
        apartamentos: false,
        disponiveis: false
    });

    const casasFiltradas = useMemo(() => {
        if (!casaContext?.casas) return [];

        let resultado = searchCasasByText(casaContext.casas, searchTerm);

        if (quickSearchFilters.casas || quickSearchFilters.apartamentos || quickSearchFilters.disponiveis) {
            resultado = resultado.filter((casa) => {
                let passaFiltro = false;

                if (quickSearchFilters.casas && casa.categoria !== 'Urbano') {
                    passaFiltro = true;
                }
                if (quickSearchFilters.apartamentos && casa.categoria === 'Urbano') {
                    passaFiltro = true;
                }
                if (quickSearchFilters.disponiveis && casa.estado === 'disponivel') {
                    passaFiltro = true;
                }

                return passaFiltro;
            });
        }

        // Depois aplica os filtros adicionais (tags e quartos)
        resultado = resultado.filter((casa) => {
            if (filtros.tags.length > 0) {
                const temAtraPenasUmaTag = filtros.tags.some(tag => 
                    casa.tags.includes(tag.toLowerCase())
                );
                if (!temAtraPenasUmaTag) return false;
            }

            if (filtros.quartos !== '') {
                const quartosRequiridos = parseInt(filtros.quartos);
                if (casa.vagas < quartosRequiridos) return false;
            }

            return true;
        });

        return resultado;
    }, [casaContext?.casas, filtros, searchTerm, quickSearchFilters]);

    const handleApplyFilters = (novosFiltros: Filtros) => {
        setFiltros(novosFiltros);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleQuickSearch = (type: 'casas' | 'apartamentos' | 'disponiveis', active: boolean) => {
        setQuickSearchFilters(prev => ({
            ...prev,
            [type]: active
        }));
    };

    return (
        <div className="home-page-container">
            <Header onFiltersApply={handleApplyFilters} onSearch={handleSearch} onQuickSearch={handleQuickSearch}/>
            <div className="main-page">
                {
                    casasFiltradas.map((casa) => {
                        return <CasaCard key={casa.id} casa={casa}/>
                    })
                }
            </div>
        </div>
    )

}