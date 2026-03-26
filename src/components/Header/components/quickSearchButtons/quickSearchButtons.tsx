import { useEffect, useState } from "react"
import './style.css'

type quickButtonsProps = {
    name : string;
    onClick : (clicked : boolean) => void;
}

export default function QuickSearchButtons (props : quickButtonsProps) { 

    const [clicked, setClicked] = useState(false);

    function handleClick () {
        setClicked(!clicked); 
    }
    useEffect(() => {
        props.onClick(clicked);
    }, [clicked])

    return (
        <div className={`quick-search-button ${clicked ? 'clicked-button' : ''}`} onClick={handleClick}>{props.name}</div>
    )
}