import { BoardProps } from "../../../Types/TicTacToe-types";
import { GameBoard, Row, Cell } from "./Board-styles";

const Board: React.FC<BoardProps> = ({
  board,
  updateBoard,
  winningCells,
  xToken,
  oToken,
  selectedWall,
}) => {
  console.log("winning cells", winningCells);
  return (
    <GameBoard selectedwall={selectedWall.image}>
      {board.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, colIndex) => {
            const isWinningCell = winningCells.some(
              ([winningRow, winningCol]) =>
                winningRow === rowIndex && winningCol === colIndex
            );

            const token = cell === "X" ? xToken : cell === "O" ? oToken : null;

            return (
              <Cell
                onClick={() => updateBoard(rowIndex, colIndex)}
                key={colIndex}
                style={
                  isWinningCell
                    ? { backdropFilter: "blur(10px)", background: "#151514c2" }
                    : {}
                }
              >
                {token}
              </Cell>
            );
          })}
        </Row>
      ))}{" "}
    </GameBoard>
  );
};

export default Board;
