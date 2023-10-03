import sudoku from "sudoku";

export const sudokuReducer = (state, action) => {
  switch (action.type) {
    case "NEW_BOARD":
      const newBoard = sudoku.makepuzzle();
      const solved = sudoku.solvepuzzle(newBoard);
      const initialFilledCells = newBoard
        .map((cell, index) => (cell !== null ? index : null))
        .filter((index) => index !== null);
      return {
        ...state,
        sudokuBoard: newBoard,
        initialFilledCells,
        solvedSudoku: solved,
        openSolution: false,
      };

    case "RESET_BOARD":
      const resetBoard = state.sudokuBoard.map((cell, index) =>
        state.initialFilledCells.includes(index) ? cell : null
      );
      return {
        ...state,
        sudokuBoard: resetBoard,
        solvedSudoku: null,
        openSolution: false,
      };

    case "UPDATE_BOARD":
      const { index, input } = action.payload;
      const newBoardState = [...state.sudokuBoard];
      newBoardState[index] = parseInt(input) - 1;
      return { ...state, sudokuBoard: newBoardState };

    case "TOGGLE_SOLUTION":
      return { ...state, openSolution: !state.openSolution };

    case "CHECK_SOLUTION":
      const { solvedSudoku, sudokuBoard } = state;
      if (solvedSudoku && sudokuBoard) {
        const isSolved = state.solvedSudoku.every(
          (cell, index) => cell === state.sudokuBoard[index]
        );
        if (isSolved) {
          alert("Congratulations! You solved the Sudoku puzzle.");
        } else {
          alert("Your solution does not match the correct solution.");
        }
      } else {
        console.log("solvedSudoku or sudokuBoard is null.");
      }
      return state;

    case "START_GAME":
      return {
        ...state,
        isStarted: true,
      };

    default:
      return state;
  }
};
