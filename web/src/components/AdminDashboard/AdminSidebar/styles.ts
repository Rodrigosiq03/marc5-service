import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
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
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    transform: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Logo = styled.div`
  margin: 1.5rem 0 2rem;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 200px;
  }
`;

export const AdminInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

export const AdminAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdminDetails = styled.div`
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const AdminTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  margin: 0;
`;

export const AdminSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  opacity: 0.7;
  margin: 0;
`;

export const NavSection = styled.div`
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled.h4`
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  text-transform: uppercase;
  opacity: 0.7;
  margin: 1rem 0 0.5rem;
  padding: 0 0.5rem;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styled.button<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ active }) => active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuText = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const NotificationBadge = styled.span`
  background: ${({ theme }) => theme.colors.red_500};
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  margin-left: auto;
`;

export const LogoutSection = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }
`;

export const MenuToggleButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  background: ${({ theme }) => theme.colors.green_500};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  padding: 1px;
  border-radius: 4px;
  z-index: 1001;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
  }

  @media (min-width: 1280px) {
    display: none;
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
      opacity: 0.8;
    }
  }
`;