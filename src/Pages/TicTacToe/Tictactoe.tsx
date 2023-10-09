import IntroTicTacToe from "../../MainComponents/TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe";
import { useTicTacToeContext } from "../../Hooks/Context/useTicTacToeContext";
import DoingTicTacToe from "../../MainComponents/TicTacToe_Comp/DoingTicTacToe/DoingTicTacToe";

const Tictactoe: React.FC = () => {
  const { isStarted } = useTicTacToeContext();
  return isStarted ? <DoingTicTacToe /> : <IntroTicTacToe />;
};

export default Tictactoe;
