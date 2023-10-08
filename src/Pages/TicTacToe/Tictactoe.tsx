import WinModal from "../../MainComponents/WinModal/WinModal";
import IntroTicTacToe from "../../MainComponents/TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe";
import PlayingTicTacToe from "../../MainComponents/TicTacToe_Comp/PlayingTicTacToe/PlayingTicTacToe";
import { createToken } from "../../Utils/createTokens";
import { useTicTacToeContext } from "../../Hooks/Context/useTicTacToeContext";

const Tictactoe: React.FC = () => {
  const { gameState, resetGame } = useTicTacToeContext();
  const xToken = createToken("green-icon");
  const oToken = createToken("red-icon");

  return (
    <>
      {gameState.isStarted ? <PlayingTicTacToe /> : <IntroTicTacToe />}

      {gameState.gameResult !== null && (
        <WinModal resetGame={resetGame} gameResult={gameState.gameResult}>
          {gameState.gameResult === "equal" ? (
            "Equals"
          ) : (
            <>
              <h2>Winner is:</h2>
              <h1>{gameState.gameResult === "X" ? xToken : oToken}</h1>
            </>
          )}
        </WinModal>
      )}
    </>
  );
};

export default Tictactoe;
