import styled from "styled-components";

interface ContainerProps {
  $isLargeScreen: boolean;
}

export const AppContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
  position: relative;
`;

export const MainContent = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  transition: margin-left 0.3s ease-in-out;
`;

export const SidebarContainer = styled.aside<ContainerProps>`
  position: ${({ $isLargeScreen }) => $isLargeScreen ? 'relative' : 'fixed'};
  max-width: 350px;
  height: 100vh;
  width: 100%;
  z-index: 1000;
`;