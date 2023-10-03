import { RIDDLES_IMG } from "../../Constants/Hangman-Riddles";
import { useHangmanContext } from "../Context-Hangman/HangmanContext";
import { RiddlesImgWrp } from "./VisualSequence-styles";

const VisualSequence = () => {
  const { currentFrame } = useHangmanContext();

  return (
    <>
      <RiddlesImgWrp key={RIDDLES_IMG[currentFrame].id}>
        <img
          src={RIDDLES_IMG[currentFrame].src}
          alt={RIDDLES_IMG[currentFrame].name}
          loading="lazy"
        />
      </RiddlesImgWrp>
      <p>{RIDDLES_IMG[currentFrame].name}</p>
    </>
  );
};

export default VisualSequence;
