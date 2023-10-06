import styled from "styled-components";

export const WelcomeWrp = styled.section`
  padding: 1.5rem 1rem;
  min-height: calc(100vh - (36px + 48px));
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: var(--dark-brown);
`;
export const TitleWrp = styled.article`
  font-size: 2rem;
  position: relative;
  text-align: end;
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
`;

export const PWrp = styled.article`
  font-size: 0.9rem;
  margin-top: 8rem;
  line-height: 2rem;
  text-align: start;
  color: var(--dark-orange);
`;
