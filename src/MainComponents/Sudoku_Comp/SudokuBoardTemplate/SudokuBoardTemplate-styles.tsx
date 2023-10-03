import styled from "styled-components";

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  position: relative;
`;

export const NumberCell = styled(NumberCellBase)`
  > input {
    padding: 0.5rem;
    position: absolute;
    z-index: 2;
    text-align: center;
    max-width: 2rem;
    border: none;
    font-weight: bold;
    ${(props) => props.readOnly && "background-color: #4a946cae;"};
  }

  > img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }
`;
