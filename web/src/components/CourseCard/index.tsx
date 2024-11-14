import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardContainer,
  ImageContainer,
  CourseImage,
  CardContent,
  CategoryBadge,
  CourseTitle,
  CourseDescription,
  CardFooter,
  InstructorName,
  Price,
  CardWrapper
} from './styles';

interface CourseCardProps {
  _id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
  creator?: string;
  category?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  _id,
  title, 
  description, 
  price, 
  imageUrl, 
  creator,
  category
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${_id}`);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardContainer>
        {imageUrl && (
          <ImageContainer>
            <CourseImage src={imageUrl} alt={`${title} thumbnail`} />
          </ImageContainer>
        )}
        
        <CardContent>
          {category && (
            <CategoryBadge>{category}</CategoryBadge>
          )}
          
          <CourseTitle>{title}</CourseTitle>
          <CourseDescription>{description}</CourseDescription>
          
          <CardFooter>
            {creator && (
              <InstructorName>{creator}</InstructorName>
            )}
            {price && (
              <Price>Até {price}</Price>
            )}
          </CardFooter>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default CourseCard;