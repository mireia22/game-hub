import React, { useState } from "react";
import { createContext, useContext } from "react";
import { removeDiacritics } from "../../../utils/Diacritics";
import { RIDDLES } from "../../Constants/Hangman-Riddles";

export const HangmanContext = createContext();
export const useHangmanContext = () => useContext(HangmanContext);

const getRandomRiddle = () => {
  const randomIndex = Math.floor(Math.random() * RIDDLES.length);
  return RIDDLES[randomIndex];
};

//PROVIDER
export const HangmanDataProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState<Boolean>(false);
  const [attempts, setAttempts] = useState<Number>(10);
  const [riddle, setRiddle] = useState(getRandomRiddle()); // riddle.name = Jam
  const [currentFrame, setCurrentFrame] = useState(0);
  const normalizedRiddleName = removeDiacritics(riddle.name).toUpperCase();
  const riddleLettersArray = normalizedRiddleName.split("");
  const [hiddenRiddle, setHiddenRiddle] = useState(
    riddleLettersArray.map(() => "_")
  );
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  const userWins = hiddenRiddle.join("") === normalizedRiddleName;
  console.log(riddle);
  const updateHiddenRiddle = (letter: string) => {
    const newHiddenRiddle = hiddenRiddle.map((char: string, i: number) =>
      riddleLettersArray[i] === letter ? letter : char
    );
    setHiddenRiddle(newHiddenRiddle);
  };

  const startGame = (selectedAttempts: Number) => {
    setAttempts(selectedAttempts);
    setIsStarted(true);
  };

  const resetGame = () => {
    const newRandomRiddle = getRandomRiddle();
    setRiddle(newRandomRiddle);
    setIsStarted(false);
    setAttempts(10);
    setHiddenRiddle(
      removeDiacritics(newRandomRiddle.name)
        .toUpperCase()
        .split("")
        .map(() => "_")
    );
    setCurrentFrame(0);
    setIncorrectLetters([]);
    setCorrectLetters([]);
  };

  const sharedState = {
    isStarted,
    setIsStarted,
    attempts,
    setAttempts,
    riddle,
    setRiddle,
    currentFrame,
    setCurrentFrame,
    hiddenRiddle,
    setHiddenRiddle,
    incorrectLetters,
    setIncorrectLetters,
    startGame,
    resetGame,
    updateHiddenRiddle,
    userWins,
    correctLetters,
    setCorrectLetters,
    normalizedRiddleName,
  };

  return (
    <HangmanContext.Provider value={sharedState}>
      {children}
    </HangmanContext.Provider>
  );
};
