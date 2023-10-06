import { PlayingWrp, ButtonsWrp } from "./PlayingTicTacToe-styles";
import Board from "../Board/Board";
import Turn from "../Turn/Turn";
import Points from "../Points/Points";
import Button from "../../Button/Button";
import { useTicTacToeContext } from "../../../Context/TicTacToeContext";

const PlayingTicTacToe = () => {
  const {
    gameState,
    xToken,
    resetPoints,
    oToken,
    updateBoard,
    resetGame,
    selectedWall,
  } = useTicTacToeContext();

  const { pointsX, pointsO } = gameState.points;
  const gameResult = gameState.gameResult;

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
