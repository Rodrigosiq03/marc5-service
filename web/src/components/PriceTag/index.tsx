import React from 'react';
import {
    PriceTagContainer,
    PriceText,
    Currency,
    Price,
    PriceUnit,
    SubscriptionText
} from './styles';
import formatPrice from '../../utils/formatPrice';

interface PriceTagProps {
    price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
    return (
        <PriceTagContainer>
            <PriceText>
                <Currency>R$</Currency>
                <Price>{formatPrice(price)}</Price>
                <PriceUnit>
                    usuário / mês
                </PriceUnit>
            </PriceText>
            <SubscriptionText>1 ano de assinatura</SubscriptionText>
        </PriceTagContainer>
    );
};

export default PriceTag;