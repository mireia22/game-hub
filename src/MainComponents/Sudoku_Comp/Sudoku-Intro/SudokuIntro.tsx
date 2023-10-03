import React from "react";
import { GAMES } from "../../Constants/Games";
import {
  ImageWrp,
  IntroWrp,
} from "../../Hangman_Comp/GameIntro/HangmanIntro-styles";
import Button from "../../Button/Button";
import { useSudokuContext } from "../Sudoku-Context/SudokuContext";

const SudokuIntro = () => {
  const { isStarted, startGame } = useSudokuContext();
  const game = GAMES[2];

  return (
    <IntroWrp>
      <article>
        <h1>HANGMAN</h1>
        <p>{game.introText?.p1} </p>
        <p>{game.introText?.p2} </p>
        <p>{game.introText?.p3} </p>
        <p>{game.introText?.p4} </p>
      </article>
      <ImageWrp>
        <img
          src="/public/assets/sudoku/sudoku-intro.jpg"
          alt="Level Carabiners"
        />
      </ImageWrp>
      <Button onClick={startGame}>Start</Button>
    </IntroWrp>
  );
};

export default SudokuIntro;
