import { useEffect, useState } from "react";
import sudoku from "sudoku";

const useSudokuLogic = () => {
  const [isStarted, setIsStarted] = useState(false);

  const [initialFilledCells, setInitialFilledCells] = useState<number[]>([]);
  const [sudokuBoard, setSudokuBoard] = useState<number[] | null>(null);
  const [solvedSudoku, setSolvedSudoku] = useState<number[] | null>(null);

  const [openSolution, setOpenSolution] = useState(false);

  const [showCheckButton, setShowCheckButton] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const startGame = () => setIsStarted(true);

  const initializeSudoku = () => {
    const newBoard = sudoku.makepuzzle();
    const solved = sudoku.solvepuzzle(newBoard);
    const initialFilledCells = newBoard
      .map((cell: number | null, index: number) =>
        cell !== null ? index : null
      )
      .filter((index: number) => index !== null);

    setSudokuBoard(newBoard);
    setSolvedSudoku(solved);
    setInitialFilledCells(initialFilledCells);
  };

  useEffect(() => {
    initializeSudoku();
  }, []);

  const changeBoard = () => {
    initializeSudoku();
  };

  const toggleSolution = () => setOpenSolution((prevState) => !prevState);
  const toggleWinModal = () => setShowWinModal((prevState) => !prevState);

  const resetGame = () => {
    if (sudokuBoard) {
      const newBoard: number[] | null = sudokuBoard.map(
        (cell: number | null, index: number) =>
          initialFilledCells.includes(index) ? cell : null
      ) as number[];
      setSudokuBoard(newBoard);
    }
  };

  const updateBoard = (index: number, input: number | null) => {
    if (sudokuBoard) {
      const newBoardState: (number | null)[] = [...sudokuBoard];
      newBoardState[index] = (input !== null ? (input as number) - 1 : null) as
        | number
        | null;

      setSudokuBoard(newBoardState as number[] | null);

      const isBoardFilled = newBoardState.every((cell) => cell !== null);
      setShowCheckButton(isBoardFilled);
    }
  };

  const checkSolution = () => {
    if (solvedSudoku && sudokuBoard) {
      const isCorrect = (solvedSudoku as number[]).every(
        (cell: number | null, index: number) => cell === sudokuBoard[index]
      );
      setModalMessage(
        isCorrect
          ? "You've secured the wall! 💪"
          : "This wall's grip is as dependable as a wet bar of soap 🫣"
      );
      setShowWinModal(true);
      return isCorrect;
    }
    return false;
  };

  const isFilled = showCheckButton;

  return {
    modalMessage,
    sudokuBoard,
    isStarted,
    changeBoard,
    startGame,
    initialFilledCells,
    resetGame,
    openSolution,
    toggleWinModal,
    updateBoard,
    toggleSolution,
    solvedSudoku,
    checkSolution,
    showWinModal,
    setShowCheckButton,
    isFilled,
  };
};

export default useSudokuLogic;
