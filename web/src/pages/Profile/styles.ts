import styled from "styled-components";

export const ProfileContainer = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProfileHeader = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const ProfileName = styled.h2`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const ProfileBio = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  margin-bottom: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.input.background};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.input.background_hover};
  }
`;

export const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
`;

export const CourseProgressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CourseProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 12px;
  padding: 1.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.input.background_hover};
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CourseProgressInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.input.border};
  border-radius: 999px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;

  &::after {
    content: '';
    display: block;
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.green_500};
    transition: width 0.4s ease-in-out;
    border-radius: 999px;
  }
`;

export const ProgressText = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green_500};
  margin-left: 0.5rem;
`;

export const ProgressBarContainer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  width: 100%;
`;

export const SectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  padding-left: 2rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  padding-left: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LevelProgressContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LevelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const LevelText = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
`;

export const LevelProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.input.border};
  height: 0.7rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 0.5px solid ${({ theme }) => theme.colors.input.border};
  overflow: hidden;
`;

export const LevelProgress = styled.div<{ width: number }>`
  background-color: ${({ theme }) => theme.colors.green_500};
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 0.3s ease;
`;