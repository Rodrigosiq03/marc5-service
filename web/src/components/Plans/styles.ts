import styled from 'styled-components';

export const PlansContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;
  min-height: 100vh;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
