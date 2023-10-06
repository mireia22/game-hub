import WinModal from "../../WinModal/WinModal";
import {
  SudokuButtonsWrp,
  SudokuWrp,
  SolvedSudokuContainer,
  SudokuBoardWrp,
} from "./DoingSudoku-styles";
import SudokuBoardTemplate from "../SudokuBoardTemplate/SudokuBoardTemplate";
import Button from "../../Button/Button";
import { useSudokuContext } from "../../../Context/SudokuContext";
import SolvedSudoku from "../SolvedSudoku/SolvedSudoku";

const DoingSudoku = () => {
  const {
    sudokuBoard,
    isFilled,
    resetGame,
    divideIntoSquares,
    updateBoard,
    initialFilledCells,
    openSolution,
    toggleSolution,
    checkSolution,
    changeBoard,
  } = useSudokuContext();

  return (
    <SudokuWrp>
      <section>
        {sudokuBoard && (
          <SudokuBoardTemplate
            subgrids={divideIntoSquares(sudokuBoard)}
            updateBoard={updateBoard}
            initialFilledCells={initialFilledCells}
          />
        )}
      </section>
      <SudokuButtonsWrp>
        <Button onClick={resetGame}>Reset Game</Button>
        <Button onClick={changeBoard}>Change Board</Button>

        <Button onClick={toggleSolution}>
          {openSolution ? "Close Solution" : "View Solution"}
        </Button>
        {isFilled && <Button onClick={checkSolution}>Check Solution</Button>}
      </SudokuButtonsWrp>

      <SolvedSudokuContainer>
        <SolvedSudoku />
      </SolvedSudokuContainer>

      <section>
        {/* {userWins && (
          <WinModal resetGame={resetGame}>
            {isSolved === "false" ? "You lose" : "You win"}
          </WinModal>
        )} */}
      </section>
    </SudokuWrp>
  );
};

export default DoingSudoku;
