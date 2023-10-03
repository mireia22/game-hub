import { createContext, useContext, useEffect, useReducer } from "react";
import React, { useState } from "react";
import sudoku from "sudoku";
import { sudokuReducer } from "../SudokuBoardTemplate/SudokuReducer/SudokuReducer";

export const SudokuContext = createContext();
export const useSudokuContext = () => useContext(SudokuContext);

//PROVIDER
export const SudokuDataProvider = ({ children }) => {
  const initialState = {
    initialFilledCells: [],
    sudokuBoard: null,
    solvedSudoku: null,
    openSolution: false,
    isStarted: false,
  };

  const [state, dispatch] = useReducer(sudokuReducer, initialState);

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };

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

  const sharedState = {
    isStarted: state.isStarted,
    divideIntoSquares,
    startGame,
  };
  return (
    <SudokuContext.Provider value={sharedState}>
      {children}
    </SudokuContext.Provider>
  );
};
