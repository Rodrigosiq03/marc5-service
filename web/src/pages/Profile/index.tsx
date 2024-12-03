import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileBio,
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
  CourseProgress,
  ProgressBar,
  Section,
  SectionTitle,
  CourseGrid,
  LevelProgressContainer,
  LevelInfo,
  LevelProgress,
  LevelProgressBar,
  LevelText,
  CourseProgressGrid,
  CourseProgressInfo,
  ProgressBarContainer,
  ProgressText,
} from "./styles";
import { Loading } from "../../components/Loading";

interface UserInfo {
    name: string;
    description: string;
    avatarUrl: string;
    level: number;
    progress: number;
    maxProgress: number;
  }

const ProfileScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const inProgressCourses = [
    {
      _id: "course1",
      title: "Deep Learning",
      description:
        "O curso abrange todas as técnicas mais atualizadas de DeepLearning do mercado",
      creator: "Rodrigo Siqueira",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 200,00",
      date: "28/11/24",
      subscribers: 100,
      progress: 65,
    },
    {
      _id: "course2",
      title: "Front-End",
      description:
        "O curso abrange a linguagem Javascript juntamente da Framework React",
      creator: "Rafael Bietti",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 200,00",
      date: "28/11/24",
      subscribers: 100,
      progress: 30,
    },
  ];

  const completedCourses = [
    {
      _id: "course3",
      title: "UX/UI Design",
      description:
        "Aprenda os fundamentos de design de interface e experiência do usuário",
      creator: "Ana Silva",
      imageUrl: "/curso.png",
      category: "Design",
      price: "R$ 180,00",
      date: "15/11/24",
      subscribers: 150,
    },
  ];

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserInfo(JSON.parse(userData));
      setIsUserLoading(false);
    } else {
      setUserInfo({
        name: "Luigi Trevisan",
        description: "Desenvolvedor Full Stack com 5 anos de experiência. Apaixonado por tecnologia e sempre em busca de novos conhecimentos.",
        avatarUrl: "/teste.png",
        level: 1,
        progress: 65,
        maxProgress: 100,
      });
      setIsUserLoading(false);
    }
  }, []);

  if (isUserLoading || !userInfo) {
    return (
      <ProfileContainer role="main">
        <Loading message="Carregando perfil..." />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer role="main">
      <ProfileHeader 
        role="banner"
        aria-label="Informações do perfil"
        >
        <ProfileImage
            src={userInfo.avatarUrl}
            alt={`Foto de perfil de ${userInfo.name}`}
            loading="lazy"
        />
        <ProfileInfo>
            <ProfileName aria-level={1}>{userInfo?.name}</ProfileName>
            <LevelProgressContainer role="presentation">
            <LevelInfo>
                <LevelText aria-label={`Nível ${userInfo.level}`}>
                Level {userInfo.level}
                </LevelText>
                <LevelText aria-label={`${userInfo.progress} de ${userInfo.maxProgress} pontos de experiência`}>
                XP {userInfo.progress}/{userInfo.maxProgress}
                </LevelText>
            </LevelInfo>
            <LevelProgressBar
                role="progressbar"
                aria-valuenow={userInfo.progress}
                aria-valuemin={0}
                aria-valuemax={userInfo.maxProgress}
                aria-label={`Barra de progresso do nível, ${userInfo.progress} de ${userInfo.maxProgress} pontos`}
            >
                <LevelProgress width={userInfo.progress} />
            </LevelProgressBar>
            </LevelProgressContainer>
            <ProfileBio>{userInfo.description}</ProfileBio>
            <StatsContainer role="list" aria-label="Estatísticas do usuário">
            {[
                { value: '3', label: 'Cursos em Andamento' },
                { value: '5', label: 'Cursos Concluídos' },
                { value: '180h', label: 'Horas de Estudo' }
            ].map((stat, index) => (
                <StatCard 
                key={index} 
                role="listitem"
                aria-label={`${stat.value} ${stat.label}`}
                >
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
                </StatCard>
            ))}
            </StatsContainer>
        </ProfileInfo>
        </ProfileHeader>

      <Section 
        role="region" 
        aria-label="Cursos em andamento"
        >
        <SectionTitle tabIndex={0}>Cursos em Andamento</SectionTitle>
        <CourseProgressGrid>
            {inProgressCourses.map((course) => (
            <CourseProgress 
                key={course._id}
                role="article"
                aria-labelledby={`course-title-${course._id}`}
            >
                <CourseCard {...course} />
                <ProgressBarContainer>
                    <CourseProgressInfo>
                        <span>Progresso do curso</span>
                        <ProgressText aria-label={`${course.progress}% completo`}>
                        {course.progress}%
                        </ProgressText>
                    </CourseProgressInfo>
                    <ProgressBar 
                        progress={course.progress}
                        role="progressbar"
                        aria-valuenow={course.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`Progresso do curso ${course.title}`}
                    />
                </ProgressBarContainer>
            </CourseProgress>
            ))}
        </CourseProgressGrid>
    </Section>

      <Section role="region" aria-label="Cursos concluídos">
        <SectionTitle tabIndex={0}>Cursos Concluídos</SectionTitle>
        <CourseGrid role="list">
          {completedCourses.map((course, index) => (
            <div key={`completed-${index}`} role="listitem">
              <CourseCard {...course} />
            </div>
          ))}
        </CourseGrid>
      </Section>
    </ProfileContainer>
  );
};

export default ProfileScreen;
