import React, { useState } from "react";
import { Letter, KeyboardWrp } from "./Keyboard-styles";

const Keyboard = ({
  updateAttempts,
  updateHiddenRiddle,
  normalizedRiddleName,
}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  const checkLetterMatch = (clickedLetter) => {
    const isLetterInName = normalizedRiddleName.includes(clickedLetter);
    if (isLetterInName) {
      updateHiddenRiddle(clickedLetter);
      setCorrectLetters((prevCorrectLetters) => [
        ...prevCorrectLetters,
        clickedLetter,
      ]);
    } else {
      updateAttempts();
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
          ? "red"
          : correctLetters.includes(letter)
          ? "green"
          : "white";

        return (
          <Letter
            key={letter}
            onClick={() => checkLetterMatch(letter)}
            value={letter}
            id={letter}
            style={{ backgroundColor }}
          >
            {letter}
          </Letter>
        );
      })}
    </KeyboardWrp>
  );
};

export default Keyboard;
