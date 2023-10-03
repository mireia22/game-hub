import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainWrp, MainHeader, MainFooter, AppWrp } from "./App-styles";
import Button from "./MainComponents/Button/Button";
import Home from "./Pages/Home/Home";
import Tictactoe from "./Pages/TicTacToe/Tictactoe";
import Hangman from "./Pages/Hangman/Hangman";
import Sudoku from "./Pages/Sudoku/Sudoku";
import LoginForm from "./LogInForm/LogInForm";
import { HangmanDataProvider } from "./MainComponents/Hangman_Comp/Context-Hangman/HangmanContext";
import { TicTacToeDataProvider } from "./MainComponents/TicTacToe_Comp/Context-TicTacToe/TicTacToeContext";
import { SudokuDataProvider } from "./MainComponents/Sudoku_Comp/Sudoku-Context/SudokuContext";
import { FreeLayout, NavBar } from "./Layout/FreeLayout";
import { ProtectedLayout } from "./Layout/ProtectedLayout";
import Register from "./Register/Register";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import { useAuthContext } from "./Context/AuthContext";

const App = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const returnToHome = () => {
    navigate("/dashboard/home");
  };

  return (
    <AppWrp isDashboard={isDashboard}>
      <MainHeader>
        <h2>Climb Hub</h2>
        {user ? <ProtectedLayout /> : <NavBar />}
      </MainHeader>
      <MainWrp>
        {/* FREE ROUTES */}
        <Routes>
          <Route>
            <Route path="/" element={<WelcomePage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<Register />} />
            <Route path="/dashboard/home" element={<Home />} />
            <Route
              path="dashboard/tic-tac-toe"
              element={
                <TicTacToeDataProvider>
                  <Tictactoe />
                </TicTacToeDataProvider>
              }
            />
            <Route
              path="dashboard/hangman"
              element={
                <HangmanDataProvider>
                  <Hangman />
                </HangmanDataProvider>
              }
            />
            <Route
              path="sudoku"
              element={
                <SudokuDataProvider>
                  <Sudoku />
                </SudokuDataProvider>
              }
            />
          </Route>
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
