import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PlanCard, { PlanCardProps } from '../PlanCard';
import { PlansContainer, SectionTitle, PlanGrid } from './styles';

const PlansScreen: React.FC = () => {
  useContext(ThemeContext);

  const plans: PlanCardProps[] = [
    {
      title: 'Starter',
      price: 7.50,
      description: [
        'Mínimo de 10 colaboradores.',
        'Limite de até 50 colaboradores.',
        'Limite de 5 equipes.',
        'Limite de 200GB de armazenamento.',
        'Gamificação via XP.',
        'Suporte básico.'
      ],
      futureUpdates: [
        'Criação de formações personalizadas',
        'Integração com ferramentas de terceiros.',
        'Ranking de colaboradores.',
        'Acesso a relatórios de desempenho mensais.',
      ],
    },
    {
      title: 'Pro',
      price: 15.00,
      description: [
        'Mínimo de 10 colaboradores.',
        'Limite de até 100 colaboradores.',
        'Limite de 10 equipes.',
        'Limite de 500GB de armazenamento.',
        'Gamificação via XP.',
        'Suporte prioritário.',
      ],
      futureUpdates: [
        'Criação de formações personalizadas.',
        'Integração com ferramentas de terceiros.',
        'Acesso a relatórios de desempenho mensais.',
        'Acesso a relatórios de desempenho semanais.',
        'Badges por conquista ou XP.',
        'Ranking de colaboradores.',
      ],
    },
    {
      title: 'Business',
      price: 'Sob consulta',
      description: [
        'Colaboradores ilimitados.',
        'Equipes ilimitadas.',
        'Limite de 2TB de armazenamento.',
        'Gamificação via XP.',
        'Suporte 24/7.',
      ],
      futureUpdates: [
        'Criação de formações personalizadas.',
        'Integração com ferramentas de terceiros.',
        'Acesso a relatórios de desempenho mensais.',
        'Acesso a relatórios de desempenho semanais.',
        'Acesso a webinars exclusivos.',
        'Badges personalizados.',
        'Ranking de colaboradores.',
        'Boost de XP para colaboradores.',
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