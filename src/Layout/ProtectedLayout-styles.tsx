import styled from "styled-components";

export const ProtectedNavWrp = styled.nav`
  width: 100%;

  .climb-icon {
    font-size: 2rem;
    transform: scaleX(-1);
    color: var(--font);
  }
`;

export const LinksWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link-label {
    transition: color 0.2s;
    text-decoration: none;
    color: var(--font);

    &.active-link {
      color: var(--orange);
      transform: scale(1.1);
      font-weight: bold;
    }

    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: var(--orange);
      transform: scale(1.1);
      font-weight: bold;
    }
  }
`;
