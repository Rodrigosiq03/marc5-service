import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Sidebar } from "./components/SideBar";
import { DefaultTheme } from "styled-components";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import { AppContainer, MainContent, SidebarContainer, Overlay } from "./styles";
import { MenuToggleButton } from "./components/SideBar/styles";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import CoursesScreen from "./pages/Courses";
import PlansScreen from "./pages/Plans";
import HomeScreen from "./pages/Home";
import LessonScreen from "./pages/Lesson";
import CourseHomeScreen from "./pages/CourseHome";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import ProfileScreen from "./pages/Profile";
import { useRouteRestriction } from "./hooks/useRouteRestriction";
import { RESTRICTED_ROUTES } from "./types/routes";
import AdminLayout from "./pages/AdminLayout";

function App() {
  const { isRestricted } = useRouteRestriction();
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const location = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isLargeScreen);

  useEffect(() => {
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1280;
      setIsLargeScreen(newIsLargeScreen);
      setIsSidebarOpen(newIsLargeScreen);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isLargeScreen]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
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
        {!isRestricted && (
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
        <MainContent
          $isLargeScreen={isLargeScreen}
          $isRestricted={isRestricted}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<HomeScreen />} />
            <Route path="/cursos" element={<CoursesScreen />} />
            <Route path="/cursos/:courseId" element={<CourseHomeScreen />} />
            <Route
              path={RESTRICTED_ROUTES.LESSON.path}
              element={<LessonScreen toggleTheme={toggleTheme} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
            />
            <Route path="/planos" element={<PlansScreen />} />
            <Route path="/perfil" element={<ProfileScreen />} />
            <Route
              path={RESTRICTED_ROUTES.SIGNUP.path}
              element={
                <SignUpPage toggleTheme={toggleTheme} onClick={toggleSidebar}/>
              }
            />
            <Route
              path={RESTRICTED_ROUTES.LOGIN.path}
              element={
                <LoginPage toggleTheme={toggleTheme} onClick={toggleSidebar} />
              }
            />
            <Route
              path={RESTRICTED_ROUTES.ADMIN.path}
              element={
                <AdminLayout
                    toggleTheme={toggleTheme}
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                  />
              }
            />
            <Route path="*" element={<Navigate to="/inicio" />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;