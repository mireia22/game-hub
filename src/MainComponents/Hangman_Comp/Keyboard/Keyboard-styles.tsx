import styled from "styled-components";

export const KeyboardWrp = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 320px;
`;
export const Letter = styled.button`
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;
  border-radius: 5px;
  border: 2px solid rgba(1, 1, 1, 0.5);
`;
