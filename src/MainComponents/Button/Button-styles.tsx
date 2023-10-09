import { styled } from "styled-components";

export const MainButton = styled.button`
  padding: 0.3rem;
  border-radius: 5px;
  background-color: #d64343;
  cursor: pointer;
  color: white;
  border: none;

  &.return {
    background-color: transparent;
    position: fixed;
    color: var(--dark-brown);
    right: 1rem;
    bottom: 2.5rem;
    font-size: 1.2rem;
    z-index: 2;
  }

  &.reset {
    background-color: black;
  }

  &.start {
    width: 5rem;
    margin: 0 auto;
  }

  &.log {
    background-color: rgba(239, 140, 32, 0.7);
    color: var(--font);
    border: 2px solid rgba(154, 77, 17, 0.7);
    font-weight: bold;
  }

  &.play {
    background-color: var(--orange);
    color: var(--dark-brown);
    padding: 0.2rem 0.5rem;

    font-weight: bold;
    border: 2px solid var(--medium-brown);
  }
`;
