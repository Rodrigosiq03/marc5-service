import styled from "styled-components";


interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.green_500};
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  @media (max-width: 1024px) {
    width: 80%;
    max-width: 300px;
  }
`;

export const ThemeSwitcher = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.fontsSizes.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: regular;

    &:hover {
      color: ${({ theme }) => theme.colors.icons.theme_switcher_hover};
    }
  }

`;

export const Logo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 250px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  background-color: ${({ theme }) => theme.fontsSizes.colors.white};
  border: 1px solid ${({ theme }) => theme.fontsSizes.colors.black};
`;

export const UserDetailsContainer = styled.div`
  flex: 1;
`;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const UserName = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const UserLevel = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const UserProgressBar = styled.div`
  background-color: ${({ theme }) => theme.fontsSizes.colors.white};
  height: 0.7rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 0.5px solid ${({ theme }) => theme.fontsSizes.colors.black};
  overflow: hidden;
  margin-bottom: 4px;
`;

interface ProgressProps {
  width: number;
}

export const Progress = styled.div<ProgressProps>`
  background-color: ${({ theme }) => theme.colors.green_300};
  height: 100%;
  width: ${({ width }) => width}%;
`;

export const ProgressText = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  text-align: center;
`;

export const Menu = styled.nav`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 350px); /* Ajusta a altura considerando os outros elementos */
  gap: 4rem;
  @media (max-height: 600px) {
    height: auto;
  }
`;

export const MenuItem = styled.a`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  cursor: pointer;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  opacity: ${props => props['aria-selected'] ? '1' : '0.6'};
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  text-align: center;

  &:hover, &:focus {
    opacity: 1;
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const MenuToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  padding: 8px;
  border-radius: 4px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
    outline-offset: 2px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;