import './style.css'

type SelectInputProps = {
    label: string;
    options: { value: any; name: string }[];
    value: any;
    setValue: (value: any) => void;
}

export default function SelectInput(props: SelectInputProps) {
    const { label, options, value, setValue } = props

    return (
        <div className='selectInputContainer'>
            <label className='selectInputLabel'>{label}</label>
            <select 
                className='selectInput' 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="">Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
