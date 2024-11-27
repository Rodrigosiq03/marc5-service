import styled from "styled-components";

interface ArrowProps {
    $isOpen: boolean;
}

interface ModuleLessonsProps {
    isOpen: boolean;
}

export const CourseHomeContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    flex-direction: column;
`

export const CourseTitleContainer = styled.div<{ image_url: string }>`
    width: 100%;
    height: 300px;
    padding: 1.5rem;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;

    // imagem de fundo
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.image_url});
        background-size: cover;
        background-position: center;
        filter: brightness(0.5);
        z-index: 1;
    }
    
    @media (max-width: 768px) {
        padding: 1rem;
        height: 200px;
    }
`

export const CourseTitle = styled.h2`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h2};
    color: white;
    font-weight: bold;
    text-align: left;
    position: relative;
    z-index: 2;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h2};
    }
`

export const CourseDescription = styled.h6`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h5};
    color: white;
    opacity: 0.8;
    font-weight: normal;
    text-align: left;
    position: relative;
    z-index: 2;
    max-width: 800px;
    
    @media (max-width: 768px) {
        display: none;
    }
`

export const CourseContentContainer = styled.div`
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

export const SectionTitle = styled.h3`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h3};
    color: ${({theme}) => theme.colors.primary};
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h3};
    }
`

export const ProgressCard = styled.div`
    max-width: 1000px;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary};
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export const ProgressTitle = styled.h4`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h4};
    color: ${({theme}) => theme.colors.primary};
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h4};
        margin-bottom: 0.25rem;
    }
`

export const ProgressPercentage = styled.h5`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h5};
    color: ${({theme}) => theme.colors.primary};
    font-weight: normal;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h5};
    }
`

export const ProgressBar = styled.div`
    max-width: 400px;
    height: 10px;
    background-color: ${({theme}) => theme.colors.primary}10;
    border-radius: 10px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        height: 8px;
        border-radius: 8px;
    }
`

export const ProgressBarFill = styled.div<{ $progress: number }>`
    width: ${props => props.$progress}%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.green_500};
    border-radius: 10px 0 0 10px;
`

export const ContinueCardWrapper = styled.div<{ $isClickable: boolean }>`
    position: relative;
    
    &:focus-within {
        outline: 2px solid ${({ theme }) => theme.colors.green_500};
        outline-offset: 2px;
        border-radius: 0.5rem;
    }
`;

export const ContinueCard = styled.div`
    max-width: 1000px;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary};
    padding: 1rem;
    display: flex;
    flex-direction: row;
    position: relative;
    transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            transform: translateY(-4px);
            border-color: ${({ theme }) => theme.colors.green_500};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
    }

    @media (max-width: 768px) {
        min-width: 100%;
        margin-bottom: 2rem;
    }
`;

export const ContinueButton = styled.button`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
    border: none;
    background: transparent;

    &:focus-visible {
        outline: none;
    }
`;

export const ContinueContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-size: ${({theme}) => theme.fontsSizes.desktop.h5};
        color: ${({theme}) => theme.colors.primary};
        margin: 0;
    }

    p {
        font-size: ${({theme}) => theme.fontsSizes.desktop.p};
        color: ${({theme}) => theme.colors.primary}CC;
        margin: 0;
    }

    @media (max-width: 768px) {
        h4 {
            font-size: ${({theme}) => theme.fontsSizes.mobile.h5};
        }
        p {
            font-size: ${({theme}) => theme.fontsSizes.mobile.p};
        }
    }
`;

export const ContinueImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 0.5rem;
    margin-right: 1rem;

    
    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

export const ModulesCard = styled.div`
    max-width: 1000px;
    background-color: transparent;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 0.2rem;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        padding: 0.1rem;
    }
`

export const Module = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0.1rem;
    }
`

export const ModuleHeader = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({theme}) => theme.colors.primary}10;
    }
`;

export const ModuleTitle = styled.h5`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h5};
    color: ${({theme}) => theme.colors.primary};
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h5};
    }
`

export const ModuleArrow = styled.span<ArrowProps>`
    width: 10px;
    height: 10px;
    border-right: 2px solid ${({theme}) => theme.colors.primary};
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: transform 0.3s ease;
`;

export const ModuleLesson = styled.div`
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${({theme}) => theme.colors.primary}10;
    }

    &:focus-visible {
        outline: 2px solid ${({theme}) => theme.colors.green_500};
        outline-offset: -2px;
    }
`;

export const LessonTitle = styled.h6`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h6};
    color: ${({theme}) => theme.colors.primary};
    font-weight: 400;
    padding: 1rem 2rem;
    transition: color 0.2s ease;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h6};
    }
`;

export const LessonDescription = styled.p`
    font-size: ${({theme}) => theme.fontsSizes.desktop.p};
    color: ${({theme}) => theme.colors.primary}CC;
    padding: 0.5rem 1rem;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.p};
    }
`

export const ModuleLessons = styled.div<ModuleLessonsProps>`
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
`;