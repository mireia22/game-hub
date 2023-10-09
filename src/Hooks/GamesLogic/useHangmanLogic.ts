import { useState } from "react";
import {
  getHiddenWord,
  getNormalizedWord,
  getRandom,
} from "../../Utils/Hangman-utils/getWords";
import { RIDDLES } from "../../MainComponents/Constants/Hangman-Riddles";

const riddleNames = RIDDLES.map((riddle) => riddle.name);

const useHanganLogic = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [attempts, setAttempts] = useState<number | null>(null);
  const [riddle, setRiddle] = useState<string>(getRandom(riddleNames));
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  const normalizedRiddleName = getNormalizedWord(riddle);
  const riddleLettersArray = normalizedRiddleName.split("");
  const [hiddenRiddle, setHiddenRiddle] = useState<string[]>(
    riddleLettersArray.map(() => "_")
  );
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);

  const userWins = hiddenRiddle.join("") === normalizedRiddleName;

  const updateHiddenRiddle = (letter: string) => {
    const newHiddenRiddle = hiddenRiddle.map((char: string, i: number) =>
      riddleLettersArray[i] === letter ? letter : char
    );
    setHiddenRiddle(newHiddenRiddle);
  };

  const startGame = (selectedAttempts: number) => {
    setAttempts(selectedAttempts);
    setIsStarted(true);
  };

  const resetGame = () => {
    const newRandomRiddle = getRandom(riddleNames);
    setRiddle(newRandomRiddle);
    setIsStarted(false);
    setAttempts(null);
    setHiddenRiddle(getHiddenWord(newRandomRiddle));
    setCurrentFrame(0);
    setIncorrectLetters([]);
    setCorrectLetters([]);
  };

  return {
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
};

export default useHanganLogic;
