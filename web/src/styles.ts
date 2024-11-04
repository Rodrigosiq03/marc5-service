import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;