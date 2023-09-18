import { MainButton } from "./Button-styles";
import React from "react";
type Props = {
  children: any;
  variant: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ children, onClick, variant }: Props) => {
  return (
    <MainButton onClick={onClick} variant={variant}>
      {children}
    </MainButton>
  );
};

export default Button;
