import { useContext, useState, useMemo } from "react";
import CasaCard from "../../components/CasaCard/CasaCard";
import Header from "../../components/Header/Header";
import './style.css'
import { CasaContext } from "../../contexts/CasaContext/CasaContext";

export type Casa = {
    nome : string;
    descricao : string;
    valor : number;
    status : 'Disponível' | 'Indisponível';
    imagem : string;
}

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

    const casasFiltradas = useMemo(() => {
        if (!casaContext?.casas) return [];

        return casaContext.casas.filter((casa) => {
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
    }, [casaContext?.casas, filtros]);

    const handleApplyFilters = (novosFiltros: Filtros) => {
        setFiltros(novosFiltros);
    };

    return (
        <div className="home-page-container">
            <Header onFiltersApply={handleApplyFilters}/>
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