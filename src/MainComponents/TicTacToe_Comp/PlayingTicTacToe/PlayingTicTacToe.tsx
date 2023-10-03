import { PlayingWrp, ButtonsWrp } from "./PlayingTicTacToe-styles";
import Board from "../Board/Board";
import Turn from "../Turn/Turn";
import Points from "../Points/Points";
import Button from "../../Button/Button";
import { useTicTacToeContext } from "../Context-TicTacToe/TicTacToeContext";

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

  console.log(selectedWall);

  return (
    <PlayingWrp>
      <h2>{selectedWall.name.toUpperCase()}</h2>
      <article>
        <Board
          {...gameState}
          updateBoard={updateBoard}
          xToken={xToken}
          oToken={oToken}
          selectedWall={selectedWall}
        />
      </article>
      <article>
        <Turn {...gameState} xToken={xToken} oToken={oToken} />
      </article>
      <article>
        <Points {...gameState} xToken={xToken} oToken={oToken} />
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
