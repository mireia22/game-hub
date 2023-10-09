import styled from "styled-components";

export const WelcomeWrp = styled.section`
  padding: 0.5rem 1rem;
  min-height: calc(100vh - (36px + 48px));
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 3rem;
  align-items: end;
  font-weight: bold;
  color: var(--font);

  > article > h1 {
    font-size: 2rem;
  }

  @media (min-width: 630px) {
    text-align: center;

    color: var(--dark-orange);

    > article > h1 {
      font-size: 3rem;
      margin-right: 4rem;
    }
  }

  @media (min-width: 784px) {
    text-align: center;

    color: var(--dark-orange);

    > article > h1 {
      font-size: 3rem;
      margin-right: 12rem;
    }
  }
`;

export const LinkWrp = styled.article`
  background-color: var(--dark-brown);

  padding: 0.18rem;
  text-align: center;
  border-radius: 5px;
  width: 6rem;
  border: 2px solid var(--dark-orange);

  > a {
    color: var(--font);
    cursor: pointer;
  }
  @media (min-width: 630px) {
    margin-right: 9rem;
  }
  @media (min-width: 784px) {
    margin-right: 17rem;
  }
`;

export const PWrp = styled.article`
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: end;
  color: var(--font);
  @media (min-width: 630px) {
    text-align: center;
    color: black;
    margin-right: 5.5rem;
  }
  @media (min-width: 784px) {
    margin-right: 13.5rem;
  }
`;
