import { SolvedSudokuBoardTemplateProps } from "../../../Types/Sudoku-types";
import {
  SolvedNumberCell,
  SolvedBoard,
  SolvedSudokuGrid,
} from "./SolvedSudokuBoardTemplate-styles";

const SolvedSudokuBoardTemplate = ({
  subgrids,
}: SolvedSudokuBoardTemplateProps) => {
  return (
    <SolvedBoard>
      {subgrids?.map((subgrid: number[], subgridIndex: number) => (
        <SolvedSudokuGrid key={subgridIndex}>
          {subgrid.map((cell, cellIndex) => {
            return (
              <SolvedNumberCell key={cellIndex}>
                <p> {cell + 1}</p>
              </SolvedNumberCell>
            );
          })}
        </SolvedSudokuGrid>
      ))}
    </SolvedBoard>
  );
};

export default SolvedSudokuBoardTemplate;
