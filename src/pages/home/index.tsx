import { useContext } from "react";
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

export default function HomePage () {

    const casaContext = useContext(CasaContext)

    return (
        <div className="home-page-container">
            <Header/>
            <div className="main-page">
                {
                    casaContext?.casas.map((casa) => {
                        return <CasaCard casa={casa}/>
                    })
                }
            </div>
        </div>
    )

}