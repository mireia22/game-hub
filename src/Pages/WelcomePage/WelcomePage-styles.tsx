import styled from "styled-components";

export const WelcomeWrp = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - (36px + 47px));
`;

export const TextWrp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.6rem;
  justify-content: space-between;
  color: #284e84;
  margin-bottom: 4.5rem;
  > p {
    font-size: 0.9rem;
    color: #4b545e;
  }

  > a {
    background-color: #284e84;
    padding: 0.18rem;
    border-radius: 5px;
    color: #eef1eb;
    > span {
      font-weight: bold;
    }
  }
`;
