import { BsPatchQuestionFill } from "react-icons/bs";
import {
  DoingHangmanWrp,
  RemainingAttemptsWrp,
  SequenceAndKeyboardWrp,
} from "./DoingHangman-styles";
import WinModal from "../../WinModal/WinModal";
import VisualSequence from "../VisualSequence/VisualSequence";
import Keyboard from "../Keyboard/Keyboard";
import Button from "../../Button/Button";
import { AttemptsImg } from "../GameIntro/ChooseAttempts/ChooseAttempts-styles";
import { AiFillWarning } from "react-icons/ai";
import { useHangmanContext } from "../../../Hooks/Context/useHangmanContext";
const DoingHangman = () => {
  const {
    startGame,
    isStarted,
    riddle,
    hiddenRiddle,
    userWins,
    resetGame,
    attempts,
  } = useHangmanContext();

  return (
    <DoingHangmanWrp>
      <article>
        <span>
          <BsPatchQuestionFill />
        </span>
        <p>{riddle}</p>
        <h2>{hiddenRiddle.join(" ")}</h2>
      </article>
      {userWins ? (
        <WinModal resetGame={resetGame}>
          <p>Well done!</p>
          <p>You've reached the summit!</p>
          <img
            src="/assets/hangman/climbing-sequence/summit-frame.jpg"
            alt="summit"
          />
        </WinModal>
      ) : attempts === 0 ? (
        <WinModal resetGame={resetGame}>
          <p>You've fallen! </p>
          <img
            src="/assets/hangman/climbing-sequence/fail-frame.jpg"
            alt="fail"
          />
        </WinModal>
      ) : (
        <SequenceAndKeyboardWrp>
          <VisualSequence />
          <Keyboard />
        </SequenceAndKeyboardWrp>
      )}
      <RemainingAttemptsWrp>
        {attempts === 1 && (
          <article>
            <AiFillWarning
              style={{
                color: "rgba(196, 15, 15, 0.8)",
                marginRight: "1rem",
                fontSize: "2rem",
              }}
            />
          </article>
        )}
        {attempts}
        <AttemptsImg src="/assets/hangman/quickdraw.jpg" alt="Quickdraws" />
      </RemainingAttemptsWrp>
      <article>
        <Button onClick={isStarted ? resetGame : startGame}>
          {isStarted ? "Try Again" : "Start Game"}
        </Button>
      </article>
    </DoingHangmanWrp>
  );
};

export default DoingHangman;
