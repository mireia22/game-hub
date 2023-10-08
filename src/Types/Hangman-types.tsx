import { ReactNode } from "react";

type HangmanStateSetters = {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setAttempts: React.Dispatch<React.SetStateAction<number | null>>;
  setRiddle: React.Dispatch<React.SetStateAction<string>>;
  setCurrentFrame: React.Dispatch<React.SetStateAction<number>>;
  setHiddenRiddle: React.Dispatch<React.SetStateAction<string[]>>;
  setIncorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
  startGame: (selectedAttempts: number) => void;
  resetGame: () => void;
  updateHiddenRiddle: (letter: string) => void;
};
export type HangmanState = {
  isStarted: boolean;
  attempts: number | null;
  riddle: string;
  currentFrame: number;
  hiddenRiddle: string[];
  incorrectLetters: string[];
  correctLetters: string[];
  userWins: boolean;
  normalizedRiddleName: string;
} & HangmanStateSetters;

export type HangmanProviderProps = {
  children: ReactNode;
};
