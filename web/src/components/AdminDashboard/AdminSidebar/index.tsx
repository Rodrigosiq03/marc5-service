import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Users,
  Books,
  VideoCamera,
  Trophy,
  Buildings,
  ChartBar,
  GraduationCap,
  Gear,
  Bell,
  SignOut,
  Moon,
  Sun,
  List
} from '@phosphor-icons/react';
import {
  SidebarContainer,
  Logo,
  AdminInfo,
  AdminAvatar,
  AdminDetails,
  AdminTitle,
  AdminSubtitle,
  NavSection,
  SectionTitle,
  MenuItem,
  MenuText,
  NotificationBadge,
  LogoutSection,
  LogoutButton,
  ThemeSwitcher,
  MenuToggleButton
} from './styles';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleTheme: () => void;
}

const AdminSidebar: React.FC<Props> = ({ isOpen, setIsOpen, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1280;
      setIsLargeScreen(newIsLargeScreen);
      if (newIsLargeScreen) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isLargeScreen && (
        <MenuToggleButton 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <List size={24} weight="bold" />
        </MenuToggleButton>
      )}
      
      <SidebarContainer isOpen={isOpen}>
        <ThemeSwitcher>
          <button
            onClick={toggleTheme}
            aria-label={`Alternar tema - Tema atual: ${theme?.title}`}
          >
            {theme?.title === 'light' ? (
              <Moon size={24} weight="bold" />
            ) : (
              <Sun size={24} weight="bold" />
            )}
          </button>
        </ThemeSwitcher>
        <Logo>
          <img src="/marc5-white.png" alt="Logo MARC5" />
        </Logo>

        <AdminInfo>
          <AdminAvatar>
            <Gear size={24} weight="bold" />
          </AdminAvatar>
          <AdminDetails>
            <AdminTitle>Portal Admin</AdminTitle>
            <AdminSubtitle>Sistema de Gestão</AdminSubtitle>
          </AdminDetails>
        </AdminInfo>

        <NavSection>
          <SectionTitle>Principal</SectionTitle>
          <MenuItem
            active={activeSection === 'dashboard'}
            onClick={() => handleNavigation('dashboard')}
          >
            <ChartBar size={24} weight="bold" />
            <MenuText>Dashboard</MenuText>
            <NotificationBadge>2</NotificationBadge>
          </MenuItem>
        </NavSection>

        <NavSection>
          <SectionTitle>Gestão de Pessoas</SectionTitle>
          <MenuItem
            active={activeSection === 'employees'}
            onClick={() => handleNavigation('employees')}
          >
            <Users size={24} weight="bold" />
            <MenuText>Colaboradores</MenuText>
          </MenuItem>
          <MenuItem
            active={activeSection === 'ranking'}
            onClick={() => handleNavigation('ranking')}
          >
            <Trophy size={24} weight="bold" />
            <MenuText>Ranking</MenuText>
          </MenuItem>
        </NavSection>

        <NavSection>
          <SectionTitle>Conteúdo</SectionTitle>
          <MenuItem
            active={activeSection === 'courses'}
            onClick={() => handleNavigation('courses')}
          >
            <Books size={24} weight="bold" />
            <MenuText>Cursos</MenuText>
          </MenuItem>
          <MenuItem
            active={activeSection === 'formations'}
            onClick={() => handleNavigation('formations')}
          >
            <GraduationCap size={24} weight="bold" />
            <MenuText>Formações</MenuText>
          </MenuItem>
          <MenuItem
            active={activeSection === 'videos'}
            onClick={() => handleNavigation('videos')}
          >
            <VideoCamera size={24} weight="bold" />
            <MenuText>Vídeo Aulas</MenuText>
          </MenuItem>
        </NavSection>

        <NavSection>
          <SectionTitle>Configurações</SectionTitle>
          <MenuItem
            active={activeSection === 'company'}
            onClick={() => handleNavigation('company')}
          >
            <Buildings size={24} weight="bold" />
            <MenuText>Perfil Empresa</MenuText>
          </MenuItem>
          <MenuItem
            active={activeSection === 'notifications'}
            onClick={() => handleNavigation('notifications')}
          >
            <Bell size={24} weight="bold" />
            <MenuText>Notificações</MenuText>
            <NotificationBadge>3</NotificationBadge>
          </MenuItem>
        </NavSection>

        <LogoutSection>
          <LogoutButton>
            <SignOut size={24} weight="bold" />
            <MenuText>Sair do Sistema</MenuText>
          </LogoutButton>
        </LogoutSection>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;