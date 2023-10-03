import { styled } from "styled-components";

export const AppWrp = styled.div`
  background-image: url(${(props) =>
    props.isDashboard ? "none" : "/assets/mobile-background-2.jpg"});
  background-size: cover;
  background-color: ${(props) =>
    props.isDashboard ? "#a8a592" : "transparent"};

  @media (min-width: 400px) {
    background-image: url(${(props) =>
      props.isDashboard ? "none" : "/assets/welcome-background.png"});
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  text-align: center;
  background-color: #010208;
  color: var(--font);
`;
export const MainWrp = styled.main`
  display: flex;
  min-height: calc(100vh - (36px + 47px));
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
