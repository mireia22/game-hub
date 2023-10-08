import { PlayingWrp, ButtonsWrp } from "./PlayingTicTacToe-styles";
import Board from "../Board/Board";
import Turn from "../Turn/Turn";
import Points from "../Points/Points";
import Button from "../../Button/Button";
import { createToken } from "../../../Utils/createTokens";
import { useTicTacToeContext } from "../../../Hooks/Context/useTicTacToeContext";

const PlayingTicTacToe = () => {
  const { gameState, resetPoints, updateBoard, resetGame, selectedWall } =
    useTicTacToeContext();

  const { pointsX, pointsO } = gameState.points;
  const gameResult = gameState.gameResult;
  const xToken = createToken("green-icon");
  const oToken = createToken("red-icon");

  return (
    <PlayingWrp>
      <article>
        <h2>{selectedWall.name.toUpperCase()}</h2>
        <Board
          {...gameState}
          updateBoard={updateBoard}
          xToken={xToken}
          oToken={oToken}
          selectedWall={selectedWall}
        />
        <Turn {...gameState} xToken={xToken} oToken={oToken} />
      </article>
      <article>
        <Points
          points={{ pointsX, pointsO }}
          gameResult={gameResult as "winner" | "equal" | null}
          xToken={xToken}
          oToken={oToken}
        />
      </article>
      <ButtonsWrp>
        <Button variant="reset" onClick={resetGame}>
          Reset Game
        </Button>
        <Button variant="reset" onClick={resetPoints}>
          Reset Points
        </Button>
      </ButtonsWrp>
    </PlayingWrp>
  );
};

export default PlayingTicTacToe;
