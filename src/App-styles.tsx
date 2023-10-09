import { styled } from "styled-components";

export const AppWrp = styled.div<{ isdashboard: string }>`
  background-image: url(${({ isdashboard }) =>
    isdashboard === "true"
      ? "https://www.transparenttextures.com/patterns/asfalt-light.png"
      : "/assets/backgrounds/mobile-background-2.jpg"});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; // Center the background image
  background-color: ${({ isdashboard }) =>
    isdashboard === "true" ? "#ef8b20e4" : "transparent"};

  @media (min-width: 630px) {
    background-image: url(${({ isdashboard }) =>
      isdashboard === "true"
        ? "https://www.transparenttextures.com/patterns/asfalt-light.png"
        : "/assets/backgrounds/desktop-background.jpg"});
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
