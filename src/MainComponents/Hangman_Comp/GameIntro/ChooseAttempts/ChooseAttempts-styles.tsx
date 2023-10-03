import styled from "styled-components";

export const ChooseAttemptsUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1rem;
`;

export const ChooseAttemptsButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.3rem;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  border: none;
  height: 2rem;
  width: 5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.attempts) {
      case 3:
        return "#e2463bd6";
      case 5:
        return "#ffeb54d6";
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