import styled from "styled-components";

export const IntroWrp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  height: 100%;

  > article {
    > p {
      padding: 0rem 2rem;
      line-height: 1.8rem;
    }
  }
`;

export const ImageWrp = styled.div`
  width: 100%;
  height: 12rem;
  > img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;
