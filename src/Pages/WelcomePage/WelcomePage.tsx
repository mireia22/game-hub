import { Link } from "react-router-dom";
import { WelcomeWrp, TextWrp } from "./WelcomePage-styles";
const WelcomePage = () => {
  return (
    <WelcomeWrp>
      <TextWrp>
        <h2>Welcome to Climb Hub!</h2>
        <p>Immerse in our collection of games:</p>
        <h4>Tictactoe, Sudoku, and Hangman.</h4>
        <p>Use strategies to resolve </p>
        <p>exciting mental challenges.</p>
      </TextWrp>
      <TextWrp>
        <Link to="/login">
          <span>Login</span> and start now
        </Link>
      </TextWrp>
    </WelcomeWrp>
  );
};

export default WelcomePage;
