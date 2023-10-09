import styled from "styled-components";

export const WelcomeWrp = styled.section`
  padding: 1rem 2rem;
  min-height: calc(100vh - (36px + 48px));
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  color: var(--dark-brown);
  > article > h1 {
    font-size: 2.5rem;
  }
  @media (min-width: 445px) {
    text-align: start;
    align-items: start;
  }

  @media (min-width: 768px) {
    padding: 0.2rem 2rem;
    gap: 0.3rem;
  }
`;

export const LinkWrp = styled.article`
  background-color: var(--dark-brown);
  margin-right: 6rem;

  padding: 0.18rem;
  text-align: center;
  border-radius: 5px;
  width: 6rem;
  border: 2px solid var(--dark-orange);

  > a {
    color: var(--font);
    cursor: pointer;
  }
`;

export const PWrp = styled.article`
  margin-top: 20vh;
  margin-right: 28vw;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
  color: var(--dark-orange);
  @media (min-width: 445px) {
    margin-top: 0vh;
    text-align: start;
  }
`;
