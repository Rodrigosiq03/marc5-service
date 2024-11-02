import { Sidebar } from './components/SideBar';
import { DefaultTheme } from 'styled-components';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { useEffect, useState } from 'react';
import { AppContainer, MainContent } from './styles';
import { PageSelector } from './components/PageSelector';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [selectedItem, setSelectedItem] = useState<"Início" | "Cursos" | "Planos" | "Sair" | null>(null);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <AppContainer>
            <div style={{width: '350px'}}>
              <Sidebar toggleTheme={toggleTheme} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            </div>
            <MainContent>
              <PageSelector page={selectedItem} />
            </MainContent>
          </AppContainer>
    </ThemeProvider>
  );
}

export default App;