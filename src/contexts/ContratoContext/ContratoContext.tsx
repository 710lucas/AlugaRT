import React, { createContext, useContext, useState } from "react";
import { db as defaultDb} from "../MockDatabase";
import { Contrato } from "../../types/Contrato";

interface ContratoContextType {
  contratos: Contrato[];
  createContrato: (contrato: Contrato) => Contrato;
  updateContrato: (index: number, contrato: Partial<Contrato>) => Contrato;
  deleteContrato: (index: number) => Contrato[];
}

const ContratoContext = createContext<ContratoContextType | undefined>(undefined);

export const ContratoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contratos, setContratos] = useState<Contrato[]>(defaultDb.readContratos());

  function createContrato(contrato: Contrato) {
    const novo = defaultDb.createContrato(contrato);
    setContratos(defaultDb.readContratos());
    return novo;
  }
  function updateContrato(index: number, contrato: Partial<Contrato>) {
    const updated = defaultDb.updateContrato(index, contrato);
    setContratos(defaultDb.readContratos());
    return updated;
  }
  function deleteContrato(index: number) {
    defaultDb.deleteContrato(index);
    setContratos(defaultDb.readContratos());
    return defaultDb.readContratos();
  }

  return (
    <ContratoContext.Provider value={{ contratos, createContrato, updateContrato, deleteContrato }}>
      {children}
    </ContratoContext.Provider>
  );
};
