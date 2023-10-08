import { createContext, useContext } from "react";
import { HangmanProviderProps, HangmanState } from "../../Types/Hangman-types";
import useHanganLogic from "../GamesLogic/useHangmanLogic";
const HangmanContext = createContext<HangmanState | undefined>(undefined);

export const useHangmanContext = () =>
  useContext(HangmanContext) as HangmanState;

//PROVIDER
export const HangmanDataProvider = ({ children }: HangmanProviderProps) => {
  const sharedState = useHanganLogic();

  return (
    <HangmanContext.Provider value={sharedState}>
      {children}
    </HangmanContext.Provider>
  );
};
