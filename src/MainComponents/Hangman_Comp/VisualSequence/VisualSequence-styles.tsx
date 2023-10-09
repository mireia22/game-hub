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
  > img {
    width: 100%;
    animation: ${fadeIn} 0.4s ease-in-out;
    border-radius: 50%;
  }
`;
