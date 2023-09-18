import React from "react";

const Turn = ({ turn, isStarted }) => {
  return isStarted ? (
    <div>
      <p>It's {turn} turn</p>
    </div>
  ) : null;
};

export default Turn;
