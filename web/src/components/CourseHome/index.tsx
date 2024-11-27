import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CourseHomeContainer, CourseTitleContainer, CourseTitle, CourseDescription, CourseContentContainer, 
    SectionTitle, ProgressCard, ProgressTitle, ProgressBar, ProgressBarFill ,ContinueCard, ContinueImage, ModulesCard, Module, ModuleTitle, 
    ModuleLessons, ModuleLesson, ContinueCardWrapper, ContinueButton, 
    ContinueContent, ModuleHeader, ModuleArrow, LessonTitle, 
    ProgressPercentage} from './styles';
import { Progress } from '../SideBar/styles';

interface CourseModule {
    _id: string,
    title: string,
    lessons: Lesson[], 
}

interface Lesson {
    _id: string,
    title: string,
    description: string
}

interface Course {
    title: string,
    description: string,
    image_url: string,
    progress: number,
    lessons_completed: number,
    lessons_total: number,
    modules: CourseModule[], 
}

const CourseHomeScreen: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const navigate = useNavigate();
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

    const course: Course = {
        title: 'Curso de Desenvolvimento Web',
        description: 'Aprenda as principais tecnologias e ferramentas para se tornar um desenvolvedor web completo',
        image_url: '/curso.png',
        progress: 0.5833,
        lessons_completed: 7,
        lessons_total: 12,

        modules: [
            {
                _id: '0',
                title: 'Introdução ao Desenvolvimento Web',
                lessons: [
                    { _id: '0', title: 'O que é Desenvolvimento Web?', description: 'Entenda os conceitos básicos do desenvolvimento web.' },
                    { _id: '1', title: 'Como a Web Funciona', description: 'Aprenda como os navegadores e servidores se comunicam.' },
                    { _id: '2', title: 'Ferramentas Necessárias', description: 'Veja quais ferramentas você precisa para começar.' }
                ]
            },
            {
                _id: '1',
                title: 'HTML e CSS',
                lessons: [
                    { _id: '0', title: 'Estrutura HTML', description: 'Aprenda a criar a estrutura básica de uma página web.' },
                    { _id: '1', title: 'Estilização com CSS', description: 'Descubra como estilizar suas páginas com CSS.' },
                    { _id: '2', title: 'Layouts Responsivos', description: 'Implemente designs que se adaptam a diferentes dispositivos.' }
                ]
            },
            {
                _id: '2',
                title: 'JavaScript e DOM',
                lessons: [
                    { _id: '0', title: 'Introdução ao JavaScript', description: 'Aprenda os fundamentos do JavaScript.' },
                    { _id: '1', title: 'Manipulação do DOM', description: 'Veja como interagir com os elementos da sua página.' },
                    { _id: '2', title: 'Eventos no JavaScript', description: 'Descubra como capturar e reagir a eventos do usuário.' }
                ]
            },
            {
                _id: '3',
                title: 'Frameworks e Bibliotecas',
                lessons: [
                    { _id: '0', title: 'Introdução ao React', description: 'Comece a construir interfaces modernas com React.' },
                    { _id: '1', title: 'Gerenciamento de Estado', description: 'Aprenda a gerenciar o estado de suas aplicações.' },
                    { _id: '2', title: 'Estilização com CSS-in-JS', description: 'Explore técnicas de estilização modernas no React.' }
                ]
            }
        ]
    }

    const handleContinueClick = () => {
        navigate(`/cursos/${courseId}/aulas/0`);
    };

    const handleContinueKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleContinueClick();
        }
    };

    const toggleModule = (moduleId: string) => {
        setOpenModules(prev => ({
            ...prev,
            [moduleId]: !prev[moduleId]
        }));
    };

    const handleLessonClick = (moduleId: string, lessonIndex: number) => {
        navigate(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonIndex}`);
    };

    return (
        <CourseHomeContainer>
            <CourseTitleContainer image_url={course.image_url}>
                <div>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseDescription>{course.description}</CourseDescription>
                </div>
            </CourseTitleContainer>

            <CourseContentContainer>
                <SectionTitle>Seu progresso</SectionTitle>
                <ProgressCard>
                    <ProgressTitle>{course.lessons_completed} de {course.lessons_total} aulas assistidas</ProgressTitle>
                    <ProgressPercentage>{(course.progress * 100).toFixed(0)}%</ProgressPercentage>
                    <ProgressBar>
                        <ProgressBarFill $progress={course.progress * 100} />
                    </ProgressBar>
                </ProgressCard>

                <SectionTitle>Continuar de onde parou</SectionTitle>
                <ContinueCardWrapper $isClickable={true}>
                    <ContinueCard>
                        <ContinueButton
                            onClick={handleContinueClick}
                            onKeyDown={handleContinueKeyDown}
                            aria-label="Continuar curso de onde parou"
                        />
                        <ContinueImage src={course.image_url} alt="" />
                        <ContinueContent>
                            <h4>Última aula assistida</h4>
                            <p>Descrição da aula</p>
                        </ContinueContent>
                    </ContinueCard>
                </ContinueCardWrapper>

                <SectionTitle>Módulos</SectionTitle>
                <ModulesCard>
                    {course.modules.map((module) => (
                        <Module key={module._id}>
                            <ModuleHeader
                                onClick={() => toggleModule(module._id)}
                                aria-expanded={openModules[module._id]}
                            >
                                <ModuleTitle>{module.title}</ModuleTitle>
                                <ModuleArrow $isOpen={openModules[module._id]} />
                            </ModuleHeader>
                            
                            <ModuleLessons isOpen={openModules[module._id]}>
                                {module.lessons.map((lesson, index) => (
                                    <ModuleLesson 
                                        key={lesson._id}
                                        onClick={() => handleLessonClick(module._id, index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleLessonClick(module._id, index);
                                            }
                                        }}
                                    >
                                        <LessonTitle>{lesson.title}</LessonTitle>
                                    </ModuleLesson>
                                ))}
                            </ModuleLessons>
                        </Module>
                    ))}
                </ModulesCard>
            </CourseContentContainer>
        </CourseHomeContainer>
    )
}

export default CourseHomeScreen;