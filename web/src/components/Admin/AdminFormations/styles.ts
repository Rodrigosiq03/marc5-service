import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
    }
`;

export const Image = styled.img`
    width: 50%;

    @media (max-width: 768px) {
        width: 80%;
    }
`;