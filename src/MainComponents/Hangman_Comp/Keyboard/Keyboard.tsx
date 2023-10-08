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
  const checkLetterMatch = (clickedLetter) => {
    const isLetterInName = normalizedRiddleName.includes(clickedLetter);
    if (
      incorrectLetters.includes(clickedLetter) ||
      correctLetters.includes(clickedLetter)
    ) {
      return;
    }

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
        const backgroundColor = incorrectLetters.includes(letter)
          ? "rgba(196, 15, 15, 0.8)"
          : correctLetters.includes(letter)
          ? "rgba(20, 158, 7, 0.8)"
          : "var(--font)";
        const border = incorrectLetters.includes(letter)
          ? "2px solid rgba(158, 7, 7, 0.8)"
          : correctLetters.includes(letter)
          ? "2px solid rgba(20, 158, 7, 0.8)"
          : "2px solid rgba(1, 1, 1, 0.5)";

        return (
          <Letter
            key={letter}
            onClick={() => checkLetterMatch(letter)}
            value={letter}
            id={letter}
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
