import styled from 'styled-components';

export const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const AdminContent = styled.main<{ $isLargeScreen: boolean }>`
  flex: 1;
  padding: 2rem;
  transition: margin-left 0.3s ease;
  min-height: 100vh;
  
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;