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

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  z-index: 10;
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

export const FilterSection = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    flex: 1;
  }
`;

export const PriceInput = styled.input`
  width: 70px;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 0.25rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;
  background-color: transparent;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PriceRange = styled.div`
  padding: 0.5rem 0.75rem;
`;

export const PriceLabel = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
`;

export const PriceSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin: 1rem 0;
`;

export const PriceSlider = styled.input.attrs<{ value: number; max: number }>((props) => ({
    type: 'range',
    min: 0,
    max: props.max || 300,
    value: props.value || 0,
  }))`
    position: relative;
    width: 100%;
    -webkit-appearance: none;
    height: 4px;
    border-radius: 2px;
    outline: none;
    background: ${({ theme, value, max }) => `
      linear-gradient(
        to right,
        ${theme.colors.green_500} 0%,
        ${theme.colors.green_500} ${(Number(value) / Number(max)) * 100}%,
        ${theme.colors.input.background} ${(Number(value) / Number(max)) * 100}%,
        ${theme.colors.input.background} 100%
      )
    `};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green_500};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green_500};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover,
  &::-moz-range-thumb:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.green_300};
  }

  &::-webkit-slider-thumb:active,
  &::-moz-range-thumb:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.input.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.375rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.border};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
  }
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.green_500};
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_300};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
  }
`;