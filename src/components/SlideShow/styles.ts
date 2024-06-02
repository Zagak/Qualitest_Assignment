import styled from "styled-components";

export const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 60px;
`;

export const LoadingMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
