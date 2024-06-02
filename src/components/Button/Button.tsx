import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";
import { ButtonVariants } from "./types";

interface Props {
  children?: ReactNode;
  onClick:React.MouseEventHandler<HTMLButtonElement>;
  disabled:boolean ;
  ariaLabel: string;
  variant?: ButtonVariants;
}

export const Button: FC<Props> = ({ children,onClick,disabled=false, ariaLabel, variant }) => (
  <StyledButton aria-label={ariaLabel} variant={variant} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);
