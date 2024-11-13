import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: transparent;
  transition: transform 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.colors.green_500};
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  font-weight: 500;
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 0.25rem;
`;

export const CourseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const CourseDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InstructorName = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Deadline = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p_small};
  color: ${({ theme }) => theme.colors.primary};
`;