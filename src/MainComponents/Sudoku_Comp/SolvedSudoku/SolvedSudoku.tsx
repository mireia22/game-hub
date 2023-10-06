import { useSudokuContext } from "../../../Context/SudokuContext";
import SolvedSudokuBoardTemplate from "../SolvedSudokuBoardTemplate/SolvedSudokuBoardTemplate";

const SolvedSudoku = () => {
  const { divideIntoSquares, initialFilledCells, openSolution, solvedSudoku } =
    useSudokuContext();
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
