import styled, { css } from 'styled-components';
import { ButtonProps } from '../../../../types/button';

interface VideoItemProps {
  isSelected: boolean;
}

const buttonVariants = {
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
  z-index: 40;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CloseButton = styled.button`
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

export const ModalBody = styled.div`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.input.background};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.input.placeholder};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.input.background_hover};
      border-color: ${({ theme }) => theme.colors.input.border_hover};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.green_500};
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}20;
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.input.border};
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ variant = 'primary' }) => buttonVariants[variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const IconButton = styled(Button)`
  padding: 0.5rem;
  min-width: 2rem;
  height: 2.5rem;
`;

export const VideoSelectorModal = styled(Modal)`
  z-index: 50;
`;

export const VideoSelectorHeader = styled(ModalHeader)`
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  }
`;

export const VideoList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

export const VideoItem = styled.div<VideoItemProps>`
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ isSelected, theme }) => isSelected ? theme.colors.green_500 + '20' : 'transparent'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
  }

  h4 {
    margin: 0 0 0.25rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
    opacity: 0.8;
  }
`;

export const SubcategorySection = styled.div`
  margin-bottom: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    input[type="checkbox"] {
      width: auto;
    }

    label {
      margin: 0;
      cursor: pointer;
    }
  }
`;

export const ContentList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  overflow: hidden;
`;

export const ContentItem = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h4 {
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
      opacity: 0.8;
    }
  }
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const VideoSelectorFooter = styled(ModalFooter)``;

export const VideoSelectorTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
`;

export const VideoTitle = styled.h4`
  margin: 0 0 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const VideoDuration = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  opacity: 0.8;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ContentTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const SubcategoryTitle = styled.h5`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const VideoActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const VideoName = styled.h6`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const VideoDurationText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  opacity: 0.8;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.input.border};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.input.border};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.input.border};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const SubcategoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.input.background};
  border-radius: 4px 4px 0 0;
`;

export const SubcategoryLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RadioInput = styled.input`
  width: auto;
`;

export const RadioLabel = styled.label`
  margin: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
`;

export const NewSubcategoryContainer = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const NewSubcategoryInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.border_hover};
    outline: none;
  }
`;

export const SubcategoryGroup = styled.section`
  margin-bottom: 1.5rem;
`;

export const VideoListItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const ContentGroup = styled.section`
  margin-top: 2rem;
`;

export const SubcategorySelector = styled.div`
  margin-top: 1rem;
`;

export const SubcategoryOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.input.background};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

    &::placeholder {
      color: ${({ theme }) => theme.colors.input.placeholder};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.input.background_hover};
      border-color: ${({ theme }) => theme.colors.input.border_hover};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.input.border_hover};
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }
`;

export const SearchInput = styled(Input)`
  padding-right: 2.5rem;
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  display: flex;
  align-items: center;
`;