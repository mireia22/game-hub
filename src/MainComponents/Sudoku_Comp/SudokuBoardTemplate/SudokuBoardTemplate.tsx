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

    if (updateBoard) {
      if (truncatedValue === "") {
        // Handle empty input by converting it to null
        updateBoard(subgridIndex * 9 + cellIndex, null);
      } else if (/^[1-9]$/.test(truncatedValue)) {
        // Valid input, update the board
        updateBoard(subgridIndex * 9 + cellIndex, +truncatedValue);
      }
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
                  type="text"
                  inputMode="numeric"
                  value={cell !== null ? String(cell + 1) : ""}
                  onChange={(e) => handleInput(e, subgridIndex, cellIndex)}
                  readOnly={readOnly}
                />
                <img
                  src="/assets/sudoku/climbing-hold.jpg"
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
