import { styled } from "styled-components";

export const MainButton = styled.button`
  padding: 0.3rem;
  border-radius: 5px;
  background-color: #d64343;
  cursor: pointer;
  color: white;
  border: none;

  ${({ variant }) =>
    variant === "return" &&
    `
    background-color: transparent;
    position: fixed;
    color: black;
    left: 1rem;
    bottom: 2.5rem;
  `}
`;
