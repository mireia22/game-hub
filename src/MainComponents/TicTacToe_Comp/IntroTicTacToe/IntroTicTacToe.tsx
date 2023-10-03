import { GAMES } from "../../Constants/Games";
import { useTicTacToeContext } from "../Context-TicTacToe/TicTacToeContext";
import {
  ChooseWallSection,
  ClimbingWallsWrp,
  WallImageContainer,
} from "./IntroTicTacToe-styles";

const IntroTicTacToe = () => {
  const { selectWallAndStartGame } = useTicTacToeContext();

  const game = GAMES[0];
  return (
    <ChooseWallSection>
      <article>
        <h4>{game.introText?.p1.toUpperCase()} </h4>
      </article>
      <article>
        <p>{game.introText?.p2} </p>
      </article>
      <article>
        <h4>Choose a climbing wall:</h4>
        <ClimbingWallsWrp>
          {game.climbingWalls?.map((wall, index) => (
            <WallImageContainer
              key={index}
              onClick={() => selectWallAndStartGame(wall.image, wall.name)}
            >
              <img src={wall.image} alt={wall.name} />
              <h4>{wall.name.toUpperCase()}</h4>
            </WallImageContainer>
          ))}
        </ClimbingWallsWrp>
      </article>
    </ChooseWallSection>
  );
};

export default IntroTicTacToe;
