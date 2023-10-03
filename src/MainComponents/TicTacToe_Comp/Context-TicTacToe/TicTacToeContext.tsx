import { createContext, useContext } from "react";
import { useState } from "react";
import { Token } from "../../../Pages/TicTacToe/Tictactoe-styles";
import { GiCarabiner } from "react-icons/gi";

export const TicTacToeContext = createContext();

export const useTicTacToeContext = () => useContext(TicTacToeContext);

const initialBoard = Array(3).fill(Array(3).fill(null));
const initialTurn: "X" | "O" = "X";

const initialState = {
  isStarted: false,
  board: initialBoard,
  turn: initialTurn,
  gameResult: null,
  points: { pointsX: 0, pointsO: 0 },
  winningCells: [],
};
const createToken = (className) => (
  <Token>
    <GiCarabiner className={className} />
  </Token>
);

//PROVIDER
export const TicTacToeDataProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);
  const [selectedWall, setSelectedWall] = useState({ name: "", image: "" });

  const xToken = createToken("green-icon");
  const oToken = createToken("red-icon");

  const checkGameResult = (boardToCheck) => {
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

  const checkEndGame = (newBoard) => {
    return newBoard.flat().every((cell) => cell !== null);
  };

  const getWinningCells = (boardToCheck) => {
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
      return [[]];
    }

    return [];
  };

  // Points
  const updatePoints = (winner) => {
    if (winner !== "equal") {
      setGameState((prevState) => ({
        ...prevState,
        points: {
          ...prevState.points,
          [winner === "X" ? "pointsX" : "pointsO"]:
            prevState.points[winner === "X" ? "pointsX" : "pointsO"] + 1,
        },
      }));
    }
  };

  const updateBoard = (row, col) => {
    if (
      gameState.board[row][col] ||
      gameState.gameResult ||
      !gameState.isStarted
    )
      return;

    const newBoard = [...gameState.board];
    newBoard[row] = [...newBoard[row]];
    newBoard[row][col] = gameState.turn;

    // Winner
    const newWinner = checkGameResult(newBoard);
    if (newWinner) {
      // Winner cells (row and column indexes)
      const newWinningCells = getWinningCells(newBoard);
      console.log(newWinningCells);
      setGameState((prevState) => ({
        ...prevState,
        winningCells: newWinningCells,
        gameResult: newWinner,
      }));
      updatePoints(newWinner);
    } else if (checkEndGame(newBoard)) {
      setGameState((prevState) => ({ ...prevState, gameResult: "equal" }));
    }
    // Turn
    const newTurn = gameState.turn === "X" ? "O" : "X";
    setGameState((prevState) => ({
      ...prevState,
      turn: newTurn,
      board: newBoard,
    }));
  };

  const resetGame = () => {
    setGameState({
      ...gameState,
      board: initialBoard,
      turn: initialTurn,
      gameResult: null,
      winningCells: [],
    });
  };

  const resetPoints = () => {
    setGameState({
      ...gameState,
      board: initialBoard,
      turn: initialTurn,
      gameResult: null,
      winningCells: [],
      points: { pointsX: 0, pointsO: 0 },
    });
  };

  const selectWallAndStartGame = (image: string, name: string) => {
    setSelectedWall({ name, image });
    setGameState({ ...gameState, isStarted: true });
  };

  const sharedState = {
    selectWallAndStartGame,
    resetPoints,
    resetGame,
    gameState,
    setGameState,
    selectedWall,
    setSelectedWall,
    xToken,
    oToken,
    updateBoard,
  };

  return (
    <TicTacToeContext.Provider value={sharedState}>
      {children}
    </TicTacToeContext.Provider>
  );
};
