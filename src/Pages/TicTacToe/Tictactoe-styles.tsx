import styled from "styled-components";

export const TicTacToeWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const Token = styled.div`
  display: flex;
  align-items: center;
  .green-icon {
    color: #8fd60c;
    background: rgb(6, 54, 2);
    border-radius: 50%;
  }

  .red-icon {
    color: red;
    background: rgb(80, 9, 3);
    border-radius: 50%;
    transform: rotateY(180deg);
  }
`;
