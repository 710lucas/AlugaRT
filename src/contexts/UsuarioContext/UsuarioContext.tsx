import React, { createContext, useState } from "react";
import { db as defaultDb } from "../MockDatabase";
import { Usuario } from "../../types/Usuario";

interface UsuarioContextType {
  usuarios: Usuario[];
  createUsuario: (usuario: Omit<Usuario, "id">) => Usuario;
  updateUsuario: (index: number, usuario: Partial<Usuario>) => Usuario;
  deleteUsuario: (index: number) => Usuario[];
  getProprietarioByCasaId : (casaId : number) => Usuario | undefined
  getUsuarioByAvaliacaoId : (avaliacaoId : number) => Usuario | undefined
}

export const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

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
  function getProprietarioByCasaId(casaId : number){
    console.log("locadores: ", usuarios.filter(u => u.role === 'locador'))
    return usuarios.filter(u => u.role === 'locador').find(u => u.casas?.find(c => c.id === casaId) !== undefined)
  }
  function getUsuarioByAvaliacaoId(avaliacaoId : number){
    return usuarios.find(u => u.avaliacoes.find(a => a.id === avaliacaoId) != undefined)
  }

  return (
    <UsuarioContext.Provider value={{ usuarios, createUsuario, updateUsuario, deleteUsuario, getProprietarioByCasaId, getUsuarioByAvaliacaoId }}>
      {children}
    </UsuarioContext.Provider>
  );
};
