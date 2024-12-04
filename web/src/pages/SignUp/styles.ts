import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

export const LeftSection = styled.main`
  width: 60%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.green_500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ThemeSwitcher = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.icons.color};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors.icons.theme_switcher_hover};
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  margin: 5rem auto;
  gap: 2rem;
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 350px;
  margin-bottom: 3.5rem;
  align-self: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

export const SignUpText = styled.p`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h6};
  margin: 0.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.background_hover};
    border-color: ${({ theme }) => theme.colors.input.border_hover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_300};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  height: 4rem;
  margin-top: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h5};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_300};
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
`;

export const DivorOrContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.875rem;
    white-space: nowrap;
  }
`;

export const DividerLine = styled.div`
  height: 1px;
  background-color: #13bb81;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid #1db954;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #13bb81;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const WelcomeImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 2rem;
`;

export const WelcomeText = styled.h2`
  color: ${({ theme }) => theme.fontsSizes.colors.white};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  line-height: 1.4;
  max-width: 80%;
  text-align: center;

  span {
    display: block;
  }

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h4};
  }
`;

export const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.green_300};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  text-align: center;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.2s ease-in-out;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green_500};
  }
`;
