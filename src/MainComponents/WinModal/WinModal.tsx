import Button from "../Button/Button";
import { PopOut, PopOutContent } from "./WinModal-styles";

type WinModalProps = {
  resetGame: () => void;
  gameResult?: string;
  children: React.ReactNode;
};

const WinModal: React.FC<WinModalProps> = ({ resetGame, children }) => {
  return (
    <PopOut>
      <PopOutContent>
        {children}
        <Button variant="" onClick={resetGame}>
          Climb again
        </Button>
      </PopOutContent>
    </PopOut>
  );
};

export default WinModal;
