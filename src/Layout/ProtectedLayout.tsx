import { Navigate, useOutlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useAuthContext } from "../Context/AuthContext";

export const ProtectedLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <AppBar
        pages={[
          { label: "TicTacToe", path: "/dashboard/tic-tac-toe" },
          { label: "Hangman", path: "/dashboard/hangman" },
          { label: "Sudoku", path: "/dashboard/sudoku" },
        ]}
      />
      {outlet}
    </>
  );
};
