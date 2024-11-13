import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h2};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;