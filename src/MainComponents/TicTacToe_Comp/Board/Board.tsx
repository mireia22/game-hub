import { BoardProps } from "../../../Types/TicTacToe-types";
import { createToken } from "../../../Utils/Tictactoe-utils/createTokens";
import { GameBoard, Row, Cell } from "./Board-styles";

const Board: React.FC<BoardProps> = ({
  board,
  updateBoard,
  winningCells,
  selectedWall,
}) => {
  const xToken = createToken("green-icon");
  const oToken = createToken("red-icon");

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

            const cellStyle = isWinningCell
              ? { backdropFilter: "blur(10px)", background: "#ef8b206e" }
              : {};

            return (
              <Cell
                onClick={() => updateBoard(rowIndex, colIndex)}
                key={colIndex}
                style={cellStyle}
              >
                {token}
              </Cell>
            );
          })}
        </Row>
      ))}
    </GameBoard>
  );
};

export default Board;
