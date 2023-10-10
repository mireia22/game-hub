import styled from "styled-components";
import { fadeIn } from "../../TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe-styles";

export const IntroWrp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  color: var(--orange);

  > article {
    > p {
      padding: 0.5rem 2rem;
      color: var(--dark-brown);
      font-weight: bold;
      line-height: 1.8rem;
    }

    @media (min-width: 576px) {
      width: 30rem;
    }
  }
`;

export const ImageWrp = styled.article`
  height: 12rem;
  animation: ${fadeIn} 0.25s ease-in-out;

  > img {
    height: 100%;
    border-radius: 10px;
  }
`;
