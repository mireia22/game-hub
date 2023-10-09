import styled from "styled-components";
import { SudokuSubgrid } from "../SudokuBoardTemplate/SudokuBoardTemplate-styles";

export const SolvedBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #6fd39dad;
`;

export const SolvedSudokuGrid = styled(SudokuSubgrid)``;

export const SolvedNumberCell = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  > p {
    font-size: 1rem;
  }
`;
