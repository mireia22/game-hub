import { useTicTacToeContext } from "../../../Hooks/Context/useTicTacToeContext";
import { GAMES } from "../../Constants/Games";
import {
  ChooseWallSection,
  ClimbingWallsWrp,
  WallImageContainer,
} from "./IntroTicTacToe-styles";

const IntroTicTacToe = () => {
  const { selectWallAndStartGame } = useTicTacToeContext();

  const game = GAMES[0];
  const { introText, climbingWalls } = game;

  return (
    <ChooseWallSection>
      <article>
        <h2>{introText?.p1?.toUpperCase()} </h2>
        <p>{introText.p2} </p>
        <p>{introText.p3} </p>
        <p>{introText.p4} </p>
      </article>
      <article>
        <h4>Choose a climbing wall:</h4>
        <ClimbingWallsWrp>
          {climbingWalls?.map((wall, index) => (
            <WallImageContainer
              key={index}
              onClick={() => selectWallAndStartGame(wall.image, wall.name)}
            >
              <img src={wall?.image} alt={wall?.name} loading="lazy" />
              <h4>{wall.name?.toUpperCase()}</h4>
            </WallImageContainer>
          ))}
        </ClimbingWallsWrp>
      </article>
    </ChooseWallSection>
  );
};

export default IntroTicTacToe;
