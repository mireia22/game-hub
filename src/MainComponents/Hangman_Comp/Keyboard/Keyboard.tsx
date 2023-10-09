import { useHangmanContext } from "../../../Hooks/Context/useHangmanContext";
import { Letter, KeyboardWrp } from "./Keyboard-styles";

const Keyboard = () => {
  const {
    setAttempts,
    attempts,
    setCurrentFrame,
    setCorrectLetters,
    correctLetters,
    updateHiddenRiddle,
    normalizedRiddleName,
    incorrectLetters,
    setIncorrectLetters,
  } = useHangmanContext();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleLetterClick = (clickedLetter: string) => {
    if (!attempts || incorrectLetters.includes(clickedLetter)) {
      return;
    }

    const isLetterInName = normalizedRiddleName.includes(clickedLetter);

    if (isLetterInName) {
      updateHiddenRiddle(clickedLetter);
      setCorrectLetters((prevCorrectLetters) => [
        ...prevCorrectLetters,
        clickedLetter,
      ]);
      setCurrentFrame((prevFrame) => prevFrame + 1);
    } else {
      setAttempts(attempts - 1);
      setIncorrectLetters((prevIncorrectLetters) => [
        ...prevIncorrectLetters,
        clickedLetter,
      ]);
    }
  };

  return (
    <KeyboardWrp>
      {alphabet.split("").map((letter) => {
        const isIncorrect = incorrectLetters.includes(letter);
        const isCorrect = correctLetters.includes(letter);
        const backgroundColor = isIncorrect
          ? "rgba(196, 15, 15, 0.8)"
          : isCorrect
          ? "rgba(20, 158, 7, 0.8)"
          : "var(--font)";
        const border = isIncorrect
          ? "2px solid rgba(158, 7, 7, 0.8)"
          : isCorrect
          ? "2px solid rgba(20, 158, 7, 0.8)"
          : "2px solid rgba(1, 1, 1, 0.5)";

        return (
          <Letter
            key={letter}
            onClick={() => handleLetterClick(letter)}
            value={letter}
            style={{ backgroundColor, border }}
          >
            {letter}
          </Letter>
        );
      })}
    </KeyboardWrp>
  );
};

export default Keyboard;
