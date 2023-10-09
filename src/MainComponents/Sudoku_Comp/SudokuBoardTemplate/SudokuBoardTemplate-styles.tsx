import styled from "styled-components";

type NumberCellProps = {
  readOnly?: boolean;
};
export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 311px;
  height: 311px;

  @media (min-width: 576px) {
    width: 400px;
    height: 400px;
  }
`;

export const SudokuSubgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid black;
`;

const NumberCellBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const NumberCell = styled(NumberCellBase)<NumberCellProps>`
  > input {
    padding: 0.5rem;
    position: absolute;
    text-align: center;
    width: 2rem;
    border: none;
    font-weight: bold;

    ${(props) => props.readOnly && "background-color: #6fd39dad"};

    @media (min-width: 576px) {
      width: calc(44px - 1px);
      height: calc(44px - 1px);
      font-size: 1.5rem;
    }
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;
