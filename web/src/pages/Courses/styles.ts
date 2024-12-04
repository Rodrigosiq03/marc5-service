import styled from "styled-components";

export const CoursesContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h2};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h2};
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 250px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  position: relative;

  @media (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  grid-column: 1 / -1;
  min-height: 400px;
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  min-height: 400px;
  padding: 2rem;

  p {
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  }
`;

export const CardWrapper = styled.div`
  background-color: transparent;
  border: none;
`;

export const CardContent = styled.div`
  padding: 0;
`;

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }
`;

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.green_500};
    color: ${({ theme }) => theme.colors.green_500};
    background: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:not(:disabled):hover svg {
    transform: rotate(180deg);
  }
`;

export const ResultCount = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  margin-top: 1rem;
`;