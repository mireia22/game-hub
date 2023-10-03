import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const RiddlesImgWrp = styled.div`
  width: 10rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;

  > img {
    object-fit: contain;
    width: 100%;
    animation: ${fadeIn} 0.4s ease-in-out;
  }
`;
