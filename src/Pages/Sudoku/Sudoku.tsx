import { useSudokuContext } from "../../Context/SudokuContext";
import DoingSudoku from "../../MainComponents/Sudoku_Comp/DoingSudoku/DoingSudoku";
import SudokuIntro from "../../MainComponents/Sudoku_Comp/Sudoku-Intro/SudokuIntro";

const Sudoku = () => {
  const { isStarted } = useSudokuContext();
  return isStarted === true ? <DoingSudoku /> : <SudokuIntro />;
};

export default Sudoku;
