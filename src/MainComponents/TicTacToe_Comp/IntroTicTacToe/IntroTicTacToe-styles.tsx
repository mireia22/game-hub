import styled from "styled-components";

export const ChooseWallSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  > article {
    > h4 {
      color: #38444e;
      font-size: 1.2rem;
    }
    > p {
      line-height: 1.8rem;
      padding: 0rem 2rem;
    }
  }
`;

export const ClimbingWallsWrp = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

export const WallImageContainer = styled.div`
  width: 9em;
  height: rem;
  text-align: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: contain;
  }

  > h4 {
    color: #38444e;
  }
`;
