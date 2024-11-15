import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/SideBar';
import { DefaultTheme } from 'styled-components';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { AppContainer, MainContent, SidebarContainer } from './styles';
import { LoginPage } from './components/Login';
import CoursesScreen from './components/Courses';
import PlansScreen from './components/Plans';
import HomeScreen from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const location = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer $isLargeScreen={isLargeScreen}>
        {location.pathname !== "/login" && (
          <SidebarContainer $isLargeScreen={isLargeScreen}>
            <Sidebar toggleTheme={toggleTheme} />
          </SidebarContainer>
        )}
        <MainContent $isLargeScreen={isLargeScreen}>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<HomeScreen />} />
            <Route path="/cursos" element={<CoursesScreen />} />
            <Route path="/planos" element={<PlansScreen />} />
            <Route path="/login" element={<LoginPage toggleTheme={toggleTheme} onClick={() => {}} />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;