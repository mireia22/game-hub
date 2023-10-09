import { GAMES } from "../../Constants/Games";
import {
  ImageWrp,
  IntroWrp,
} from "../../Hangman_Comp/GameIntro/HangmanIntro-styles";
import Button from "../../Button/Button";
import { useSudokuContext } from "../../../Hooks/Context/useSudokuContext";

const SudokuIntro = () => {
  const { startGame } = useSudokuContext();
  const game = GAMES[2];

  return (
    <IntroWrp>
      <article>
        <h2>ROUTE SETTER</h2>
        <p>{game.introText?.p1} </p>
        <p>{game.introText?.p2} </p>
        <h3>{game.introText?.p3} </h3>
      </article>
      <ImageWrp>
        <img
          src="/assets/sudoku/sudoku-intro.jpg"
          alt="Level Carabiners"
          loading="lazy"
        />
      </ImageWrp>
      <Button variant="start" onClick={startGame}>
        Start
      </Button>
    </IntroWrp>
  );
};

export default SudokuIntro;
