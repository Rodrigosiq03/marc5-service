import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CoursesContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
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
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

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

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
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

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FilterOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const FilterPanel = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 300px;
  z-index: 10;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 0.2s ease-out;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    max-height: 80vh;
    margin: 0;
    border-radius: 1rem 1rem 0 0;
    overflow-y: auto;
    animation: ${slideUp} 0.3s ease-out;
  }
`;

export const FilterSection = styled.div`
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterPanelHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
  position: relative;
`;

export const FilterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.background};
  }

  input {
    flex-shrink: 0;
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid ${({ theme }) => theme.colors.input.border};
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease;

    &:checked {
      border-color: ${({ theme }) => theme.colors.green_500};
      background-color: ${({ theme }) => theme.colors.green_500};

      &::after {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background-color: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.green_500};
      outline-offset: 2px;
    }
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PriceRange = styled.div`
  padding: 0 0.5rem;
`;

export const PriceLabel = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
`;

export const PriceSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.input.background};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green_300};
    cursor: pointer;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.input.background};	
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.375rem;
  width: 100%;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.background};
  }
`;

export const ResultCount = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  margin-top: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.input.background};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const FilterActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.green_300};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
  }
`;