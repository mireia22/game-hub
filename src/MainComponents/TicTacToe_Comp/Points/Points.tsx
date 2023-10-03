import React from "react";
import { PointsWrp, PointsTitle } from "./Points-styles";

type PointsProps = {
  gameResult: "winner" | "equal" | null;
  points: { pointsX: number; pointsO: number };
  xToken: React.ReactNode;
  oToken: React.ReactNode;
};

const Points: React.FC<PointsProps> = ({ points, xToken, oToken }) => {
  return (
    <>
      <PointsTitle>Points:</PointsTitle>
      <PointsWrp>
        <p>{xToken}</p>
        <p>{points.pointsX}</p>
      </PointsWrp>
      <PointsWrp>
        <p>{oToken}</p>
        <p>{points.pointsO}</p>
      </PointsWrp>
    </>
  );
};
export default Points;
