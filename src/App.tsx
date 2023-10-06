import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainWrp, MainHeader, MainFooter, AppWrp } from "./App-styles";
import Button from "./MainComponents/Button/Button";
import Home from "./Pages/Home/Home";
import Tictactoe from "./Pages/TicTacToe/Tictactoe";
import Hangman from "./Pages/Hangman/Hangman";
import Sudoku from "./Pages/Sudoku/Sudoku";
import LoginForm from "./MainComponents/LogInForm/LogInForm";
import { ProtectedNavLayout } from "./Layout/ProtectedLayout";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import { useAuthContext } from "./Context/AuthContext";
import { TicTacToeDataProvider } from "./Context/TicTacToeContext";
import { HangmanDataProvider } from "./Context/HangmanContext";
import { SudokuDataProvider } from "./Context/SudokuContext";
import { GiMountainClimbing } from "react-icons/gi";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";

const App: React.FC = () => {
  const { user } = useAuthContext();

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname.startsWith("/dashboard");

  const returnToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <AppWrp isdashboard={isDashboard.toString()}>
      <MainHeader>
        {user ? (
          <ProtectedNavLayout />
        ) : (
          <GiMountainClimbing className="climb-icon" />
        )}
      </MainHeader>
      <MainWrp>
        <Routes>
          <Route>
            {/* FREE ROUTES */}
            <Route path="/" element={<WelcomePage />} />
            <Route path="login" element={<LoginForm />} />

            {/* PROTECTED ROUTES */}
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
              path="dashboard/sudoku"
              element={
                <SudokuDataProvider>
                  <Sudoku />
                </SudokuDataProvider>
              }
            />
          </Route>
        </Routes>
        {location.pathname !== "/" &&
          location.pathname !== "/dashboard/home" && (
            <Button variant="return" onClick={returnToPreviousPage}>
              <TbArrowBigLeftLineFilled />
            </Button>
          )}
      </MainWrp>

      <MainFooter>Created by Mire</MainFooter>
    </AppWrp>
  );
};

export default App;
