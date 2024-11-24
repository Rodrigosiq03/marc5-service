import { CaretDown } from '@phosphor-icons/react';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.green_500};
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    transform: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const NavigationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.fontsSizes.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Logo = styled.div`
  margin: 1.5rem 0 2rem;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 200px;
  }
`;

export const UserInfoContainer = styled.div`
  position: relative;
  min-height: 120px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
    outline-offset: 2px;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  background-color: ${({ theme }) => theme.fontsSizes.colors.white};
  border: 1px solid ${({ theme }) => theme.fontsSizes.colors.black};
`;

export const UserDetailsContainer = styled.div`
  flex: 1;
`;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const UserName = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const UserLevel = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const UserProgressBar = styled.div`
  background-color: ${({ theme }) => theme.fontsSizes.colors.white};
  height: 0.7rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 0.5px solid ${({ theme }) => theme.fontsSizes.colors.black};
  overflow: hidden;
  margin-bottom: 4px;
`;

interface ProgressProps {
  width: number;
}

export const Progress = styled.div<ProgressProps>`
  background-color: ${({ theme }) => theme.colors.green_300};
  height: 100%;
  width: ${({ width }) => width}%;
`;

export const ProgressText = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  text-align: center;
`;

export const CourseSections = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

export const CaretIcon = styled(CaretDown)<{ isOpen?: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(-180deg)' : 'rotate(0)'};
`;

export const LessonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  gap: 0.5rem;
`;

export const LessonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LessonCheckbox = styled.div<{ completed: boolean }>`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme.fontsSizes.colors.white};
  border-radius: 2px;
  background-color: ${({ completed, theme }) => 
    completed ? theme.colors.green_300 : 'transparent'};
`;

export const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LessonTitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
`;

export const LessonDuration = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  opacity: 0.7;
`;

export const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const VideoContainer = styled.div`
  background-color: black;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
  aspect-ratio: 16 / 9;
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayButton = styled.div`
  width: 5rem;
  height: 5rem;
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.5;
`;

export const LessonHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary || '#1f2937'};
  margin-bottom: 1rem;
`;

export const LessonText = styled.p`
  color: ${({ theme }) => theme.colors.primary || '#4b5563'};
  line-height: 1.5;
`;

export const EvaluationSection = styled.div`
  margin-top: 2rem;
`;

export const EvaluationTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary || '#1f2937'};
  margin-bottom: 1rem;
`;