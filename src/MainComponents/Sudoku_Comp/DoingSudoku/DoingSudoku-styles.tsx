import styled from "styled-components";

export const SudokuWrp = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;

  @media (min-width: 576px) {
    display: grid;
    min-width: 100%;
    grid-template-columns: repeat(2fr, auto);
  }
`;

export const SudokuButtonsWrp = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 576px) {
    grid-area: 2 / 1;
  }
`;

export const SolvedSudokuContainer = styled.section`
  width: 200px;
  height: 200px;

  @media (min-width: 576px) {
    grid-area: 1 / 2;
  }
`;
