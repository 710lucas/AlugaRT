import React, { createContext, useContext, useState } from "react";
import { db as defaultDb} from "../MockDatabase";
import { Casa } from "../../types/Casa";

interface CasaContextType {
  casas: Casa[];
  createCasa: (casa: Omit<Casa, "id">) => Casa;
  updateCasa: (index: number, casa: Partial<Casa>) => Casa;
  deleteCasa: (index: number) => Casa[];
}

export const CasaContext = createContext<CasaContextType | undefined>(undefined);

export const CasaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [casas, setCasas] = useState<Casa[]>(defaultDb.readCasas());

  function createCasa(casa: Omit<Casa, "id">) {
    const nova = defaultDb.createCasa(casa);
    setCasas(defaultDb.readCasas());
    return nova;
  }
  function updateCasa(index: number, casa: Partial<Casa>) {
    const updated = defaultDb.updateCasa(index, casa);
    setCasas(defaultDb.readCasas());
    return updated;
  }
  function deleteCasa(index: number) {
    defaultDb.deleteCasa(index);
    setCasas(defaultDb.readCasas());
    return defaultDb.readCasas();
  }

  return (
    <CasaContext.Provider value={{ casas, createCasa, updateCasa, deleteCasa }}>
      {children}
    </CasaContext.Provider>
  );
};
