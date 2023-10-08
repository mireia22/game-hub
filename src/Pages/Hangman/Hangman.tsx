import HangmanIntro from "../../MainComponents/Hangman_Comp/GameIntro/HangmanIntro";
import DoingHangman from "../../MainComponents/Hangman_Comp/DoingHangman/DoingHangman";
import { useHangmanContext } from "../../Hooks/Context/useHangmanContext";

const Hangman = () => {
  const { isStarted } = useHangmanContext();
  return isStarted ? <DoingHangman /> : <HangmanIntro />;
};

export default Hangman;
