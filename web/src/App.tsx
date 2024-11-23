import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/SideBar';
import { DefaultTheme } from 'styled-components';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { AppContainer, MainContent, SidebarContainer, Overlay } from './styles';
import { MenuToggleButton } from './components/SideBar/styles';
import { LoginPage } from './components/Login';
import CoursesScreen from './components/Courses';
import PlansScreen from './components/Plans';
import HomeScreen from './components/Home';
import LessonScreen from './components/Lesson';
import { useEffect, useState } from 'react';
import { List, X } from "@phosphor-icons/react";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const location = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1280;
      setIsLargeScreen(newIsLargeScreen);
      if (newIsLargeScreen) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = () => {
    if (!isLargeScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer $isLargeScreen={isLargeScreen}>
        {location.pathname !== "/login" && (
          <>
            {!isLargeScreen && (
              <MenuToggleButton 
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isSidebarOpen}
              >
                {isSidebarOpen ? <X size={32} /> : <List size={32} />}
              </MenuToggleButton>
            )}
            <SidebarContainer 
              $isLargeScreen={isLargeScreen} 
              $isOpen={isSidebarOpen}
            >
              <Sidebar 
                toggleTheme={toggleTheme}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
              />
            </SidebarContainer>
            {!isLargeScreen && isSidebarOpen && (
              <Overlay onClick={handleOverlayClick} />
            )}
          </>
        )}
        <MainContent $isLargeScreen={isLargeScreen}>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<HomeScreen />} />
            <Route path="/cursos" element={<CoursesScreen />} />
            <Route path="/cursos/:course_id/aulas/:lesson_id" element={<LessonScreen />} />
            <Route path="/planos" element={<PlansScreen />} />
            <Route path="/login" element={<LoginPage toggleTheme={toggleTheme} onClick={toggleSidebar} />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;