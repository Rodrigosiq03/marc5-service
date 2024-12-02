import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
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

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  notifications?: number;
}

interface NavSectionConfig {
  title: string;
  items: NavItem[];
}

const AdminSidebar: React.FC<Props> = ({ isOpen, setIsOpen, toggleTheme }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const navSections: NavSectionConfig[] = [
    {
      title: 'Principal',
      items: [
        {
          icon: <ChartBar size={24} weight="bold" />,
          label: 'Dashboard',
          path: '/admin/dashboard',
          notifications: 2
        }
      ]
    },
    {
      title: 'Gestão de Pessoas',
      items: [
        {
          icon: <Users size={24} weight="bold" />,
          label: 'Colaboradores',
          path: '/admin/employees'
        },
        {
          icon: <Trophy size={24} weight="bold" />,
          label: 'Ranking',
          path: '/admin/ranking'
        }
      ]
    },
    {
      title: 'Conteúdo',
      items: [
        {
          icon: <Books size={24} weight="bold" />,
          label: 'Cursos',
          path: '/admin/courses'
        },
        {
          icon: <GraduationCap size={24} weight="bold" />,
          label: 'Formações',
          path: '/admin/formations'
        },
        {
          icon: <VideoCamera size={24} weight="bold" />,
          label: 'Vídeo Aulas',
          path: '/admin/videos'
        }
      ]
    },
    {
      title: 'Configurações',
      items: [
        {
          icon: <Buildings size={24} weight="bold" />,
          label: 'Perfil Empresa',
          path: '/admin/company'
        },
        {
          icon: <Bell size={24} weight="bold" />,
          label: 'Notificações',
          path: '/admin/notifications',
          notifications: 3
        }
      ]
    }
  ];

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

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
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

        {navSections.map((section, sectionIndex) => (
          <NavSection key={sectionIndex}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.items.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                onClick={() => handleNavigation(item.path)}
                active={isActive(item.path)}
              >
                {item.icon}
                <MenuText>{item.label}</MenuText>
                {item.notifications && (
                  <NotificationBadge>{item.notifications}</NotificationBadge>
                )}
              </MenuItem>
            ))}
          </NavSection>
        ))}

        <LogoutSection>
          <LogoutButton onClick={() => handleNavigation('/')}>
            <SignOut size={24} weight="bold" />
            <MenuText>Sair do Sistema</MenuText>
          </LogoutButton>
        </LogoutSection>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;