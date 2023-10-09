import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainWrp, MainHeader, AppWrp } from "./App-styles";
import Button from "./MainComponents/Button/Button";
import Home from "./Pages/Home/Home";
import Tictactoe from "./Pages/TicTacToe/Tictactoe";
import Hangman from "./Pages/Hangman/Hangman";
import Sudoku from "./Pages/Sudoku/Sudoku";
import LoginForm from "./MainComponents/LogInForm/LogInForm";
import { ProtectedNavLayout } from "./Layout/ProtectedLayout";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import { GiMountainClimbing } from "react-icons/gi";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { TicTacToeDataProvider } from "./Hooks/Context/useTicTacToeContext";
import { HangmanDataProvider } from "./Hooks/Context/useHangmanContext";
import { SudokuDataProvider } from "./Hooks/Context/useSudokuContext";
import { useAuthContext } from "./Hooks/Context/useAuthContext";
import Footer from "./MainComponents/Footer/Footer";

const App: React.FC = () => {
  const { user } = useAuthContext();

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname.startsWith("/dashboard");

  const returnToPreviousPage = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
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
            <Route path="/dashboard" element={<Home />} />
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
        {location.pathname !== "/" && location.pathname !== "/dashboard" && (
          <Button variant="return" onClick={returnToPreviousPage}>
            <TbArrowBigLeftLineFilled />
          </Button>
        )}
      </MainWrp>

      <Footer />
    </AppWrp>
  );
};

export default App;
