import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: 350px;
  padding: 2rem;
  min-height: 100vh;
  
  @media (max-width: 1280px) {
    margin-left: 0;
    padding: 1.5rem;
  }
`;

export const DashboardHeader = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const WelcomeText = styled.h1`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
  }
`;

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary}CC;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.input.background};
  padding: 1.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }
`;

export const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

export const MetricIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green_300};
  }
`;

export const MetricTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary}CC;
  margin: 0;
  font-weight: 500;
`;

export const MetricValue = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.input.background};
  padding: 1.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

export const ActivityList = styled.div`
  background: ${({ theme }) => theme.colors.input.background};
  padding: 1.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.input.border};

  h3 {
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
  transition: background-color 0.3s ease;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.background_hover};
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 -1rem;
  }
`;

export const ActivityIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green_300};
  }
`;

export const ActivityContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ActivityTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.25rem 0;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActivityTime = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary}99;
  margin: 0;
`;