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
} from "./styles";

interface Props {
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface UserInfo {
  name: string;
  avatarUrl: string;
  level: number;
  progress: number;
  maxProgress: number;
}

const Sidebar: React.FC<Props> = ({ toggleTheme, isOpen, setIsOpen }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserInfo(JSON.parse(userData));
    } else {
      setUserInfo({
        name: "Luigi Trevisan",
        avatarUrl: "/teste.png",
        level: 1,
        progress: 65,
        maxProgress: 100,
      });
    }
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const progressPercent = (userInfo.progress / userInfo.maxProgress) * 100;

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  return (
    <SidebarContainer 
      isOpen={isOpen || isLargeScreen}
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
      <UserInfo role="complementary" aria-label="Informações do usuário">
        <UserAvatar 
          src={userInfo.avatarUrl} 
          alt={`Foto de perfil de ${userInfo.name}`} 
        />
        <UserDetailsContainer>
          <UserNameContainer>
            <UserName>{userInfo.name}</UserName>
            <UserLevel aria-label={`Level ${userInfo.level}`}>
              Lv. {userInfo.level}
            </UserLevel>
          </UserNameContainer>
          <UserProgressBar 
            role="progressbar" 
            aria-valuenow={userInfo.progress}
            aria-valuemin={0}
            aria-valuemax={userInfo.maxProgress}
            aria-label="Progresso do usuário"
          >
            <Progress width={progressPercent} />
          </UserProgressBar>
          <ProgressText aria-label={`${userInfo.progress} de ${userInfo.maxProgress} pontos`}>
            {userInfo.progress} / {userInfo.maxProgress}
          </ProgressText>
        </UserDetailsContainer>
      </UserInfo>
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