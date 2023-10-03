import {
  AttemptsImg,
  ChooseAttemptsButton,
  ChooseAttemptsUl,
} from "./ChooseAttempts-styles";
import { useHangmanContext } from "../../Context-Hangman/HangmanContext";
const ChooseAttempts = () => {
  const climbingAttempts = [3, 5, 10];

  const { isStarted, startGame, resetGame } = useHangmanContext();

  return (
    <ChooseAttemptsUl>
      {climbingAttempts.map((option, index) => (
        <ChooseAttemptsButton
          key={index}
          onClick={() => (isStarted ? resetGame() : startGame(option))}
          attempts={option}
        >
          {option}
          <AttemptsImg
            src="/assets/hangman/quickdraw.jpg"
            alt="Image Alt Text"
          />
        </ChooseAttemptsButton>
      ))}
    </ChooseAttemptsUl>
  );
};

export default ChooseAttempts;
