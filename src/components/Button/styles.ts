import styled from "styled-components";
import { Theme } from "../../theme/types";
import { ButtonVariants } from "./types";

const getButtonStyles = (theme: Theme, variant?: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return `
          background: ${theme.colors.buttonBackground};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
        `;
    case "secondary":
      return `
          background: ${theme.colors.accent};;
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
        `;
    default:
      return "";
  }
};

export const StyledButton = styled.button<{ variant?: ButtonVariants }>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  margin: 10px;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  ${({ theme, variant }) => getButtonStyles(theme as Theme, variant)}
`;
