import WinModal from "../../WinModal/WinModal";
import {
  SudokuButtonsWrp,
  SudokuWrp,
  SolvedSudokuContainer,
  AllSudoku,
} from "./DoingSudoku-styles";
import SudokuBoardTemplate from "../SudokuBoardTemplate/SudokuBoardTemplate";
import Button from "../../Button/Button";
import SolvedSudoku from "../SolvedSudoku/SolvedSudoku";
import { divideIntoSquares } from "../../../Utils/Sudoku-utils/divideIntoSquares";
import { useSudokuContext } from "../../../Hooks/Context/useSudokuContext";

const DoingSudoku = () => {
  const {
    sudokuBoard,
    isFilled,
    resetGame,
    updateBoard,
    initialFilledCells,
    openSolution,
    toggleSolution,
    checkSolution,
    changeBoard,
    showWinModal,
    modalMessage,
    toggleWinModal,
  } = useSudokuContext();

  console.log(sudokuBoard, "sudokuboard");
  return (
    <AllSudoku>
      <SudokuWrp>
        <h1>Securing the wall...</h1>
        <>
          {sudokuBoard && (
            <SudokuBoardTemplate
              subgrids={divideIntoSquares(sudokuBoard)}
              updateBoard={updateBoard}
              initialFilledCells={initialFilledCells}
            />
          )}
        </>
        <SudokuButtonsWrp>
          <Button variant="reset" onClick={resetGame}>
            Clear Wall
          </Button>
          <Button variant="reset" onClick={changeBoard}>
            Change Wall
          </Button>

          <Button variant="" onClick={toggleSolution}>
            {openSolution ? "Close Solution" : "View Solution"}
          </Button>
          {isFilled && (
            <Button variant="" onClick={checkSolution}>
              Check Solution
            </Button>
          )}
        </SudokuButtonsWrp>
      </SudokuWrp>
      <SolvedSudokuContainer>
        <SolvedSudoku />
      </SolvedSudokuContainer>

      <>
        {showWinModal && (
          <WinModal resetGame={toggleWinModal}>
            <p>{modalMessage}</p>
          </WinModal>
        )}
      </>
    </AllSudoku>
  );
};

export default DoingSudoku;
