import {
  SolvedNumberCell,
  SolvedBoard,
  SolvedSudokuGrid,
} from "./SolvedSudokuBoardTemplate-styles";

const SolvedSudokuBoardTemplate = ({ subgrids, initialFilledCells }) => {
  return (
    <SolvedBoard>
      {subgrids?.map((subgrid, subgridIndex) => (
        <SolvedSudokuGrid key={subgridIndex}>
          {subgrid.map((cell, cellIndex) => {
            const boardCellIndex = subgridIndex * 9 + cellIndex;
            return (
              <SolvedNumberCell
                key={cellIndex}
                filledCells={initialFilledCells?.includes(boardCellIndex)}
              >
                <p> {cell !== null ? cell + 1 : ""}</p>
              </SolvedNumberCell>
            );
          })}
        </SolvedSudokuGrid>
      ))}
    </SolvedBoard>
  );
};

export default SolvedSudokuBoardTemplate;
