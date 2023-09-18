import styled, { css } from "styled-components";

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SudokuSubgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid black;
`;

const NumberCellBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const focusedInputStyle = css`
  background-color: rgba(155, 88, 182, 0.5);
`;

export const NumberCell = styled(NumberCellBase)`
  > input {
    padding: 0.5rem;
    text-align: center;
    max-width: 2rem;
    border: none;
    font-weight: bold;
    ${(props) => props.readOnly && "background-color: #20e62089;"};

    &:focus {
      ${focusedInputStyle}
    }
  }
`;
