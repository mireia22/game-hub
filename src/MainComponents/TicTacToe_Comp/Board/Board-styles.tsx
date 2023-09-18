import styled from "styled-components";

export const GameBoard = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cell = styled.button`
  width: 100px;
  height: 100px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  font-size: 2rem;
`;
