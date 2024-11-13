import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/SideBar';
import { DefaultTheme } from 'styled-components';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { useState } from 'react';
import { AppContainer, MainContent } from './styles';
import { PageSelector } from './components/PageSelector';
import { LoginPage } from './components/Login';
import CoursesScreen from './components/Courses';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [selectedItem, setSelectedItem] = useState<"Início" | "Cursos" | "Planos" | "Sair" | null>(null);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        {location.pathname !== "/login" && (
          <div style={{ width: '350px' }}>
            <Sidebar toggleTheme={toggleTheme} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          </div>
        )}
        <MainContent>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<PageSelector page="Início" />} />
            <Route path="/cursos" element={<CoursesScreen />} />
            <Route path="/planos" element={<PageSelector page="Planos" />} />
            <Route path="/login" element={<LoginPage toggleTheme={toggleTheme} onClick={() => {}} />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;