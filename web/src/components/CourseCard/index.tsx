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
  CardWrapper,
  CardButton
} from './styles';

const formatPrice = (price: string) => {
  return price.replace(/^R\$\s*/, '').trim();
};

const CourseCard: React.FC<Course> = ({ 
  _id,
  title,
  description,
  creator,
  imageUrl,
  category,
  price,
}) => {
  const navigate = useNavigate();
  const formattedPrice = formatPrice(price);

  const handleClick = () => {
    navigate(`/cursos/${_id}/`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <CardWrapper $isClickable={true}>
      <CardContainer>
        <CardButton
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-label={`Ver detalhes do curso ${title}`}
        />
        
        {imageUrl && (
          <ImageContainer>
            <CourseImage 
              src={imageUrl} 
              alt={`Imagem do curso ${title}`}
              role="presentation"
              loading="lazy"
            />
          </ImageContainer>
        )}
        
        <CardContent>
          {category && (
            <CategoryBadge role="status">{category}</CategoryBadge>
          )}
          
          <CourseTitle>{title}</CourseTitle>
          <CourseDescription>{description}</CourseDescription>
          
          <CardFooter>
            {creator && (
              <InstructorName>{creator}</InstructorName>
            )}
            {price && (
              <Price aria-label={`Preço: ${formattedPrice} reais`}>
                {price}
              </Price>
            )}
          </CardFooter>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default CourseCard;