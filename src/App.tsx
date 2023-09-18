import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainWrp, MainHeader, MainFooter, AppWrp } from "./App-styles";
import Button from "./MainComponents/Button/Button";
import Home from "./Pages/Home/Home";
import Tictactoe from "./Pages/TicTacToe/Tictactoe";
import Hangman from "./Pages/Hangman/Hangman";
import Sudoku from "./Pages/Sudoku/Sudoku";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const returnToHome = () => {
    navigate("/");
  };

  return (
    <AppWrp>
      <MainHeader>
        <h2>Game Hub</h2>
      </MainHeader>
      <MainWrp>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tic-tac-toe" element={<Tictactoe />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="sudoku" element={<Sudoku />} />
        </Routes>

        {location.pathname !== "/" ? (
          <Button variant="return" onClick={returnToHome}>
            ⬅️ Return
          </Button>
        ) : null}
      </MainWrp>

      <MainFooter>Created by Mire</MainFooter>
    </AppWrp>
  );
};

export default App;
