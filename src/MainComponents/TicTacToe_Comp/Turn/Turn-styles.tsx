import styled from "styled-components";

export const TurnWrp = styled.div`
  display: flex;
  width: 100%;
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
`;
