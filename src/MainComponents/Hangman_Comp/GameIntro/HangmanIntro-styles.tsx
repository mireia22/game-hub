import styled from "styled-components";

export const IntroWrp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  color: var(--font);

  > article {
    > p {
      padding: 0.5rem 2rem;
      color: var(--dark-brown);
      font-weight: bold;
      line-height: 1.8rem;
    }

    @media (min-width: 576px) {
      width: 30rem;
    }
  }
`;

export const ImageWrp = styled.article`
  height: 12rem;
  > img {
    height: 100%;
    border-radius: 10px;
  }
`;
