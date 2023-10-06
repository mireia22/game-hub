import HangmanIntro from "../../MainComponents/Hangman_Comp/GameIntro/HangmanIntro";
import DoingHangman from "../../MainComponents/Hangman_Comp/DoingHangman/DoingHangman";
import { useHangmanContext } from "../../Context/HangmanContext";

const Hangman = () => {
  const { isStarted } = useHangmanContext();
  return isStarted ? <DoingHangman /> : <HangmanIntro />;
};

export default Hangman;
