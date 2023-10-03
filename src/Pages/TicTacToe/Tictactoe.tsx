import WinModal from "../../MainComponents/WinModal/WinModal";
import { TicTacToeWrp } from "./Tictactoe-styles";
import IntroTicTacToe from "../../MainComponents/TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe";
import PlayingTicTacToe from "../../MainComponents/TicTacToe_Comp/PlayingTicTacToe/PlayingTicTacToe";
import { useTicTacToeContext } from "../../MainComponents/TicTacToe_Comp/Context-TicTacToe/TicTacToeContext";

const Tictactoe: React.FC = () => {
  const { gameState, resetGame, xToken, oToken } = useTicTacToeContext();
  return (
    <TicTacToeWrp>
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
    </TicTacToeWrp>
  );
};

export default Tictactoe;
