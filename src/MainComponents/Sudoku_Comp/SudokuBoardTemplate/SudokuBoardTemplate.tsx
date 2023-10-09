import { SudokuBoardTemplateProps } from "../../../Types/Sudoku-types";
import { Board, SudokuSubgrid, NumberCell } from "./SudokuBoardTemplate-styles";

const SudokuBoardTemplate = ({
  subgrids,
  updateBoard,
  initialFilledCells,
}: SudokuBoardTemplateProps) => {
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    subgridIndex: number,
    cellIndex: number
  ) => {
    const inputValue = e.target.value;
    const truncatedValue = inputValue.charAt(0);
    e.target.value = truncatedValue;

    if (+inputValue < 1) {
      // Check for empty input
      updateBoard(subgridIndex * 9 + cellIndex, null); // Convert to null
    } else if (/^[1-9]$/.test(inputValue)) {
      updateBoard(subgridIndex * 9 + cellIndex, +inputValue);
    }
  };

  return (
    <Board>
      {subgrids?.map((subgrid: number[], subgridIndex: number) => (
        <SudokuSubgrid key={subgridIndex}>
          {subgrid.map((cell, cellIndex) => {
            const boardCellIndex = subgridIndex * 9 + cellIndex;
            const readOnly = initialFilledCells?.includes(boardCellIndex);

            return (
              <NumberCell key={cellIndex} readOnly={readOnly}>
                <input
                  type="number"
                  value={cell !== null ? cell + 1 : ""}
                  onChange={(e) => handleInput(e, subgridIndex, cellIndex)}
                  readOnly={readOnly}
                />
                <img
                  src="/public/assets/sudoku/climbing-hold.jpg"
                  alt="climbing-hold"
                  loading="lazy"
                />
              </NumberCell>
            );
          })}
        </SudokuSubgrid>
      ))}
    </Board>
  );
};

export default SudokuBoardTemplate;
