import { useContext, useEffect, useState } from "react"
import "./style.css"
import { AuthContext } from "../../contexts/AuthContext/AuthContext"

export default function LoginPage(props : any){


    const authContext = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [confirmMessage, setConfirmMessage] = useState<string | undefined>(undefined)

    function handleLogin (){
        try{
            const usuario = authContext.login(nome, password);
            if(!usuario){
                setErrorMessage('Nome ou Senha inválidos, tente novamente')
                setTimeout(() => {setErrorMessage(undefined)}, 3000)
                return;
            }
            setErrorMessage(undefined)
            setConfirmMessage('Login realizado com sucesso, redirecionando para pagina principal')
            setTimeout(() => {
                document.location = '/'
            }, 1000)
        } catch(err){
            console.error(err);
            setErrorMessage('Nome ou Senha inválidos, tente novamente')
        }
    }

    return (
        <div className="loginPage">
            <div className="loginFormContainer">
                <h1>Aluga<span style={{color: 'var(--vermelho)'}}>RT</span></h1>
                <h2>Realizar Login</h2>
                <input type="text"
                    value={nome}
                    onChange={(e) => {setNome(e.target.value)}}
                    placeholder="Nome de usuário"
                 />
                <input type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Senha"
                 />
                 <button onClick={handleLogin}>Enviar</button>
                 {
                    errorMessage && <span className="errorMessage">{errorMessage}</span>
                 }
                 {
                    confirmMessage && <span className="confirmMessage">{confirmMessage}</span>
                 }
            </div>
        </div>
    )

}