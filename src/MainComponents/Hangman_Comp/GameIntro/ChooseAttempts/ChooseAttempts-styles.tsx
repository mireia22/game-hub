import styled from "styled-components";

export const ChooseAttemptsUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

type ChooseAttemptsButtonProps = {
  $attempts: number;
};

export const ChooseAttemptsButton = styled.button<ChooseAttemptsButtonProps>`
  display: flex;
  gap: 1rem;
  color: var(--font);
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  border: none;
  width: 5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.$attempts) {
      case 3:
        return "#e2463ba3";
      case 5:
        return "#dfbc0ed5";
      case 10:
        return "#4a946cd6";
      default:
        return "white";
    }
  }};
`;

export const AttemptsImg = styled.img`
  height: 2rem;
`;
