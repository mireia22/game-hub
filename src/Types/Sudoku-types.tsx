export type SudokuState = {
  initialFilledCells: number[];
  sudokuBoard: number[] | null;
  solvedSudoku: number[] | null;
  openSolution: boolean;
  isStarted: boolean;
};

export type SudokuContextType = {
  sudokuState: SudokuState;
  startGame: () => void;
  newBoard: () => void;
  resetBoard: () => void;
  updateBoard: (index: number, input: string) => void;
  toggleSolution: () => void;
  checkSolution: () => void;
  divideIntoSquares: (board: number[] | null) => number[][];
};
