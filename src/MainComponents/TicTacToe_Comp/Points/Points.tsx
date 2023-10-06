import React from "react";
import { PointsWrp, PointsValue } from "./Points-styles";

type PointsProps = {
  gameResult: "winner" | "equal" | null;
  points: { pointsX: number; pointsO: number };
  xToken: React.ReactNode;
  oToken: React.ReactNode;
};

const Points: React.FC<PointsProps> = ({ points, xToken, oToken }) => {
  return (
    <PointsWrp>
      <h4>Finished routes:</h4>
      <PointsValue>
        {xToken}
        <p>{points.pointsX}</p>
      </PointsValue>
      <PointsValue>
        {oToken}
        <p>{points.pointsO}</p>
      </PointsValue>
    </PointsWrp>
  );
};
export default Points;
