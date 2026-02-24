import './style.css'

type tagParaCasa = {
    name: String;
}

export default function TagParaCasa (props : tagParaCasa){
    const {name} = props
    return(
        <div className='tagParaCasa'>{name}</div>
    )
}