export const divideIntoSquares = (board: number[][]) => {
  const squares = [];
  if (board) {
    for (let i = 0; i < 9; i++) {
      const square = board.slice(i * 9, i * 9 + 9);
      squares.push(square);
    }
    return squares;
  }
};
