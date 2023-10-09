import { ReactNode } from "react";

type SudokuContextSetters = {
  changeBoard: () => void;
  startGame: () => void;
  resetGame: () => void;
  toggleWinModal: () => void;
  updateBoard: (index: number, input: number | null) => void;
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
  updateBoard?: (subgridIndex: number, inputValue: number | null) => void;
  initialFilledCells?: number[];
};
