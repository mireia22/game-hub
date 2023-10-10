import { styled } from "styled-components";
import { fadeIn } from "../../MainComponents/TicTacToe_Comp/IntroTicTacToe/IntroTicTacToe-styles";

export const HomeWrp = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 0.6rem;
  color: var(--orange);

  @media (min-width: 576px) {
    flex-direction: column;
  }
`;

export const HomeTextWrp = styled.article`
  gap: 0.5rem;
  > h2,
  h3 {
    color: var(--dark-brown);
  }

  @media (min-width: 576px) {
    h1 {
      margin: 1rem 0rem;
      font-size: 2rem;
    }
    h3,
    h2 {
      margin: 1rem 0rem;
      font-size: 1.5rem;
    }
  }
`;

export const HomeUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 2rem;
`;

export const GameCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 12rem;
  background: var(--dark-brown);
  border: 3px solid var(--dark-orange);
  padding: 1rem 0.5rem;
  border-radius: 10px;
  justify-content: space-between;
  animation: ${fadeIn} 0.25s ease-in-out;

  > h3 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  > p {
    color: var(--font);
  }
  > img {
    max-width: 6rem;
    border-radius: 5px;
  }
`;
