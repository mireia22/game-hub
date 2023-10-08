import { createContext, useContext } from "react";
import useTicTacToeLogic from "../GamesLogic/useTicTacTeLogic";
import {
  TicTacToeContextType,
  TicTacToeProviderProps,
} from "../../Types/TicTacToe-types";

export const TicTacToeContext = createContext<TicTacToeContextType | undefined>(
  undefined
);

export const useTicTacToeContext = () =>
  useContext(TicTacToeContext) as TicTacToeContextType;

// PROVIDER
export const TicTacToeDataProvider = ({ children }: TicTacToeProviderProps) => {
  const sharedState = useTicTacToeLogic();

  return (
    <TicTacToeContext.Provider value={sharedState}>
      {children}
    </TicTacToeContext.Provider>
  );
};
