import { Sidebar } from './components/SideBar'; // Certifique-se de que o caminho está correto
import { DefaultTheme } from 'styled-components';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Sidebar toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App