import { useMemo, useState } from "react";
import { TicTacToeState } from "../../Types/TicTacToe-types";

const initialBoard: string[][] = Array(3).fill(Array(3).fill(null));
const initialTurn = Math.random() < 0.5 ? "X" : "O";

const initialState: TicTacToeState = {
  isStarted: false,
  board: initialBoard,
  turn: initialTurn,
  gameResult: null,
  points: { pointsX: 0, pointsO: 0 },
  winningCells: [],
};

const useTicTacToeLogic = () => {
  const [gameState, setGameState] = useState<TicTacToeState>(initialState);
  const [selectedWall, setSelectedWall] = useState({ name: "", image: "" });

  const selectWallAndStartGame = (image: string, name: string) => {
    setSelectedWall({ name, image });
    setGameState((prevState) => ({
      ...prevState,
      isStarted: true,
    }));
  };

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
      if (cell1 && cell1 === cell2 && cell2 === cell3) {
        setGameState((prevState) => ({
          ...prevState,
          winningCells: line.map((cell) => cell as unknown as [number, number]),
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

  const getWinningCells = useMemo(
    () => (boardToCheck: string[][]) => {
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
            winningCells: line as [number, number][],
          }));
          return { line, values: [cell1, cell2, cell3] };
        }
      }
      if (boardToCheck.flat().every((cell) => cell !== null)) {
        return { line: [[]], values: [] };
      }

      return { line: [], values: [] };
    },
    []
  );

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
    const { board, gameResult, isStarted, turn } = gameState;

    if (board[row][col] || gameResult || !isStarted) {
      return;
    }

    // Clone the current board
    const newBoard: string[][] = board.map((rowArray) =>
      rowArray.map((cell) => cell)
    );
    newBoard[row][col] = turn;
    // Check for a winner
    const newWinner = checkGameResult(newBoard);
    const newTurn = gameState.turn === "X" ? "O" : "X";

    // Winner
    if (newWinner) {
      getWinningCells(newBoard);
      setGameState((prevState) => ({
        ...prevState,
        gameResult: newWinner,
        isStarted: true,
        board: newBoard,
        turn: newTurn,
      }));

      updatePoints(newWinner);
    } else if (checkEndGame(newBoard)) {
      setGameState((prevState) => ({ ...prevState, gameResult: "equal" }));
    } else {
      // No winner yet, update the turn and board
      setGameState((prevState) => ({
        ...prevState,
        turn: newTurn,
        board: newBoard,
      }));
    }
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

  return {
    selectWallAndStartGame,
    resetPoints,
    resetGame,
    gameState,
    setGameState,
    selectedWall,
    updateBoard,
    points: gameState.points,
    isStarted: gameState.isStarted,
    board: gameState.board,
  };
};

export default useTicTacToeLogic;
