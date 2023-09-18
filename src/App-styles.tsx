import { styled } from "styled-components";

export const AppWrp = styled.div``;
export const MainHeader = styled.header`
  padding: 0.5rem;
  text-align: center;
  background-color: #010208;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
  color: var(--font);
`;
export const MainWrp = styled.main`
  display: flex;
  min-height: calc(100vh - 5.5rem);
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const MainFooter = styled.footer`
  text-align: center;
  padding: 0.5rem;
  color: var(--font);
  background-color: #010208;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
`;
