import Board from "../Board/Board";
import Turn from "../Turn/Turn";
import Points from "../Points/Points";
import Button from "../../Button/Button";
import { useTicTacToeContext } from "../../../Hooks/Context/useTicTacToeContext";
import WinModal from "../../WinModal/WinModal";
import { ButtonsWrp, PlayingWrp } from "./DoingTicTacToe-styles";
import { createToken } from "../../../Utils/Tictactoe-utils/createTokens";

const DoingTicTacToe = () => {
  const { gameState, resetPoints, updateBoard, resetGame, selectedWall } =
    useTicTacToeContext();

  const { pointsX, pointsO } = gameState.points;
  const gameResult = gameState.gameResult;
  const xToken: JSX.Element = createToken("green-icon");
  const oToken: JSX.Element = createToken("red-icon");

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
      {gameState.gameResult !== null && (
        <WinModal resetGame={resetGame} gameResult={gameState.gameResult}>
          {gameState.gameResult === "equal" ? (
            "Equals"
          ) : (
            <>
              <h3>Winner is:</h3>
              {gameState.gameResult === "X" ? xToken : oToken}
            </>
          )}
        </WinModal>
      )}
    </PlayingWrp>
  );
};

export default DoingTicTacToe;
