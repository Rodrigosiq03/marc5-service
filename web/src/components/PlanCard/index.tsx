import React from 'react';
import {
  CardContainer,
  PriceTag,
  PlanTitle,
  PlanDescription,
  SubscribeButton,
} from './styles';

interface PlanCardProps {
  title: string;
  price: string;
  description: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, description }) => {
  return (
    <CardContainer>
      <PlanTitle>{title}</PlanTitle>
      <PriceTag>{price}</PriceTag>
      <PlanDescription>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </PlanDescription>
      <SubscribeButton>ASSINAR</SubscribeButton>
    </CardContainer>
  );
};

export default PlanCard;
