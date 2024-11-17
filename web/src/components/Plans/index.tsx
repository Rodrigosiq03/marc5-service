import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PlanCard from '../PlanCard';
import { PlansContainer, SectionTitle, PlanGrid } from './styles';

interface PlanType {
  title: string;
  price: number;
  description: string[];
}

const PlansScreen: React.FC = () => {
  useContext(ThemeContext);

  const plans: PlanType[] = [
    {
      title: 'Starter',
      price: 7.50,
      description: [
        'Limite de até 50 colaboradores.',
        'Limite de 5 equipes.',
        'Suporte básico.'
      ],
    },
    {
      title: 'Pro',
      price: 15.00,
      description: [
        'Limite de até 100 colaboradores.',
        'Limite de 10 equipes.',
        'Suporte prioritário.',
      ],
    },
    {
      title: 'Business',
      price: 25.00,
      description: [
        'Colaboradores ilimitados.',
        'Equipes ilimitadas.',
        'Suporte 24/7.',
      ],
    },
  ];

  return (
    <PlansContainer>
      <SectionTitle>Planos</SectionTitle>
      <PlanGrid>
        {plans.map((plan, index) => (
          <PlanCard key={`plan-${index}`} {...plan} />
        ))}
      </PlanGrid>
    </PlansContainer>
  );
};

export default PlansScreen;
