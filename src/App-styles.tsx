import { styled } from "styled-components";

export const AppWrp = styled.div<{ isdashboard: string }>`
  background-image: url(${({ isdashboard }) =>
    isdashboard === "true"
      ? "https://www.transparenttextures.com/patterns/subtle-white-feathers.png"
      : "/assets/backgrounds/mobile-background-2.jpg"});

  background-size: cover;

  background-color: ${({ isdashboard }) =>
    isdashboard === "true" ? "#ef8c20" : "transparent"};

  @media (min-width: 576px) {
    background-image: url(${({ isdashboard }) =>
      isdashboard === "true"
        ? "https://www.transparenttextures.com/patterns/subtle-white-feathers.png"
        : "/assets/backgrounds/welcome-background.jpg"});
  }
`;

export const MainHeader = styled.header`
  display: flex;
  padding: 0.5rem;
  background-color: #010208;
  color: var(--font);

  .climb-icon {
    font-size: 2rem;
    transform: scaleX(-1);
    color: var(--font);
  }

  > nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
export const MainWrp = styled.main`
  display: flex;
  min-height: calc(100vh - (36px + 52px));
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

export const MainFooter = styled.footer`
  text-align: center;
  padding: 0.5rem;
  color: var(--font);
  background-color: #010208;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
`;
