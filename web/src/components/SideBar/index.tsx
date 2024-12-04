import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon, Sun } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  ThemeSwitcher,
  Logo,
  UserInfo,
  UserAvatar,
  UserDetailsContainer,
  UserNameContainer,
  UserName,
  UserLevel,
  UserProgressBar,
  Progress,
  ProgressText,
  Menu,
  MenuItem,
  UserInfoContainer,
} from "./styles";
import { Loading } from "../Loading";
import { AuthContext } from "../../contexts/auth/authContext";
import { useLevelCalculation } from "../../hooks/useLevelCalculator";

interface Props {
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DEFAULT_AVATAR = "/default_profile.png";

interface UserInfo {
  name: string;
  email: string;
  courses: string[];
  xp: number;
  pictureUrl: string;
}

const Sidebar: React.FC<Props> = ({ toggleTheme, isOpen, setIsOpen }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { user, signOut } = useContext(AuthContext);

  const { level, progress, maxProgress } = useLevelCalculation(user?.xp || 0);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (!user) {
      signOut();
      navigate('/login');
    } else {
      setIsUserLoading(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, signOut, user]);

  if (isUserLoading || !user) {
    return (
      <SidebarContainer 
        $isOpen={isOpen || isLargeScreen}
        role="navigation"
        aria-label="Menu principal"
      >
        <Loading isLoading={true} isSidebar={true} message="Carregando suas informações" />
      </SidebarContainer>
    );
  }

  const progressPercent = (progress / maxProgress) * 100;

  const handleNavigation = (path: string) => {
    if (path === '/login') {
      signOut();
    }
    navigate(path);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  return (
    <SidebarContainer 
      $isOpen={isOpen || isLargeScreen}
      role="navigation"
      aria-label="Menu principal"
    >
      <ThemeSwitcher>
        <button 
          onClick={toggleTheme} 
          aria-label={`Alternar tema - Tema atual: ${theme?.title}`}
        >
          <span>{theme?.title === "light" ? <Moon size={32} /> : <Sun size={32} />}</span>
        </button>
      </ThemeSwitcher>
      <Logo>
        <img src="/marc5-white.png" alt="Logo MARC5" />
      </Logo>
      <UserInfoContainer>
        {isUserLoading ? (
          <Loading isLoading={true} isSidebar={true} message="Carregando suas informações" />
        ) : (
          <UserInfo 
            role="button"
            onClick={() => handleNavigation('/perfil')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/perfil')}
            tabIndex={0}
            aria-label={`Perfil de ${user.name}. Clique para ver detalhes`}
          >
            <UserAvatar 
              src={user.pictureUrl || DEFAULT_AVATAR} 
              alt={`Foto de perfil de ${user.name}`}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src = DEFAULT_AVATAR;
              }}
            />
            <UserDetailsContainer>
              <UserNameContainer>
                <UserName>{user.name}</UserName>
                <UserLevel aria-label={`Level ${level}`}>
                  Lv. {level}
                </UserLevel>
              </UserNameContainer>
              <UserProgressBar 
                role="progressbar" 
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={maxProgress}
                aria-label="Progresso do usuário"
              >
                <Progress $width={progressPercent} />
              </UserProgressBar>
              <ProgressText aria-label={`${progress} de ${maxProgress} pontos`}>
                {progress} / {maxProgress}
              </ProgressText>
            </UserDetailsContainer>
          </UserInfo>
        )}
      </UserInfoContainer>
      <Menu role="menubar">
        {["Inicio", "Cursos", "Planos", "Sair"].map((item, index) => {
          const itemPath = item === "Sair" ? "/login" : `/${item.toLowerCase()}`;
          const isSelected = location.pathname === itemPath;
          
          return (
            <MenuItem
              key={item}
              role="menuitem"
              tabIndex={index}
              aria-selected={isSelected}
              onClick={() => handleNavigation(itemPath)}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </SidebarContainer>
  );
};

export { Sidebar };