import { IntroWrp, ImageWrp } from "./HangmanIntro-styles";
import ChooseAttempts from "./ChooseAttempts/ChooseAttempts";
import { GAMES } from "../../Constants/Games";

const HangmanIntro = () => {
  const game = GAMES[1];
  return (
    <IntroWrp>
      <article>
        <h2>VOCABULARY CHALLENGE!</h2>
        <p>{game.introText?.p1} </p>
      </article>
      <ImageWrp>
        <img
          src="/public/assets/hangman/hangman-intro.jpg"
          alt="Level Carabiners"
        />
      </ImageWrp>
      <article>
        <p style={{ fontWeight: "bold" }}>{game.introText?.p2} </p>
        <ChooseAttempts />
      </article>
    </IntroWrp>
  );
};

export default HangmanIntro;
