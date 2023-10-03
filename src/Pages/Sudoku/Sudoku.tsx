import DoingSudoku from "../../MainComponents/Sudoku_Comp/DoingSudoku/DoingSudoku";
import { useSudokuContext } from "../../MainComponents/Sudoku_Comp/Sudoku-Context/SudokuContext";
import SudokuIntro from "../../MainComponents/Sudoku_Comp/Sudoku-Intro/SudokuIntro";

const Sudoku = () => {
  const { isStarted } = useSudokuContext();
  return isStarted ? <DoingSudoku /> : <SudokuIntro />;
};

export default Sudoku;
