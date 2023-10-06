import { createContext, useContext } from "react";
import { useState } from "react";
import { TicTacToeContextType, TicTacToeState } from "../Types/TicTacToe-types";
import { createToken } from "../Utils/createTokens";

const initialBoard: string[][] = Array(3).fill(Array(3).fill(null));
const initialTurn: "X" | "O" = "X";

const initialState: TicTacToeState = {
  isStarted: false,
  board: initialBoard,
  turn: initialTurn,
  gameResult: null,
  points: { pointsX: 0, pointsO: 0 },
  winningCells: [],
};

export const TicTacToeContext = createContext<TicTacToeContextType | undefined>(
  undefined
);

export const useTicTacToeContext = () =>
  useContext(TicTacToeContext) as TicTacToeContextType;

//PROVIDER
export const TicTacToeDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gameState, setGameState] = useState<TicTacToeState>(initialState);
  const [selectedWall, setSelectedWall] = useState({ name: "", image: "" });

  const xToken = createToken("green-icon");
  const oToken = createToken("red-icon");

  const checkGameResult = (boardToCheck: string[][]) => {
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
        setGameState((prevState) => ({
          ...prevState,
          winningCells: line,
        }));
        return cell1;
      }
    }
    if (boardToCheck.flat().every((cell) => cell !== null)) {
      return "equal";
    }

    return null;
  };

  const checkEndGame = (newBoard: string[][]) => {
    return newBoard.flat().every((cell) => cell !== null);
  };

  const getWinningCells = (boardToCheck: string[][]) => {
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
      console.log(line);

      if (cell1 === cell2 && cell2 === cell3 && cell1 !== null) {
        setGameState((prevState) => ({
          ...prevState,
          winningCells: line,
        }));
        return { line, values: [cell1, cell2, cell3] }; // Return both the line and the values of the winning cells
      }
    }
    if (boardToCheck.flat().every((cell) => cell !== null)) {
      return { line: [[]], values: [] };
    }

    return { line: [], values: [] };
  };
  // Points

  const updatePoints = (winner: null | string) => {
    if (winner !== "equal" && winner !== null) {
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

  const updateBoard = (row: number, col: number) => {
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
        gameResult: newWinner,
        isStarted: true,
        board: newBoard,
        turn: gameState.turn === "X" ? "O" : "X",
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
    setGameState((prevState) => ({
      ...initialState,
      isStarted: true,
      board: initialBoard,
      turn: prevState.turn === "X" ? "O" : "X",
      points: prevState.points,
    }));
  };
  const resetPoints = () => {
    setGameState((prevState) => ({
      ...prevState,
      points: { pointsX: 0, pointsO: 0 },
    }));
  };

  const selectWallAndStartGame = (image: string, name: string) => {
    setSelectedWall({ name, image });
    setGameState((prevState) => ({
      ...prevState,
      isStarted: true,
    }));
  };

  const sharedState: TicTacToeContextType = {
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
    points: gameState.points,
    isStarted: gameState.isStarted,
    board: gameState.board,
  };

  return (
    <TicTacToeContext.Provider value={sharedState}>
      {children}
    </TicTacToeContext.Provider>
  );
};
