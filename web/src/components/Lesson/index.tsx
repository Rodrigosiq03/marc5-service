import React from 'react';
import { useParams } from 'react-router-dom';
import { LessonContainer, LessonVideoWrapper, LessonTitle, LessonDescription } from './styles';

interface LessonData {
    title: string,
    description: string,
}

const LessonScreen: React.FC = () => {
    const { course_id, lesson_id } = useParams<{ course_id: string; lesson_id: string }>();

    const lessonData: LessonData = {
        title: 'O que esperar deste curso?',
        description: 'Na aula "O que esperar deste curso?" do curso Front-End em 3 dias, os alunos serão apresentados aos principais objetivos e conteúdos que serão abordados. A aula irá esclarecer as expectativas em relação ao aprendizado de HTML, CSS e JavaScript, além de proporcionar uma visão geral sobre as práticas e projetos que serão realizados ao longo do curso. Os participantes entenderão como cada componente se integra para criar experiências web dinâmicas e interativas, preparando-os para os desafios do desenvolvimento front-end.'
    }
    
    return (
        <LessonContainer>
            <LessonVideoWrapper></LessonVideoWrapper>
            <LessonTitle>{lessonData.title}</LessonTitle>
            <LessonDescription>{lessonData.description}</LessonDescription>
        </LessonContainer>
    );
};

export default LessonScreen;