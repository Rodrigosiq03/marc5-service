import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";
import CourseCard from "../CourseCard";
import { HomeContainer, Section, SectionTitle, CourseGrid } from "./styles";

interface CourseType {
  title: string;
  description: string;
  deadline?: string;
  imageUrl?: string;
  instructor?: string;
  category?: string;
}


const CoursesScreen: React.FC = () => {
  useContext(ThemeContext);
  const recentCourses: CourseType[] = [
    {
      title: "Deep Learning",
      description:
        "O curso abrange todas as técnicas mais atualizadas de DeepLearning do mercado",
      instructor: "Rodrigo Siqueira",
      deadline: "28/11/24",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
    },
    {
      title: "Front-End",
      description:
        "O curso abrange a linguagem Javascript juntamente da Framework React",
      instructor: "Rafael Bietti",
      deadline: "28/11/24",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
    },
  ];

  const newContent: CourseType[] = [
    {
      title: "Desenvolvimento back-end",
      description: "Aprenda as principais tecnologias de backend",
      instructor: "Rafael Bietti",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
    },
    {
      title: "Front-End em 3 dias!",
      description: "Curso intensivo de desenvolvimento frontend",
      instructor: "Rodrigo Siqueira",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
    },
    {
      title: "Experiência e Interface do Usuário",
      description: "Aprenda UX/UI com especialistas da IBM",
      instructor: "IBM - Flávia Beo",
      imageUrl: "/curso.png",
      category: "Design",
    },
  ];

  return (
    <HomeContainer>
      <Section>
        <SectionTitle>Recentes</SectionTitle>
        <CourseGrid>
          {recentCourses.map((course, index) => (
            <CourseCard key={`recent-${index}`} {...course} />
          ))}
        </CourseGrid>
      </Section>

      <Section>
        <SectionTitle>Novos Conteúdos</SectionTitle>
        <CourseGrid>
          {newContent.map((course, index) => (
            <CourseCard key={`new-${index}`} {...course} />
          ))}
        </CourseGrid>
      </Section>
    </HomeContainer>
  );
};

export default CoursesScreen;
