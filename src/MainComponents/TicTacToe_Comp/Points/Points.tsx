import React from "react";

const Points = ({ points }) => {
  return (
    <div>
      <h4>Points:</h4>
      <p>X: {points.pointsX}</p>
      <p>O: {points.pointsO}</p>
    </div>
  );
};

export default Points;
