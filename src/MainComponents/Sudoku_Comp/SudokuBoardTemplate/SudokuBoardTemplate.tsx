import { Board, SudokuSubgrid, NumberCell } from "./SudokuBoardTemplate-styles";

const SudokuBoardTemplate = ({ subgrids, updateBoard, initialFilledCells }) => {
  const handleInput = (e, subgridIndex, cellIndex) => {
    const inputValue = e.target.value;

    if (inputValue.length > 1) {
      const truncatedValue = inputValue.charAt(0);
      e.target.value = truncatedValue;
    }
    if (/^[1-9]$/.test(inputValue)) {
      updateBoard(subgridIndex * 9 + cellIndex, inputValue);
    } else {
      updateBoard(subgridIndex * 9 + cellIndex, null);
    }
  };

  return (
    <Board>
      {subgrids?.map((subgrid, subgridIndex) => (
        <SudokuSubgrid key={subgridIndex}>
          {subgrid.map((cell, cellIndex) => {
            const boardCellIndex = subgridIndex * 9 + cellIndex;
            return (
              <NumberCell
                key={cellIndex}
                readOnly={initialFilledCells?.includes(boardCellIndex)}
              >
                <input
                  type="number"
                  value={cell !== null ? cell + 1 : ""}
                  onChange={(e) => handleInput(e, subgridIndex, cellIndex)}
                  readOnly={initialFilledCells?.includes(boardCellIndex)}
                />
                <img
                  src="/public/assets/sudoku/climbing-hold.png"
                  alt="climbing-hold"
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
