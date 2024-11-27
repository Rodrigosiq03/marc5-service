import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CourseHomeContainer, CourseTitleContainer, CourseTitle, CourseContentContainer, 
    SectionTitle, ContinueCard, ContinueImage, ModulesCard, Module, ModuleTitle, 
    ModuleLessons, ModuleLesson, ContinueCardWrapper, ContinueButton, 
    ContinueContent, ModuleHeader, ModuleArrow, LessonTitle } from './styles';

interface CourseModule {
    _id: string,
    title: string,
    lessons: string[],
}

interface Course {
    title: string,
    description: string,
    image_url: string,
    progress: number,
    modules: CourseModule[],
}

const CourseHomeScreen: React.FC = () => {
    const { course_id } = useParams<{ course_id: string }>();
    const navigate = useNavigate();
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

    const course: Course = {
        title: 'Título do curso',
        description: 'Descrição do curso.',
        image_url: '/curso.png',
        progress: 0.40,
        modules: [
            {
                _id: '1',
                title: 'Módulo 1',
                lessons: [
                    'Aula 1',
                    'Aula 2',
                    'Aula 3',
                    'Aula 4',
                ]
            },
            {
                _id: '2',
                title: 'Módulo 2',
                lessons: [
                    'Aula 1',
                    'Aula 2',
                    'Aula 3',
                    'Aula 4',
                ]
            },
            {
                _id: '3',
                title: 'Módulo 3',
                lessons: [
                    'Aula 1',
                    'Aula 2',
                    'Aula 3',
                    'Aula 4',
                ]
            }
        ]
    }

    const handleContinueClick = () => {
        // Aqui você pode navegar para a última aula assistida
        navigate(`/cursos/${course_id}/aulas/lastWatched`);
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
        navigate(`/cursos/${course_id}/aulas/${lessonIndex}`);
    };

    return (
        <CourseHomeContainer>
            <CourseTitleContainer image_url={course.image_url}>
                <CourseTitle>{course.title}</CourseTitle>
            </CourseTitleContainer>

            <CourseContentContainer>
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
                            {openModules[module._id] && (
                                <ModuleLessons>
                                    {module.lessons.map((lesson, index) => (
                                        <ModuleLesson 
                                            key={index}
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
                                            <LessonTitle>{lesson}</LessonTitle>
                                        </ModuleLesson>
                                    ))}
                                </ModuleLessons>
                            )}
                        </Module>
                    ))}
                </ModulesCard>
            </CourseContentContainer>
        </CourseHomeContainer>
    )
}

export default CourseHomeScreen;