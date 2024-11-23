import styled from "styled-components";

interface ContainerProps {
  $isLargeScreen: boolean;
  $isOpen?: boolean;
}

export const AppContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const MainContent = styled.div<ContainerProps>`
  flex: 1;
  width: ${({ $isLargeScreen }) => ($isLargeScreen ? 'calc(100% - 350px)' : '100%')};
  margin-left: ${({ $isLargeScreen }) => ($isLargeScreen ? '350px' : '0')};
  padding-top: ${({ $isLargeScreen }) => ($isLargeScreen ? '0' : '1rem')};
  min-height: 100vh;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
`;

export const SidebarContainer = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ $isLargeScreen }) => ($isLargeScreen ? 1 : 1000)};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  
  ${({ $isLargeScreen }) =>
    !$isLargeScreen &&
    `
    pointer-events: none;
    & > * {
      pointer-events: auto;
    }
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const MenuToggleButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  background: ${({ theme }) => theme.colors.green_500};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  z-index: 1001;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
    outline-offset: 2px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;