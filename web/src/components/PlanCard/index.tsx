import React from 'react';
import {
  CardContainer,
  PlanTitle,
  PlanDescription,
  SubscribeButton,
  FutureFeaturesList,
  UpdatesSection,
  UpdatesTitle,
} from './styles';
import PriceTag from '../PriceTag';
import { Check, Clock } from '@phosphor-icons/react';
import { ThemeContext } from 'styled-components';

export interface PlanCardProps {
  title: string;
  price: number | 'Sob consulta';
  description: string[];
  futureUpdates: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  futureUpdates
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
      <UpdatesSection>
        <UpdatesTitle>Em breve</UpdatesTitle>
        <FutureFeaturesList>
          {futureUpdates.map((item, index) => (
            <li key={index}>
              <Clock color={theme?.colors.icons.color} />
              {item}
            </li>
          ))}
        </FutureFeaturesList>
      </UpdatesSection>
      <SubscribeButton>ASSINAR</SubscribeButton>
    </CardContainer>
  );
};

export default PlanCard;