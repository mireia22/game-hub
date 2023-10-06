import { GiCarabiner } from "react-icons/gi";
import styled from "styled-components";

type TokenProps = {
  className: string;
};
const Token = styled.p<TokenProps>`
  display: flex;
  align-items: center;
  .green-icon {
    color: #8fd60c;
    background: rgb(19, 101, 11);
    border-radius: 50%;
  }

  .red-icon {
    color: red;
    background: rgb(108, 16, 7);
    border-radius: 50%;
    transform: rotateY(180deg);
  }
`;
export const createToken = (className: string) => (
  <Token className={className}>
    <GiCarabiner className={className} />
  </Token>
);
