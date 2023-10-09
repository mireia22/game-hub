import { IntroWrp, ImageWrp } from "./HangmanIntro-styles";
import ChooseAttempts from "./ChooseAttempts/ChooseAttempts";
import { GAMES } from "../../Constants/Games";

const HangmanIntro = () => {
  const game = GAMES[1];
  const introTextP1 = game.introText?.p1 || "";
  const introTextP2 = game.introText?.p2 || "";

  return (
    <IntroWrp>
      <article>
        <h2>VOCABULARY CHALLENGE!</h2>
        <p>{introTextP1}</p>
      </article>
      <ImageWrp>
        <img
          src="/assets/hangman/hangman-intro.jpg"
          alt="Level Carabiners"
          loading="lazy"
        />
      </ImageWrp>
      <article>
        <p>{introTextP2}</p>
        <ChooseAttempts />
      </article>
    </IntroWrp>
  );
};

export default HangmanIntro;
