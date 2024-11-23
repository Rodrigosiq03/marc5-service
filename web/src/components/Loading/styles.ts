import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  $isSidebar?: boolean;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div<LoadingProps>`
  position: ${({ $isSidebar }) => $isSidebar ? 'relative' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 9999;
  padding: ${({ $isSidebar }) => $isSidebar ? '20px' : '0'};
  height: ${({ $isSidebar }) => $isSidebar ? '100vh' : '100%'};
  width: ${({ $isSidebar }) => $isSidebar ? '350px' : '100%'};

  @media (min-width: 1280px) {
    position: ${({ $isSidebar }) => $isSidebar ? 'relative' : 'absolute'};
  }
`;

export const LoadingSpinner = styled.svg`
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;

  circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
    stroke: url(#gradient);
  }
`;

export const LoadingText = styled.span<LoadingProps>`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ $isSidebar, theme }) => 
    $isSidebar ? theme.fontsSizes.colors.white : theme.colors.green_500};
  font-weight: 500;
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
`;