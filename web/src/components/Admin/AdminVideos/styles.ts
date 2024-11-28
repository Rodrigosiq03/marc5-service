import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'danger' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

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

const buttonSizes = {
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
  `
};

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
  `
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

export const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const VideoList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const VideoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const VideoThumbnail = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: ${({ theme }) => theme.colors.input.border};
`;

export const VideoInfo = styled.div`
  padding: 1rem;
`;

export const VideoTitle = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
`;

export const VideoMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
`;

export const VideoActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
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

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  input, textarea {
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

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
  ${buttonBase}
  
  ${({ size = 'medium' }) => buttonSizes[size]}
  ${({ variant = 'primary' }) => buttonVariants[variant]}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`;

export const DeleteConfirmation = styled(Modal)`
  > div {
    background: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;

    h3 {
      margin: 0 0 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
`;