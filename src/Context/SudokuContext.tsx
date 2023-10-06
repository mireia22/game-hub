import { createContext, useContext, useEffect, useState } from "react";
import sudoku from "sudoku";

export const SudokuContext = createContext();
export const useSudokuContext = () => useContext(SudokuContext);

export const SudokuDataProvider = ({ children }) => {
  const [initialFilledCells, setInitialFilledCells] = useState([]);
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [solvedSudoku, setSolvedSudoku] = useState(null);
  const [openSolution, setOpenSolution] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    const solved = sudoku.solvepuzzle(newBoard);
    const initialFilledCells = newBoard
      .map((cell, index) => (cell !== null ? index : null))
      .filter((index) => index !== null);

    setSudokuBoard(newBoard);
    setSolvedSudoku(solved);
    setInitialFilledCells(initialFilledCells);
  }, []);

  // useEffect(() => {
  //   if (sudokuBoard) {
  //     const solved = sudoku.solvepuzzle(sudokuBoard);
  //     setSolvedSudoku(solved);
  //   }
  // }, [sudokuBoard]);

  const changeBoard = () => {
    const newBoard = sudoku.makepuzzle();
    const solved = sudoku.solvepuzzle(newBoard);
    const initialFilledCells = newBoard
      .map((cell, index) => (cell !== null ? index : null))
      .filter((index) => index !== null);

    setSudokuBoard(newBoard);
    setSolvedSudoku(solved);
    setInitialFilledCells(initialFilledCells);
  };

  const startGame = () => {
    setIsStarted(true);
  };

  const resetGame = () => {
    const newBoard = sudokuBoard?.map((cell, index) =>
      initialFilledCells.includes(index) ? cell : null
    );
    setSudokuBoard(newBoard);
  };

  const updateBoard = (index, input) => {
    const newBoardState = [...sudokuBoard];
    newBoardState[index] = parseInt(input) - 1;
    setSudokuBoard(newBoardState);

    const isAllCellsFilled = newBoardState.every((cell) => cell !== null);
    setIsFilled(isAllCellsFilled); // Update isFilled based on the condition

    console.log("isfilled", isFilled);
  };

  const toggleSolution = () => {
    setOpenSolution((prevState) => !prevState);
  };

  const userWins = () => {
    if (solvedSudoku && sudokuBoard) {
      const isCorrect = solvedSudoku.every(
        (cell, index) => cell === sudokuBoard[index]
      );
      console.log("iscorrect", isCorrect);
    }
  };

  const divideIntoSquares = (board) => {
    const squares = [];
    if (board) {
      for (let i = 0; i < 9; i++) {
        const square = board.slice(i * 9, i * 9 + 9);
        squares.push(square);
      }
      return squares;
    }
  };

  const sharedState = {
    sudokuBoard,
    isStarted,
    changeBoard,
    startGame,
    initialFilledCells,
    divideIntoSquares,
    resetGame,
    openSolution,
    updateBoard,
    toggleSolution,
    userWins,
    isFilled,
    solvedSudoku,
  };
  return (
    <SudokuContext.Provider value={sharedState}>
      {children}
    </SudokuContext.Provider>
  );
};
