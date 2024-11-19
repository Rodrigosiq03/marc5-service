import styled from 'styled-components';

export const PlansContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;
  min-height: 100vh;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const PlanGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;

  & > * {
    flex: 1;
  }
`;