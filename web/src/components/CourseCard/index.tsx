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
  _id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
  creator?: string;
  category?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  price, 
  imageUrl, 
  creator,
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
          {creator && (
            <InstructorName>{creator}</InstructorName>
          )}
          {price && (
            <Deadline>Até {price}</Deadline>
          )}
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default CourseCard;