import { styled } from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row; /* Change to row to place items side by side */
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem;
`;