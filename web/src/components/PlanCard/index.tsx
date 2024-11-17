import React from 'react';
import {
  CardContainer,
  PlanTitle,
  PlanDescription,
  SubscribeButton,
} from './styles';
import PriceTag from '../PriceTag';

interface PlanCardProps {
  title: string;
  price: number;
  description: string[];
}


const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description
}) => {
  return (
    <CardContainer>
      <PlanTitle>{title}</PlanTitle>
      <PriceTag price={price} />
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
