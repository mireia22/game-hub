import styled from "styled-components";

export const DoingHangmanWrp = styled.section`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.5rem;
  > article {
    > p {
      font-weight: bold;
    }
  }
`;

export const SequenceAndKeyboardWrp = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  > p {
    font-size: 0.8rem;
  }
`;

export const RemainingAttemptsWrp = styled.article`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 0.5rem;
`;
