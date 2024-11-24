import styled from "styled-components";

interface ArrowProps {
    $isOpen: boolean;
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
        filter: brightness(0.7);
        z-index: 1;
    }
    
    @media (max-width: 768px) {
        padding: 1rem;
        height: 200px;
    }
`

export const CourseTitle = styled.h1`
    font-size: ${({theme}) => theme.fontsSizes.desktop.h1};
    color: white;
    font-weight: 500;
    text-align: left;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h1};
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
    font-weight: 500;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.h3};
    }
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
    background-color: transparent;
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
    justify-content: center;
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

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`

export const Module = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`

export const ModuleHeader = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
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
    font-weight: bold;

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

    &:hover {
        background-color: ${({theme}) => theme.colors.primary}10;
    }

    &:focus-visible {
        outline: 2px solid ${({theme}) => theme.colors.green_500};
        outline-offset: -2px;
    }
`;

export const LessonTitle = styled.span`
    font-size: ${({theme}) => theme.fontsSizes.desktop.p};
    color: ${({theme}) => theme.colors.primary};
    padding: 0.5rem 1rem;
    transition: color 0.2s ease;

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fontsSizes.mobile.p};
    }
`;

export const ModuleLessons = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
`