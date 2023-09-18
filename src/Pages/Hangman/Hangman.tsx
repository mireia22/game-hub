import { useState } from "react";
import { RIDDLES } from "../../MainComponents/Constants/Riddles";
import Button from "../../MainComponents/Button/Button";
import Keyboard from "../../MainComponents/Hangman_Comp/Keyboard/Keyboard";
import WinModal from "../../MainComponents/WinModal/WinModal";
import { HangmanWrp } from "../Hangman/Hangman-styles";
import { removeDiacritics } from "../../utils/Diacritics";

const getRandomRiddle = () => {
  const randomIndex = Math.floor(Math.random() * RIDDLES.length);
  return RIDDLES[randomIndex];
};

const Hangman = () => {
  const [isStarted, setIsStarted] = useState<Boolean>(false);

  const [attempts, setAttempts] = useState<Number>(10);
  const [riddle, setRiddle] = useState(getRandomRiddle()); //riddle.name = Canard

  const normalizedRiddleName = removeDiacritics(riddle.name).toUpperCase(); //CANARD
  const riddleLettersArray = normalizedRiddleName.split(""); //["C", "A", "N", "A", "R", "D"]
  console.log(normalizedRiddleName);
  const [hiddenRiddle, setHiddenRiddle] = useState(
    riddleLettersArray.map(() => "_")
  ); //["_", "_", "_", "_", "_", "_"]

  const userWins = hiddenRiddle.join("") === normalizedRiddleName;
  const updateHiddenRiddle = (letter: string) => {
    const newHiddenRiddle = hiddenRiddle.map((char: string, i: number) =>
      riddleLettersArray[i] === letter ? letter : char
    );
    setHiddenRiddle(newHiddenRiddle);
  };
  const startGame = () => {
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
  };

  return (
    <HangmanWrp>
      {isStarted ? (
        <>
          <p>{riddle.description}</p>
          <h2>{hiddenRiddle.join(" ")}</h2>
          {userWins ? (
            <WinModal resetGame={resetGame}>Well done!</WinModal>
          ) : attempts === 0 ? (
            <WinModal resetGame={resetGame}>You lost!</WinModal>
          ) : (
            <Keyboard
              updateAttempts={() => {
                setAttempts(attempts - 1);
              }}
              normalizedRiddleName={normalizedRiddleName}
              updateHiddenRiddle={updateHiddenRiddle}
            />
          )}
          <p>Attempts: {attempts}</p>
          <Button onClick={isStarted ? resetGame : startGame}>
            {isStarted ? "Try Again" : "Start Game"}
          </Button>
        </>
      ) : (
        <Button onClick={isStarted ? resetGame : startGame}>
          {isStarted ? "Start Again" : "Start Game"}
        </Button>
      )}
    </HangmanWrp>
  );
};

export default Hangman;
