import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "danger" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

interface CourseImageProps {
  imageUrl: string;
}

interface VisibilityBadgeProps {
  visibility: "Public" | "Private";
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
      background: ${({ theme }) => theme.colors.red_300};
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

export const CourseList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const CourseCard = styled.div`
  background: ${({ theme }) => theme.colors.input.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.input.background_hover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseImage = styled.div<CourseImageProps>`
  height: 160px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.input.border};
`;

export const CourseInfo = styled.div`
  padding: 1rem;
`;

export const CourseTitle = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
`;

export const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  margin: 0 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CourseMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const VisibilityBadge = styled.span<VisibilityBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};

  ${({ visibility, theme }) =>
    visibility === "Public"
      ? css`
          background: ${theme.colors.badges.success.background};
          color: ${theme.colors.badges.success.color};
        `
      : css`
          background: ${theme.colors.badges.neutral.background};
          color: ${theme.colors.badges.neutral.color};
        `}
`;

export const PriceTag = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green_500};
`;

export const CourseActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const ActionButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ variant = "secondary" }) => buttonVariants[variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
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
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
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
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

    &:disabled {
      background: ${({ theme }) => theme.colors.input.border};
      cursor: not-allowed;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.input.border_hover};
      outline: none;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
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
  background: ${({ theme }) => theme.colors.background};

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
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

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};

  ${({ variant = "primary" }) => buttonVariants[variant]}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
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
      font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
    }

    p {
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
    }

    div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
