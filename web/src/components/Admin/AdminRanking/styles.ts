import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
    }
`;

export const RankingContainer = styled.div`
    background: ${({ theme }) => theme.colors.input.background};
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    gap: 1rem;
`;

export const RankingItem = styled.div`
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        border-color: ${({ theme }) => theme.colors.input.border_hover};
    }

    @media (max-width: 768px) {    
        padding: 1rem;
    }
`;