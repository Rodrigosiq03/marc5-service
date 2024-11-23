import styled from 'styled-components';

export const LessonContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const LessonVideoWrapper = styled.div`
  height: 600px;
  width: 100%;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.25);;
  margin-bottom: 1.5rem;
`

export const LessonTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
    }
`

export const LessonDescription = styled.p`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
    }
`