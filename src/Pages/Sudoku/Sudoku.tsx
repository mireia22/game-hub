import { useSudokuContext } from "../../Hooks/Context/useSudokuContext";
import DoingSudoku from "../../MainComponents/Sudoku_Comp/DoingSudoku/DoingSudoku";
import SudokuIntro from "../../MainComponents/Sudoku_Comp/Sudoku-Intro/SudokuIntro";

const Sudoku: React.FC = () => {
  const { isStarted } = useSudokuContext();
  return isStarted ? <DoingSudoku /> : <SudokuIntro />;
};

export default Sudoku;
