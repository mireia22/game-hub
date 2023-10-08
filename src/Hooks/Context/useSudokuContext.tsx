import { createContext, useContext } from "react";
import useSudokuLogic from "../GamesLogic/useSudokuLogic";
import {
  SudokuContextProps,
  SudokuProviderProps,
} from "../../Types/Sudoku-types";

export const SudokuContext = createContext<SudokuContextProps | undefined>(
  undefined
);
export const useSudokuContext = () =>
  useContext(SudokuContext) as SudokuContextProps;

export const SudokuDataProvider = ({ children }: SudokuProviderProps) => {
  const sharedState = useSudokuLogic();
  return (
    <SudokuContext.Provider value={sharedState}>
      {children}
    </SudokuContext.Provider>
  );
};
