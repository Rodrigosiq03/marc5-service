import styled from 'styled-components';

export const PriceTagContainer = styled.div`
  width: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PriceText = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  margin: 0.5rem;
  display: flex;
  align-items: baseline;
`;

export const Currency = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h2};
  font-weight: bold;
`;

export const PriceUnit = styled.span`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: auto;
  width: 50px;
`;

export const SubscriptionText = styled.span`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;