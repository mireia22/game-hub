import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 1.5rem 1rem;
  background: rgba(75, 84, 94, 0.85);
  border: 2px solid rgba(75, 84, 94, 0.5);
  border-radius: 5px;
  backdrop-filter: blur(6px);

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(75, 84, 94, 0.95);
  }

  > h2 {
    padding: 0.2rem;
    color: white;
    border-radius: 5px;
    letter-spacing: 1px;
  }

  > input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
  }
`;
