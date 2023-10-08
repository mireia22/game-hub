import { ReactNode } from "react";

export type BoardProps = {
  board: string[][];
  updateBoard: (row: number, col: number) => void;
  winningCells: Array<[number, number]>;
  turn: "X" | "O";
  xToken: React.ReactNode;
  oToken: React.ReactNode;
  selectedWall: { name: string; image: string };
};

export type TicTacToeState = {
  isStarted: boolean;
  board: string[][];
  turn: "X" | "O";
  gameResult: "X" | "O" | "equal" | string | null;
  points: { pointsX: number; pointsO: number };
  winningCells: [number, number][];
};

type TicTacToeContextSetters = {
  selectWallAndStartGame: (image: string, name: string) => void;
  resetPoints: () => void;
  resetGame: () => void;
  setGameState: React.Dispatch<React.SetStateAction<TicTacToeState>>;
  updateBoard: (row: number, col: number) => void;
};

export type TicTacToeContextType = {
  gameState: TicTacToeState;
  selectedWall: { name: string; image: string };
  points: { pointsX: number; pointsO: number };
  isStarted: boolean;
  board: string[][];
} & TicTacToeContextSetters;

export type TicTacToeProviderProps = {
  children: ReactNode;
};
