import { createContext, useEffect, useState } from "react";
import { Usuario } from "../../types/Usuario";
import { db } from "../MockDatabase";


export type AuthContextType = {
    usuario? : Usuario;
    setUsuario: (usuario : Usuario) => void;
    login : (nome : string, senha : string) => Usuario | void;
    logout : () => void
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthContextProvider({children} : {children : React.ReactNode}){

    const [usuario, setUsuario] = useState<undefined | Usuario>();

    const LOCAL_STORAGE_ITEM = 'loggedUser'

    useEffect(() => {
        const localUser = localStorage.getItem(LOCAL_STORAGE_ITEM)
        if(localUser !== null){
            const localUserObj = db.getUsuarioByNome(localUser)
            setUsuario(localUserObj)
            console.log(localUserObj)
        }
    }, [])

    function login(nome : string, senha : string) : Usuario | void {
        const usuario = db.getUsuarioByNome(nome);
        if(!usuario)
            throw new Error("Usuário não encontrado")
        if(usuario.password === senha){
            localStorage.setItem(LOCAL_STORAGE_ITEM, usuario.nome)
            setUsuario(usuario)
            return usuario;
        }
    }

    function logout() : void {
        localStorage.removeItem(LOCAL_STORAGE_ITEM);
        setUsuario(undefined)
    }

    return(
        <AuthContext.Provider value={{
            usuario, setUsuario, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )


}