import { useSudokuContext } from "../../../Hooks/Context/useSudokuContext";
import { SudokuBoardTemplateProps } from "../../../Types/Sudoku-types";
import { divideIntoSquares } from "../../../Utils/Sudoku-utils/divideIntoSquares";
import SolvedSudokuBoardTemplate from "../SolvedSudokuBoardTemplate/SolvedSudokuBoardTemplate";

const SolvedSudoku: React.FC<SudokuBoardTemplateProps> = () => {
  const { initialFilledCells, openSolution, solvedSudoku } = useSudokuContext();
  return openSolution && solvedSudoku !== null ? (
    <SolvedSudokuBoardTemplate
      subgrids={divideIntoSquares(solvedSudoku)}
      initialFilledCells={initialFilledCells}
    />
  ) : null;
};

export default SolvedSudoku;
