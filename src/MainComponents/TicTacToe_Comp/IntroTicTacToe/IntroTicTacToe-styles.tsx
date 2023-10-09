import styled from "styled-components";

export const ChooseWallSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
  color: var(--dark-brown);
  > article {
    > h2 {
      color: var(--font);
    }
    > p {
      font-weight: bold;
      line-height: 1.8rem;
    }

    @media (min-width: 576px) {
      width: 40rem;
    }
  }
`;

export const ClimbingWallsWrp = styled.ul`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const WallImageContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--dark-brown);
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  > h4 {
    color: var(--orange);
  }

  > img {
    width: 100%;
    height: 7rem;
    border-radius: 10px;
    object-fit: contain;
    border-radius: 10px;
  }

  @media (min-width: 576px) {
    width: 12rem;
    height: 12rem;
    > h4 {
      font-size: 1.2rem;
    }
  }
`;
