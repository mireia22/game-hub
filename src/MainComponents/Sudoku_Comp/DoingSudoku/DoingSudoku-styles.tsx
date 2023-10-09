import styled from "styled-components";

export const AllSudoku = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0rem;
  gap: 0.5rem;
  @media (min-width: 675px) {
    display: grid;
    padding: 0rem;
  }
`;

export const SudokuWrp = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 675px) {
    > h1 {
      font-size: 2rem;
    }
  }
`;

export const SudokuButtonsWrp = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SolvedSudokuContainer = styled.article`
  width: 200px;
  height: 200px;

  @media (min-width: 675px) {
    grid-area: 1 / 2;
  }
`;
