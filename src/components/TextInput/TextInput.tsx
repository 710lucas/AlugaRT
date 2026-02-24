import { useState } from "react";
import "./TextInput.css"

export type TextInputProps = {
    label : string;
    placeholder : string;
    value : string;
    setValue : (newValue : string) => void;
    validate? : (value : string) => {
        isValid : boolean;
        errorMessage : string;
    };
    charCount? : boolean;
    maxLength? : number;
}

export default function TextInput(props : TextInputProps){

    const {
        label,
        placeholder,
        value,
        setValue,
        validate,
        charCount,
        maxLength
    } = props;

    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleValidate = () => {
        if(validate !== undefined){
            const validated = validate(value) as {isValid : boolean; errorMessage : string};
            if(!validated.isValid){
                setIsValid(false);
                setErrorMessage(validated.errorMessage)
            }
            else{
                setIsValid(true);
            }
        }
    }

    const handleChange = (value : string) => {

        handleValidate();

        setValue(value)
    }

    return (
        <div className="text-input-container">
            <span className="text-input-label">{label}</span>
            <input 
                type="text" 
                name="" 
                id="" 
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
                onBlur={handleValidate}
            />
            <div className="text-input-extra-info">
                {
                    charCount === true && (
                        <span className="text-input-char-count">
                            {value.length}{maxLength !== undefined ? `/${maxLength}` : ''}
                        </span>
                    )
                }
                {
                    !isValid && (
                        <span className="errorMessage">
                            {errorMessage}
                        </span>
                    )
                }
            </div>
        </div>
    )

}