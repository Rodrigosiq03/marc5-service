import React from 'react';
import { LoadingContainer, LoadingSpinner, LoadingText } from './styles';

interface LoadingProps {
  isLoading?: boolean;
  isSidebar?: boolean;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ isLoading = true, isSidebar = false, message = "Carregando" }) => {
  if (!isLoading) return null;

  return (
    <LoadingContainer $isSidebar={isSidebar}>
      <LoadingSpinner viewBox="0 0 50 50">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2ecc71" />
            <stop offset="50%" stopColor="#27ae60" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>
        </defs>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </LoadingSpinner>
      <LoadingText $isSidebar={isSidebar}>{message}</LoadingText>
    </LoadingContainer>
  );
};

export { Loading };