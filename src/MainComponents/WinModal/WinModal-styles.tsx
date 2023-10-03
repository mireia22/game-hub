import styled from "styled-components";

export const PopOut = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const PopOutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 0.8rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  align-items: center;
  justify-content: center;

  > img {
    width: 14rem;
  }
`;
