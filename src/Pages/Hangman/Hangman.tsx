import HangmanIntro from "../../MainComponents/Hangman_Comp/GameIntro/HangmanIntro";
import { useHangmanContext } from "../../MainComponents/Hangman_Comp/Context-Hangman/HangmanContext";
import DoingHangman from "../../MainComponents/Hangman_Comp/DoingHangman/DoingHangman";

const Hangman = () => {
  const { isStarted } = useHangmanContext();
  return isStarted ? <DoingHangman /> : <HangmanIntro />;
};

export default Hangman;
