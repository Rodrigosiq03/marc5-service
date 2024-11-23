import styled from "styled-components";

interface CardProps {
  $isClickable: boolean;
}

export const CardWrapper = styled.div<CardProps>`
  height: 100%;
  position: relative;
  
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
    outline-offset: 2px;
    border-radius: 0.5rem;
  }
`;

export const CardContainer = styled.article`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 400px;
  display: flex;
  flex-direction: column;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      border-color: ${({ theme }) => theme.colors.green_500};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const CardButton = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  border: none;
  background: transparent;

  &:focus-visible {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  min-height: 180px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary}20;
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (hover: hover) {
    ${CardContainer}:hover & {
      transform: scale(1.05);
    }
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 180px);
`;

export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  font-weight: 500;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 1rem;
  width: fit-content;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p_small};
  }
`;

export const CourseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 0.75rem 0;
  min-height: fit-content;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h5};
  }
`;

export const CourseDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary}CC;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  margin: 0;
  flex: 1;
  min-height: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primary}20;
`;

export const InstructorName = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p_small};
  }
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.p_small};
  }
`;