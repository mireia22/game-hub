import styled from "styled-components";

export const PopOut = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  align-items: center;
  > p {
    font-weight: bold;
  }

  > img {
    width: 14rem;
    border-radius: 10px;
  }

  > span {
    min-width: 3rem;
    min-height: 3rem;
    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
