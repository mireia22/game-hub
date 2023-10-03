import { styled } from "styled-components";

export const HomeWrp = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  padding: 0.6rem;
`;

export const GameCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(6px);
  width: 12rem;
  min-width: 10rem;
  text-align: center;
  background: #38444e;
  border: 2px solid rgba(168, 165, 146, 0.5);

  padding: 0.5rem;
  border-radius: 10px;
  > h3 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  > img {
    max-width: 6rem;
  }

  > p {
    color: white;
  }
`;
