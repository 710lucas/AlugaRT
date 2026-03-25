import React, { createContext, useContext, useState } from "react";
import { db as defaultDb} from "../MockDatabase";
import { Usuario } from "../../types/Usuario";

interface UsuarioContextType {
  usuarios: Usuario[];
  createUsuario: (usuario: Omit<Usuario, "id">) => Usuario;
  updateUsuario: (index: number, usuario: Partial<Usuario>) => Usuario;
  deleteUsuario: (index: number) => Usuario[];
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>(defaultDb.readUsuarios());

  function createUsuario(usuario: Omit<Usuario, "id">) {
    const novo = defaultDb.createUsuario(usuario);
    setUsuarios(defaultDb.readUsuarios());
    return novo;
  }
  function updateUsuario(index: number, usuario: Partial<Usuario>) {
    const updated = defaultDb.updateUsuario(index, usuario);
    setUsuarios(defaultDb.readUsuarios());
    return updated;
  }
  function deleteUsuario(index: number) {
    defaultDb.deleteUsuario(index);
    setUsuarios(defaultDb.readUsuarios());
    return defaultDb.readUsuarios();
  }

  return (
    <UsuarioContext.Provider value={{ usuarios, createUsuario, updateUsuario, deleteUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
