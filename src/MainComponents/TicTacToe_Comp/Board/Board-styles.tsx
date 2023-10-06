import styled from "styled-components";

type GameBoardProps = {
  selectedwall: string;
};
export const GameBoard = styled.div<GameBoardProps>`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) =>
      props.selectedwall ||
      "https://i.etsystatic.com/11822629/r/il/03be88/2621035903/il_340x270.2621035903_fue9.jpg"});
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  &:after {
    content: "";
    flex: auto;
  }
`;

export const Cell = styled.button`
  width: calc(100% / 3);
  height: 100px;

  border: 2px solid var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  font-size: 4.5rem;

  filter: grayscale(0%);
`;
