import styled from "styled-components";

export const TurnWrp = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  > p {
    font-size: 1.5rem;
    font-weight: bold;
    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }

  > span {
    min-width: 2rem;
    min-height: 2rem;
    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
