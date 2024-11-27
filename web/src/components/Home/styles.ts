import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const HeaderTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  margin-bottom: 1.5rem;
  line-height: 1.2;

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const HeaderDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  margin-bottom: 2rem;
  line-height: 1.5;
  padding-left: 0.5rem;

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
  }
`;

export const DifferentialsTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  font-weight: bold;
  line-height: 1.2;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
  }
`;

export const DifferentialsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DifferentialItem = styled.li`
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: ${({ theme }) => theme.colors.input.background};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.input.background_hover};
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const DifferentialTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
  }
`;

export const DifferentialDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p_small};
  }
`;

export const PartnersSection = styled.div`
  margin-top: 3rem;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const PartnersTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: center;
  font-weight: bold;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const PartnersDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
    margin-bottom: 2rem;
  }
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const PartnerCard = styled.div`
  background-color: ${({ theme }) => theme.colors.input.background};
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.input.background_hover};
  }
`;

export const PartnerImage = styled.img`
  max-height: 48px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;

  ${PartnerCard}:hover & {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }
`;

export const PartnerName = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p_small};
  }
`;

export const HomeContainer = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1280px) {
    margin-left: 0;
    padding: 1rem;
  }
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
  position: relative;
  min-height: 200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CourseGridLoadingWrapper = styled.div`
  position: absolute;
  inset: 0;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 200px;
`;