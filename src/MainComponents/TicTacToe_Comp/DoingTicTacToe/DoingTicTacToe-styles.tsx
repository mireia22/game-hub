import styled from "styled-components";
export const PlayingWrp = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  > article {
    > h2 {
      color: var(--orange);
    }
  }
  @media (min-width: 576px) {
    display: grid;
    gap: 2rem;
    > article {
      > h2 {
        font-size: 2rem;
      }
    }
  }
`;

export const ButtonsWrp = styled.article`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 576px) {
    grid-column: span 2;
    justify-self: center;
  }
`;
