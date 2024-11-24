import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon, Sun, ArrowLeft } from "@phosphor-icons/react";
import {
  LayoutContainer,
  SidebarContainer,
  ThemeSwitcher,
  Logo,
  UserInfoContainer,
  UserInfo,
  UserAvatar,
  UserDetailsContainer,
  UserNameContainer,
  UserName,
  UserLevel,
  UserProgressBar,
  Progress,
  ProgressText,
  CourseSections,
  SectionContainer,
  SectionTitle,
  LessonItem,
  LessonInfo,
  LessonTitle,
  LessonDuration,
  MainContent,
  ContentWrapper,
  VideoContainer,
  VideoPlaceholder,
  PlayButton,
  LessonHeading,
  LessonText,
  EvaluationSection,
  EvaluationTitle,
  BackButton,
  NavigationHeader,
  CaretIcon,
  LessonCheckbox,
  LessonsContainer,
  SectionHeader,
} from "./styles";
import { Loading } from "../Loading";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  avatarUrl: string;
  level: number;
  progress: number;
  maxProgress: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  progress: number;
  instructor: string;
  sections: Section[];
  currentLesson?: Lesson;
}

interface Props {
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LessonLayout: React.FC<Props> = ({ toggleTheme, isOpen, setIsOpen }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([]);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserInfo(JSON.parse(userData));
      setIsUserLoading(false);
    } else {
      setUserInfo({
        name: "Luigi Trevisan",
        avatarUrl: "/teste.png",
        level: 1,
        progress: 65,
        maxProgress: 100,
      });
      setIsUserLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const mockCourseData: Course = {
          id: "course123",
          title: "JavaScript Avançado",
          description: "Aprenda conceitos avançados de JavaScript",
          duration: "8h 30min",
          sections: [
            {
              id: "section1",
              title: "Fundamentos",
              lessons: [
                {
                  id: "lesson1",
                  title: "Introdução ao Curso",
                  duration: "10:00",
                  videoUrl: "https://example.com/video1",
                  completed: true,
                },
                {
                  id: "lesson2",
                  title: "Promises e Async/Await",
                  duration: "25:00",
                  videoUrl: "https://example.com/video2",
                  completed: false,
                },
                {
                  id: "lesson3",
                  title: "Padrões de Projeto",
                  duration: "30:00",
                  videoUrl: "https://example.com/video3",
                  completed: false,
                },
              ],
            },
            {
              id: "section2",
              title: "Avançado",
              lessons: [
                {
                  id: "lesson4",
                  title: "Testes Automatizados",
                  duration: "20:00",
                  videoUrl: "https://example.com/video4",
                  completed: false,
                },
                {
                  id: "lesson5",
                  title: "TypeScript",
                  duration: "30:00",
                  videoUrl: "https://example.com/video5",
                  completed: false,
                },
              ],
            },
          ],
          lessons: [
            {
              id: "lesson1",
              title: "Introdução ao Curso",
              duration: "10:00",
              completed: true,
            },
            {
              id: "lesson2",
              title: "Promises e Async/Await",
              duration: "25:00",
              completed: false,
            },
            {
              id: "lesson3",
              title: "Padrões de Projeto",
              duration: "30:00",
              completed: false,
            },
            {
              id: "lesson4",
              title: "Testes Automatizados",
              duration: "20:00",
              completed: false,
            },
            {
              id: "lesson5",
              title: "TypeScript",
              duration: "30:00",
              completed: false,
            },
          ],
          progress: 33,
          instructor: "Rafael Bietti",
          currentLesson: {
            id: "lesson1",
            title: "Introdução ao Curso",
            duration: "10:00",
            videoUrl: "https://example.com/video1",
            completed: true,
          },
        };
        setCourseData(mockCourseData);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    fetchCourseData();
  }, []);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const progressPercent = userInfo
    ? (userInfo.progress / userInfo.maxProgress) * 100
    : 0;

  return (
    <LayoutContainer>
      <SidebarContainer isOpen={isOpen || isLargeScreen}>
        <NavigationHeader>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={24} weight="bold" />
          </BackButton>
          <ThemeSwitcher>
            <button
              onClick={toggleTheme}
              aria-label={`Alternar tema - Tema atual: ${theme?.title}`}
            >
              {theme?.title === "light" ? (
                <Moon size={24} weight="bold" />
              ) : (
                <Sun size={24} weight="bold" />
              )}
            </button>
          </ThemeSwitcher>
        </NavigationHeader>

        <Logo>
          <img src="/marc5-white.png" alt="Logo MARC5" />
        </Logo>

        <UserInfoContainer>
          {isUserLoading ? (
            <Loading
              isLoading={true}
              isSidebar={true}
              message="Carregando suas informações"
            />
          ) : (
            userInfo && (
              <UserInfo
                role="button"
                onClick={() => handleNavigation("/perfil")}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleNavigation("/perfil")
                }
                tabIndex={0}
                aria-label={`Perfil de ${userInfo.name}. Clique para ver detalhes`}
              >
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
                  <ProgressText
                    aria-label={`${userInfo.progress} de ${userInfo.maxProgress} pontos`}
                  >
                    {userInfo.progress} / {userInfo.maxProgress}
                  </ProgressText>
                </UserDetailsContainer>
              </UserInfo>
            )
          )}
        </UserInfoContainer>

        <CourseSections>
          {courseData?.sections.map((section) => (
            <SectionContainer key={section.id}>
              <SectionHeader onClick={() => toggleSection(section.id)}>
                <SectionTitle>{section.title}</SectionTitle>
                <CaretIcon 
                  size={20} 
                  weight="bold"
                  isOpen={openSections.includes(section.id)}
                />
              </SectionHeader>
              {openSections.includes(section.id) && (
                <LessonsContainer>
                  {section.lessons.map((lesson) => (
                    <LessonItem key={lesson.id}>
                      <LessonCheckbox completed={lesson.completed} />
                      <LessonInfo>
                        <LessonTitle>{lesson.title}</LessonTitle>
                        <LessonDuration>{lesson.duration}</LessonDuration>
                      </LessonInfo>
                    </LessonItem>
                  ))}
                </LessonsContainer>
              )}
            </SectionContainer>
          ))}
        </CourseSections>
      </SidebarContainer>

      <MainContent>
        <ContentWrapper>
          <VideoContainer>
            <VideoPlaceholder>
              <PlayButton>▶</PlayButton>
            </VideoPlaceholder>
          </VideoContainer>

          <LessonHeading>{courseData?.currentLesson?.title}</LessonHeading>

          <LessonText>{courseData?.currentLesson?.description}</LessonText>

          <EvaluationSection>
            <EvaluationTitle>Avalie esta aula</EvaluationTitle>
          </EvaluationSection>
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
};

export default LessonLayout;
