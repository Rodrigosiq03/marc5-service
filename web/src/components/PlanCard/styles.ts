import styled from 'styled-components';

export const CardContainer = styled.div`
  height: auto;
  min-height: 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: transform 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem;

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const PlanTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const PlanDescription = styled.ul`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }

  svg {
    vertical-align: bottom;
    margin-right: 0.5rem;
  }
`;

export const UpdatesSection = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.primary}; // Linha divisória
`;

export const UpdatesTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  text-align: left;
  width: 100%;
`;

export const FutureFeaturesList = styled.ul`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  list-style-type: none;
  padding: 0;
  opacity: 0.7; // Deixa um pouco mais transparente para indicar que são recursos futuros

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    vertical-align: bottom;
  }
`;

export const SubscribeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  margin-top: auto;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_300};
  }
`;
