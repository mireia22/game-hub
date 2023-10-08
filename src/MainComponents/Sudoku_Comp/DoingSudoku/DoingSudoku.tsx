import React, { useState } from "react";
import WinModal from "../../WinModal/WinModal";
import {
  SudokuButtonsWrp,
  SudokuWrp,
  SolvedSudokuContainer,
  SudokuBoardWrp,
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
        <Button onClick={resetGame}>Clear Wall</Button>
        <Button onClick={changeBoard}>Change Wall</Button>

        <Button onClick={toggleSolution}>
          {openSolution ? "Close Solution" : "View Solution"}
        </Button>
        {isFilled && <Button onClick={checkSolution}>Check Solution</Button>}
      </SudokuButtonsWrp>

      <SolvedSudokuContainer>
        <SolvedSudoku />
      </SolvedSudokuContainer>

      <section>
        {showWinModal && (
          <WinModal resetGame={toggleWinModal}>{modalMessage}</WinModal>
        )}
      </section>
    </SudokuWrp>
  );
};

export default DoingSudoku;
