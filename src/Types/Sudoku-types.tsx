import { ReactNode } from "react";

type SudokuContextSetters = {
  changeBoard: () => void;
  startGame: () => void;
  resetGame: () => void;
  toggleWinModal: () => void;
  updateBoard: (subgridIndex: number | null, inputValue: number | null) => void;
  toggleSolution: () => void;
  checkSolution: () => boolean;
  setShowCheckButton: (value: boolean) => void;
};

export type SudokuContextProps = {
  modalMessage: string;
  sudokuBoard: number[] | null;
  isStarted: boolean;
  initialFilledCells: number[];
  openSolution: boolean;
  solvedSudoku: number[] | null;
  showWinModal: boolean;
  isFilled: boolean;
} & SudokuContextSetters;

export type SudokuProviderProps = {
  children: ReactNode;
};

export type SudokuBoardTemplateProps = {
  subgrids?: any;
  updateBoard: (subgridIndex: number | null, inputValue: number | null) => void;
  initialFilledCells?: number[];
};

export type SolvedSudokuBoardTemplateProps = {
  subgrids?: any;
  initialFilledCells?: number[];
};
