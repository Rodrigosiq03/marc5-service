import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Course } from "../../hooks/useCoursesFilter";
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


const CourseCard: React.FC<Course> = ({ 
  _id,
  title,
  description,
  creator,
  imageUrl,
  category,
  price,
  date,
  subscribers,
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
              <Price>{price}</Price>
            )}
          </CardFooter>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default CourseCard;