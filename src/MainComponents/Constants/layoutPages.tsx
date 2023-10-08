import { GiMountainClimbing } from "react-icons/gi";

export const layoutPages = [
  {
    label: <GiMountainClimbing className="climb-icon" />,
    path: "/dashboard",
  },
  { label: "TicTacToe", path: "/dashboard/tic-tac-toe" },
  { label: "Hangman", path: "/dashboard/hangman" },
  { label: "Sudoku", path: "/dashboard/sudoku" },
];
