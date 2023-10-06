type BoardCell = "X" | "O" | null;

export type BoardProps = {
  board: BoardCell[][];
  updateBoard: (row: number, col: number) => void;
  winningCells: Array<[number, number]>;
  turn: "X" | "O";
  xToken: React.ReactNode;
  oToken: React.ReactNode;
  selectedWall: { name: string; image: string };
};

export type TicTacToeState = {
  isStarted: boolean;
  board: BoardCell[][];
  turn: "X" | "O";
  gameResult: "X" | "O" | "equal" | string | null;
  points: { pointsX: number; pointsO: number };
  winningCells: [number, number][];
};

export type TicTacToeContextType = {
  selectWallAndStartGame: (image: string, name: string) => void;
  resetPoints: () => void;
  resetGame: () => void;
  gameState: TicTacToeState;
  setGameState: React.Dispatch<React.SetStateAction<TicTacToeState>>;
  selectedWall: { name: string; image: string };

  xToken: React.ReactNode;
  oToken: React.ReactNode;
  updateBoard: (row: number, col: number) => void;
  points: { pointsX: number; pointsO: number };
  isStarted: boolean;
  board: string[][];
};
