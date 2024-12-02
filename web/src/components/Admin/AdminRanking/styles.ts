import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
    }
`;

export const RankingTable = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const RankingHeader = styled.div`
    background: ${({ theme }) => theme.colors.input.background};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.75rem 0.75rem 0 0;
`;

export const NameTitle = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding: 0 1rem;
    flex: 1;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;

export const TeamTitle = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding: 0 1rem;
    flex: 1;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }

    @media (max-width: 576px) {
        display: none;
    }
`;

export const ExpTitle = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;

export const RankingItem = styled.div`
    background: ${({ theme }) => theme.title === 'light' 
        ? '#F5F5F5'  // Light gray for light mode
        : theme.colors.input.background+'99'  // Darker gray for dark mode
    };
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 0;
    align-items: center;
    
    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
    }

    &:last-child {
        border-radius: 0 0 0.75rem 0.75rem;
    }
`;

export const PositionColumn = styled.div`
    width: 70px;

    @media (max-width: 768px) {
        width: 45px;
    }
`;

export const Position = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
    ${({ children }) => {
        if (children === 1) return 'background-color: #FFD700;'; // Gold
        if (children === 2) return 'background-color: #C0C0C0;'; // Silver
        if (children === 3) return 'background-color: #CD7F32;'; // Bronze
        return '';
    }}
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
        width: 20px;
        height: 20px;
    }
`;

export const Name = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    padding: 0 1rem;
    flex: 1;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;

export const Team = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    padding: 0 1rem;
    flex: 1;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }

    @media (max-width: 576px) {
        display: none;
    }
`;

export const Exp = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;