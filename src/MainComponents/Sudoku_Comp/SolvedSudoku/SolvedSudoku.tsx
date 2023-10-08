import { useSudokuContext } from "../../../Hooks/Context/useSudokuContext";
import { divideIntoSquares } from "../../../Utils/Sudoku-utils/divideIntoSquares";
import SolvedSudokuBoardTemplate from "../SolvedSudokuBoardTemplate/SolvedSudokuBoardTemplate";

const SolvedSudoku = () => {
  const { initialFilledCells, openSolution, solvedSudoku } = useSudokuContext();
  console.log("openSolution in SolvedSudoku:", openSolution);
  return (
    <>
      {openSolution && solvedSudoku !== null && (
        <SolvedSudokuBoardTemplate
          subgrids={divideIntoSquares(solvedSudoku)}
          initialFilledCells={initialFilledCells}
        />
      )}
    </>
  );
};

export default SolvedSudoku;
