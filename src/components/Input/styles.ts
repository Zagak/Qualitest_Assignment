import styled from "styled-components";

export const StyledInput = styled.input`
  width: 50%;
  min-width: 200px;
  max-width: 400px;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const StyledNumberInput = styled.input`
  width: 60px;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;
  margin-right: 10px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
