import React from "react";
import { TurnWrp } from "./Turn-styles";

type TurnProps = {
  turn: "X" | "O";
  xToken: React.ReactNode;
  oToken: React.ReactNode;
};

const Turn: React.FC<TurnProps> = ({ turn, xToken, oToken }) => {
  return (
    <TurnWrp>
      <p>It's </p>
      {turn === "X" ? xToken : oToken}
      <p>turn</p>
    </TurnWrp>
  );
};

export default Turn;
