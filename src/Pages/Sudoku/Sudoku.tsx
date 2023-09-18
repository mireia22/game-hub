import { useState, useEffect } from "react";
import sudoku from "sudoku";
import Button from "../../MainComponents/Button/Button";
import SudokuBoardTemplate from "../../MainComponents/Sudoku_Comp/SudokuBoardTemplate/SudokuBoardTemplate";

const Sudoku = () => {
  const [initialCells, setInitialCells] = useState(null);
  const [initialFilledCells, setInitialFilledCells] = useState([]);

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [solvedSudoku, setSolvedSudoku] = useState(null);

  const [openSolution, setOpenSolution] = useState(false);

  console.log("initial cells", initialCells);
  console.log("initial Fileld", initialFilledCells);

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);

    const initialCells = newBoard.map((cell) => cell !== null);
    setInitialCells(initialCells);

    const initialCellIndices = [];
    for (let i = 0; i < initialCells.length; i++) {
      if (initialCells[i]) {
        initialCellIndices.push(i);
      }
    }
    setInitialFilledCells(initialCellIndices);

    setSolvedSudoku(newBoard);
  }, []);

  useEffect(() => {
    if (sudokuBoard) {
      const solved = sudoku.solvepuzzle(sudokuBoard);
      if (solved !== null) {
        setSolvedSudoku(solved);
      }
    }
  }, [sudokuBoard]);

  const divideIntoSquares = (board) => {
    const squares = [];
    if (board) {
      for (let i = 0; i < 9; i++) {
        const square = board.slice(i * 9, i * 9 + 9);
        squares.push(square);
      }

      //ARRAY.FROM
      // squares = Array.from({ length: 9 }, (_, i) =>
      // board.slice(i * 9, i * 9 + 9)
      // );}
      return squares;
    }
  };

  const toggleSolution = () => {
    setOpenSolution((prevState) => !prevState);
  };

  const updateBoard = (index, input) => {
    console.log(index, input);
    const newBoard = [...sudokuBoard];
    newBoard[index] = parseInt(input) - 1;
    setSudokuBoard(newBoard);
  };

  const theresInput = () => {
    return (
      sudokuBoard &&
      sudokuBoard.some((cell, index) => cell !== sudokuBoard[index])
    );
  };
  const resetGame = () => {
    setSudokuBoard([...sudokuBoard]);
  };

  const changeBoard = () => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
  };

  const checkSolution = () => {
    if (solvedSudoku && sudokuBoard) {
      const isSolved = solvedSudoku.every(
        (cell, index) => cell === sudokuBoard[index]
      );

      if (isSolved) {
        alert("Congratulations! You solved the Sudoku puzzle.");
      } else {
        alert("Your solution does not match the correct solution.");
      }
    } else {
      console.log("solvedSudoku or sudokuBoard is null.");
    }
  };

  return (
    <div>
      <section>
        {sudokuBoard && (
          <SudokuBoardTemplate
            subgrids={divideIntoSquares(sudokuBoard)}
            updateBoard={updateBoard}
            initialFilledCells={initialFilledCells}
          />
        )}
        {theresInput() && (
          <div>
            <Button onClick={resetGame}>Reset Game</Button>
            <Button onClick={changeBoard}>Change Board</Button>
          </div>
        )}
        <Button onClick={checkSolution}>Check Solution</Button>
        <Button onClick={toggleSolution}>
          {openSolution ? "Close Solution" : "View Solution"}
        </Button>
      </section>
      <section>
        {openSolution && sudokuBoard && (
          <SudokuBoardTemplate subgrids={divideIntoSquares(solvedSudoku)} />
        )}
      </section>
    </div>
  );
};

export default Sudoku;
