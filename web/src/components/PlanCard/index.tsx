import React from 'react';
import {
  CardContainer,
  PlanTitle,
  PlanDescription,
  SubscribeButton,
} from './styles';
import PriceTag from '../PriceTag';
import { Check } from '@phosphor-icons/react';
import { ThemeContext } from 'styled-components';

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
  const theme = React.useContext(ThemeContext);
  return (
    <CardContainer>
      <PlanTitle>{title}</PlanTitle>
      <PriceTag price={price} />
      <PlanDescription>
        {description.map((item, index) => (
          <li key={index}><Check color={theme?.colors.icons.color}/>{item}</li>
        ))}
      </PlanDescription>
      <SubscribeButton>ASSINAR</SubscribeButton>
    </CardContainer>
  );
};

export default PlanCard;
