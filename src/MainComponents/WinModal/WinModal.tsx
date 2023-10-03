import Button from "../Button/Button";
import { PopOut, PopOutContent } from "./WinModal-styles";
const WinModal = ({ resetGame, children }) => {
  return (
    <PopOut>
      <PopOutContent>
        {children}
        <Button onClick={resetGame}>Climb again</Button>
      </PopOutContent>
    </PopOut>
  );
  return null;
};

export default WinModal;
