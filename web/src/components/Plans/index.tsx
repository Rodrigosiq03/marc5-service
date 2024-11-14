import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PlanCard from '../PlanCard';
import { PlansContainer, SectionTitle, PlanGrid } from './styles';

interface PlanType {
  title: string;
  price: string;
  description: string[];
}

const PlansScreen: React.FC = () => {
  useContext(ThemeContext);

  const plans: PlanType[] = [
    {
      title: 'Starter',
      price: 'R$ 7,50 usuário/mês',
      description: [
        'Limite de até 50 colaboradores.',
        'Limite de 5 equipes.',
        'Limite de até 50 colaboradores.'
      ],
    },
    {
      title: 'Pro',
      price: 'R$ 15,00 usuário/mês',
      description: [
        'Limite de até 100 colaboradores.',
        'Limite de 10 equipes.',
        'Suporte prioritário.',
      ],
    },
    {
      title: 'Business',
      price: 'R$ 25,00 usuário/mês',
      description: [
        'Colaboradores ilimitados.',
        'Equipes ilimitadas.',
        'Suporte 24/7.',
        'Gerenciamento avançado de permissões.',
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
