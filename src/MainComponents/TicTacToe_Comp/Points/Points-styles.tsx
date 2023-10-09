import styled from "styled-components";

export const PointsWrp = styled.div`
  color: var(--dark-brown);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 8rem;
  font-weight: bold;
  gap: 0.5rem;
  padding: 0.2rem;

  > h4 {
    color: var(--font);

    border-radius: 5px;
    background-color: rgba(87, 42, 12, 0.7);
  }

  @media (min-width: 576px) {
    width: 10rem;
    > h4 {
      font-size: 1.3rem;
    }
  }
`;

export const PointsValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  > p {
    font-size: 1.3rem;
  }

  > span {
    min-width: 1.5rem;
    min-height: 1.5rem;
    > svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 576px) {
    > p {
      font-size: 2rem;
    }
  }
`;
