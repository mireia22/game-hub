import { SudokuButtonsWrp, SudokuWrp } from "./DoingSudoku-styles";
import SudokuBoardTemplate from "../SudokuBoardTemplate/SudokuBoardTemplate";
import Button from "../../Button/Button";
import { useEffect, useReducer } from "react";
import { sudokuReducer } from "../SudokuBoardTemplate/SudokuReducer/SudokuReducer";
import sudoku from "sudoku";

const DoingSudoku = () => {
  const initialState = {
    initialFilledCells: [],
    sudokuBoard: null,
    solvedSudoku: null,
    openSolution: false,
  };

  const [state, dispatch] = useReducer(sudokuReducer, initialState);

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    const solved = sudoku.solvepuzzle(newBoard);

    dispatch({
      type: "NEW_BOARD",
      payload: { newBoard, solved },
    });
  }, []);

  const divideIntoSquares = (board) => {
    const squares = [];
    if (board) {
      for (let i = 0; i < 9; i++) {
        const square = board.slice(i * 9, i * 9 + 9);
        squares.push(square);
      }
      return squares;
    }
  };

  return (
    <SudokuWrp>
      <section>
        {state.sudokuBoard && (
          <SudokuBoardTemplate
            subgrids={divideIntoSquares(state.sudokuBoard)}
            updateBoard={(index, input) =>
              dispatch({ type: "UPDATE_BOARD", payload: { index, input } })
            }
            initialFilledCells={state.initialFilledCells}
          />
        )}
      </section>

      <SudokuButtonsWrp>
        <Button onClick={() => dispatch({ type: "RESET_BOARD" })}>
          Reset Game
        </Button>
        <Button onClick={() => dispatch({ type: "NEW_BOARD" })}>
          Change Board
        </Button>
        <Button onClick={() => dispatch({ type: "CHECK_SOLUTION" })}>
          Check Solution
        </Button>
        <Button onClick={() => dispatch({ type: "TOGGLE_SOLUTION" })}>
          {state.openSolution ? "Close Solution" : "View Solution"}
        </Button>
      </SudokuButtonsWrp>
      <section>
        {state.openSolution && state.sudokuBoard && (
          <SudokuBoardTemplate
            subgrids={divideIntoSquares(state.solvedSudoku)}
          />
        )}
      </section>
    </SudokuWrp>
  );
};

export default DoingSudoku;
