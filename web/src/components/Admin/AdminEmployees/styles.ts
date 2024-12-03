import styled, { css, RuleSet } from "styled-components";
import {
  ButtonProps,
  ButtonVariant,
  ProgressBarProps,
  StatusBadgeProps,
} from "../../../types/button";

const buttonBase = css`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const buttonSizes: Record<string, RuleSet<object>> = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
  `,
};

const buttonVariants: Record<ButtonVariant, RuleSet<object>> = {
  primary: css`
    background: ${({ theme }) => theme.colors.green_500};
    color: ${({ theme }) => theme.fontsSizes.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.green_300};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.input.background};
    color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.input.background_hover};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.red_500};
    color: ${({ theme }) => theme.fontsSizes.colors.white};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
};

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
`;

export const EmployeeCard = styled.div`
  background: ${({ theme }) => theme.colors.input.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const EmployeeList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
`;

export const EmployeeInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const EmployeeName = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
`;

export const EmployeeMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
`;

export const EmployeeMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    flex-shrink: 0;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  white-space: nowrap;

  ${({ theme, $status }) => {
    console.log('Theme structure:', JSON.stringify(theme, null, 2));
    switch ($status) {
      case "Online":
      case "active":
        return css`
          background: ${({ theme }) => theme.colors.badges.success.background};
          color: ${({ theme }) => theme.colors.badges.success.color};
        `;
      case "Offline":
        return css`
          background: ${({ theme }) => theme.colors.badges.neutral.background};
          color: ${({ theme }) => theme.colors.badges.neutral.color};
        `;
      case "inactive":
        return css`
          background: ${({ theme }) => theme.colors.badges.danger.background};
          color: ${({ theme }) => theme.colors.badges.danger.color};
        `;
      default:
        return '';
    }
  }}
`;

export const EmployeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.input.background};
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.input.background};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const DetailSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  margin: 0 0 1rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};

    &:disabled {
      background: ${({ theme }) => theme.colors.input.border};
      cursor: not-allowed;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.input.background};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => $progress}%;
    background: ${({ theme }) => theme.colors.green_500};
    transition: width 0.3s ease;
  }
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
  ${buttonBase}

  ${({ size = "medium" }) => buttonSizes[size]}
  ${({ variant = "primary" }) => buttonVariants[variant]}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;

  select {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    background: ${({ theme }) => theme.colors.input.background};
    color: ${({ theme }) => theme.colors.primary};
    min-width: 150px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.input.border_hover};
      background: ${({ theme }) => theme.colors.input.background_hover};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.green_500};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;

export const FilterButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.green_500 : theme.colors.input.background};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.fontsSizes.colors.white : theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.green_300 : theme.colors.input.background_hover};
  }
`;