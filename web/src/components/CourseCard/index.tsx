import React from 'react';
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
  Deadline
} from './styles';

interface CourseCardProps {
  title: string;
  description: string;
  deadline?: string;
  imageUrl?: string;
  instructor?: string;
  category?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  deadline, 
  imageUrl, 
  instructor,
  category
}) => {
  return (
    <CardContainer>
      {imageUrl && (
        <ImageContainer>
          <CourseImage src={imageUrl} alt={`${title} course thumbnail`} />
        </ImageContainer>
      )}
      
      <CardContent>
        {category && (
          <CategoryBadge>{category}</CategoryBadge>
        )}
        
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
        
        <CardFooter>
          {instructor && (
            <InstructorName>{instructor}</InstructorName>
          )}
          {deadline && (
            <Deadline>Até {deadline}</Deadline>
          )}
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default CourseCard;