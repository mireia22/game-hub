import React, { useState } from "react";
import Board from "../../MainComponents/TicTacToe_Comp/Board/Board";
import Button from "../../MainComponents/Button/Button";
import Turn from "../../MainComponents/TicTacToe_Comp/Turn/Turn";
import WinModal from "../../MainComponents/WinModal/WinModal";
import Points from "../../MainComponents/TicTacToe_Comp/Points/Points";

// BOARD
type BoardCell = "X" | "O" | null;

const initialBoard: BoardCell[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// TURNS
const initialTurn: "X" | "O" = "X";

// RESULT
type GameResult = "winner" | "equal";

const Tictactoe: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [board, setBoard] = useState<BoardCell[][]>(initialBoard);
  const [turn, setTurn] = useState<"X" | "O">(initialTurn);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [points, setPoints] = useState<{ pointsX: number; pointsO: number }>({
    pointsX: 0,
    pointsO: 0,
  });
  const [winningCells, setWinningCells] = useState<Array<[number, number]>>([]);

  const checkGameResult = (boardToCheck: BoardCell[][]) => {
    const linesToCheck = [
      // Rows
      ...boardToCheck,
      // Columns
      [boardToCheck[0][0], boardToCheck[1][0], boardToCheck[2][0]],
      [boardToCheck[0][1], boardToCheck[1][1], boardToCheck[2][1]],
      [boardToCheck[0][2], boardToCheck[1][2], boardToCheck[2][2]],
      // Diagonals
      [boardToCheck[0][0], boardToCheck[1][1], boardToCheck[2][2]],
      [boardToCheck[0][2], boardToCheck[1][1], boardToCheck[2][0]],
    ];

    for (const line of linesToCheck) {
      const [cell1, cell2, cell3] = line;
      if (cell1 === cell2 && cell2 === cell3 && cell1 !== null) {
        return cell1;
      }
    }
    if (boardToCheck.flat().every((cell) => cell !== null)) {
      return "equal";
    }

    return null;
  };

  const checkEndGame = (newBoard: BoardCell[][]) => {
    return newBoard.flat().every((cell) => cell !== null);
  };

  const getWinningCells = (boardToCheck: BoardCell[][]) => {
    const linesToCheck = [
      // Rows
      ...boardToCheck.map((row, rowIndex) =>
        row.map((_, colIndex) => [rowIndex, colIndex])
      ),
      // Columns
      ...boardToCheck[0].map((_, colIndex) =>
        boardToCheck.map((_, rowIndex) => [rowIndex, colIndex])
      ),
      // Diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const line of linesToCheck) {
      const [[row1, col1], [row2, col2], [row3, col3]] = line;
      const cell1 = boardToCheck[row1][col1];
      const cell2 = boardToCheck[row2][col2];
      const cell3 = boardToCheck[row3][col3];

      if (cell1 === cell2 && cell2 === cell3 && cell1 !== null) {
        return line;
      }
    }
    if (boardToCheck.flat().every((cell) => cell !== null)) {
      return "equal";
    }

    return [];
  };

  // Points
  const updatePoints = (winner: "X" | "O") => {
    if (winner === "X") {
      setPoints((prevPoints) => ({
        ...prevPoints,
        pointsX: prevPoints.pointsX + 1,
      }));
    } else if (winner === "O") {
      setPoints((prevPoints) => ({
        ...prevPoints,
        pointsO: prevPoints.pointsO + 1,
      }));
    }
  };

  // Board
  const updateBoard = (row: number, col: number) => {
    if (board[row][col] || gameResult || !isStarted) return; // Avoid clicking again.

    const newBoard: BoardCell[][] = [...board];
    newBoard[row] = [...newBoard[row]];
    newBoard[row][col] = turn;
    setBoard(newBoard);

    // Winner
    const newWinner = checkGameResult(newBoard);
    if (newWinner) {
      // Winner cells (row and column indexes)
      const newWinningCells = getWinningCells(newBoard);
      console.log(newWinningCells);
      setWinningCells(newWinningCells);
      setGameResult(newWinner);
      updatePoints(newWinner);
    } else if (checkEndGame(newBoard)) {
      setGameResult("equal");
    }
    // Turn
    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  };

  const startGame = () => {
    setIsStarted(true);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setTurn(initialTurn);
    setGameResult(null);
    setWinningCells([]);
  };

  return (
    <div>
      {isStarted ? (
        <>
          <section>
            <Board
              board={board}
              updateBoard={updateBoard}
              winningCells={winningCells}
            />
          </section>
          <section>
            <Turn turn={turn} isStarted={isStarted} />
          </section>
          <Button onClick={resetGame}>Reset Game</Button>
          <section>
            <Points gameResult={gameResult} points={points} />
          </section>
        </>
      ) : (
        <section>
          <Button onClick={startGame}>Start Game</Button>
        </section>
      )}

      <section>
        {gameResult !== null ? (
          <WinModal resetGame={resetGame} gameResult={gameResult}>
            <h2>
              {gameResult === "equal" ? "Equals" : "Winner is: " + gameResult}
            </h2>
          </WinModal>
        ) : null}
      </section>
    </div>
  );
};

export default Tictactoe;
