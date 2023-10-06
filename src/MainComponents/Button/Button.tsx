import { MainButton } from "./Button-styles";
import React from "react";
type Props = {
  type?: string;
  children: any;
  variant: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ children, onClick, variant }: Props) => {
  return (
    <MainButton onClick={onClick} className={variant}>
      {children}
    </MainButton>
  );
};

export default Button;
