import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
`;

export const MainContent = styled.main`
    flex: 1;
    padding: 2rem;
    min-height: 100vh;
    
    @media (max-width: 1280px) {
        margin-left: 0;
        padding: 1.5rem;
    }
`;

export const Header = styled.header`
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const PageTitle = styled.h1`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
    font-weight: 600;

    svg {
        color: ${({ theme }) => theme.colors.green_500};
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
    }
`;

export const RankingTable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.colors.input.background};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const RankingHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const PositionColumn = styled.div`
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Position = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.green_500};
    color: white;
    border-radius: 50%;
    font-weight: bold;
`;

export const NameTitle = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    flex: 1;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;

export const TeamTitle = styled.h6`
    font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
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
    width: 100px;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontsSizes.mobile.h6};
    }
`;

export const RankingItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    transition: background-color 0.2s;
    
    &:hover {
        background: ${({ theme }) => theme.colors.input.border}33;
    }
    
    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
    }
`;

export const Name = styled.span`
    flex: 1;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
`;

export const Team = styled.span`
    flex: 1;
    color: ${({ theme }) => theme.colors.primary}CC;

    @media (max-width: 576px) {
        display: none;
    }
`;

export const Exp = styled.span`
    width: 100px;
    text-align: center;
    color: ${({ theme }) => theme.colors.green_500};
    font-weight: 500;
`;