import React from "react";
import { GameBoard, Row, Cell } from "./Board-styles";

const Board = ({ board, updateBoard, winningCells }) => {
  return (
    <GameBoard>
      {board.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, colIndex) => {
            const isWinningCell = winningCells.some(
              ([winningRow, winningCol]) =>
                winningRow === rowIndex && winningCol === colIndex
            );
            return (
              <Cell
                onClick={() => updateBoard(rowIndex, colIndex)}
                key={colIndex}
                style={isWinningCell ? { background: "yellow" } : {}}
              >
                {cell}
              </Cell>
            );
          })}
        </Row>
      ))}
    </GameBoard>
  );
};

export default Board;
