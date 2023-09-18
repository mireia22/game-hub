import { styled } from "styled-components";

export const HomeWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 0.6rem;
`;

export const GameCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 10rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 10px;
  > h3 {
    color: #000101;
    text-transform: uppercase;
  }
  > img {
    max-width: 6rem;
  }
`;
