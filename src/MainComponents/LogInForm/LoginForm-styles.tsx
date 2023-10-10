import styled from "styled-components";
import { fadeIn } from "../../MainComponents/TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe-styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  max-width: 210px;
  padding: 1.5rem 1rem;
  background: rgba(87, 42, 12, 0.85);
  border: 3px solid rgb(87, 42, 12);
  border-radius: 5px;
  backdrop-filter: blur(6px);
  transition: background-color 0.3s ease;
  color: var(--font);
  letter-spacing: 1px;
  animation: ${fadeIn} 0.25s ease-in-out;

  &:hover {
    background-color: rgba(87, 42, 12, 0.95);
  }

  > article {
    > p {
      font-size: 0.8rem;
      color: var(--orange);
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
`;
