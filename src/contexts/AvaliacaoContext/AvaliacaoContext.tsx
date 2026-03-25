import React, { createContext, useContext, useState } from "react";
import { db as defaultDb} from "../MockDatabase";
import { Avaliacao } from "../../types/Avaliacao";

interface AvaliacaoContextType {
  avaliacoes: Avaliacao[];
  createAvaliacao: (avaliacao: Omit<Avaliacao, "id">) => Avaliacao;
  updateAvaliacao: (index: number, avaliacao: Partial<Avaliacao>) => Avaliacao;
  deleteAvaliacao: (index: number) => Avaliacao[];
  getAvaliacoesByCasaId : (casaId : number) => Avaliacao[] | undefined;
}

export const AvaliacaoContext = createContext<AvaliacaoContextType | undefined>(undefined);

export const AvaliacaoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>(defaultDb.readAvaliacoes());

  function createAvaliacao(avaliacao: Omit<Avaliacao, "id">) {
    const nova = defaultDb.createAvaliacao(avaliacao);
    setAvaliacoes(defaultDb.readAvaliacoes());
    return nova;
  }
  function updateAvaliacao(index: number, avaliacao: Partial<Avaliacao>) {
    const updated = defaultDb.updateAvaliacao(index, avaliacao);
    setAvaliacoes(defaultDb.readAvaliacoes());
    return updated;
  }
  function deleteAvaliacao(index: number) {
    defaultDb.deleteAvaliacao(index);
    setAvaliacoes(defaultDb.readAvaliacoes());
    return defaultDb.readAvaliacoes();
  }
  function getAvaliacoesByCasaId(casaId : number){
    return avaliacoes.filter(a => a.casa.id === casaId)
  }

  return (
    <AvaliacaoContext.Provider value={{ avaliacoes, createAvaliacao, updateAvaliacao, deleteAvaliacao, getAvaliacoesByCasaId }}>
      {children}
    </AvaliacaoContext.Provider>
  );
};
