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
    price: number | 'Sob consulta';
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
    const isConsultation = price === 'Sob consulta';
    
    return (
        <PriceTagContainer>
            <PriceText>
                {isConsultation ? (
                    <Price isConsultation>{price}</Price>
                ) : (
                    <>
                        <Currency>R$</Currency>
                        <Price>{formatPrice(price)}</Price>
                        <PriceUnit>
                            usuário / mês
                        </PriceUnit>
                    </>
                )}
            </PriceText>
            {!isConsultation && (
                <SubscriptionText>1 ano de assinatura</SubscriptionText>
            )}
        </PriceTagContainer>
    );
};

export default PriceTag;