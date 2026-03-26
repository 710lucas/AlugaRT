import { useRef, useState } from "react"
import "./ImageInput.css"
import BaseIcon from "../Icon/BaseIcon"


export type ImageInputProps = {
    imagens : string[]
    setImagens : (imagens : string[]) => void
    max? : number
}

export function convertImageToBase64(file : File) : Promise<string>{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error)
    })
}

export default function ImageInput(props : ImageInputProps){

    const {
        imagens,
        setImagens,
        max
    } = props;

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isHovering, setIsHovering] = useState<number | undefined>(undefined)
    const [showLinkInput, setShowLinkInput] = useState(false);
    const [linkValue, setLinkValue] = useState("");
    const [linkError, setLinkError] = useState("");
    // Função para validar se o link é de imagem
    function isValidImageUrl(url: string) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(url);
    }

    // Adiciona imagem por link
    function handleAddImageByLink() {
        if (!isValidImageUrl(linkValue)) {
            setLinkError("URL inválida ou não é uma imagem suportada.");
            return;
        }
        setImagens([...imagens, linkValue]);
        setLinkValue("");
        setShowLinkInput(false);
        setLinkError("");
    }

    const processFiles = async (files : File[]) => {
        try{
            const imageFiles = files.filter(file => file.type.startsWith('image/'))
            const base64Images = await Promise.all(imageFiles.map(convertImageToBase64))
            setImagens([...imagens, ...base64Images]);
        } catch(err){
            console.error(err)
        }
    }

    async function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;

        if(!files) return;

        await processFiles(Array.from(files));

        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    async function handleDelete (indexToRemove : number) {
        let imagens_ = imagens.filter((img, index) => index !== indexToRemove);
        setImagens(imagens_)
    }

    return (
        <div className="container-imagens">
            {/* Imagem principal */}
            {
                imagens[0] !== undefined &&
                <div onMouseEnter={() => {setIsHovering(0)}} onMouseLeave={() => {setIsHovering(undefined)}} className="image-uploaded-container">
                    <img src={imagens[0]} key={0} alt="" className="imagem-principal" />
                    {
                        isHovering === 0 &&
                            <div className="delete-image" onClick={() => handleDelete(0)}>
                                <BaseIcon iconName="delete"/>
                                Delete
                            </div>
                    }
                </div>
            }
            <div className="imagens-secundarias-container">
                {/* Imagens secundárias */}
                {imagens.map((img, index) => (
                    index !== 0 &&
                    <div onMouseEnter={() => {setIsHovering(index)}} onMouseLeave={() => {setIsHovering(undefined)}} className="image-uploaded-container" key={index}>
                        <img src={img} alt="" className="imagens-secundarias" />
                        {
                            isHovering === index &&
                                <div className="delete-image delete-image-secundaria" onClick={() => handleDelete(index)}>
                                    <BaseIcon iconName="delete" size={18}/>
                                    Delete
                                </div>
                        }
                    </div>
                ))}
                <input type="file" onChange={handleInputChange} multiple ref={fileInputRef} className="hidden-input-button" />
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="image-input-button"
                >
                    <BaseIcon iconName="add" size={32}/>
                </button>
                {/* Botão para adicionar por link */}
                <button
                    type="button"
                    className="image-input-button image-input-link-button"
                    style={{ marginLeft: 8 }}
                    onClick={() => setShowLinkInput((v) => !v)}
                >
                    <BaseIcon iconName="link" size={24}/>
                </button>
            </div>
            {/* Input para link de imagem */}
            {showLinkInput && (
                <div className="image-link-input-container">
                    <input
                        type="text"
                        placeholder="Cole o link da imagem (jpg, png, etc)"
                        value={linkValue}
                        onChange={e => { setLinkValue(e.target.value); setLinkError(""); }}
                        className="image-link-input"
                        style={{ marginRight: 8 }}
                    />
                    <button type="button" className="image-link-confirm" onClick={handleAddImageByLink}>
                        Adicionar
                    </button>
                    <button type="button" className="image-link-cancel" onClick={() => { setShowLinkInput(false); setLinkValue(""); setLinkError(""); }}>
                        Cancelar
                    </button>
                    {linkError && <div className="image-link-error">{linkError}</div>}
                </div>
            )}
        </div>
    )

}