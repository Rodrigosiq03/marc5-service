import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon, Sun } from "@phosphor-icons/react";
import {
  Container,
  LeftSection,
  RightSection,
  LoginForm,
  LoginText,
  ThemeSwitcher,
  Input,
  ForgotPassword,
  SubmitButton,
  Logo,
  Title,
  FormContainer,
  WelcomeImage,
  WelcomeText,
  DividerContainer,
  DivorOrContent,
  DividerLine,
  SignUpLink,
} from "./styles";

interface Props {
  toggleTheme: () => void;
  onClick: () => void;
}

const LoginPage: React.FC<Props> = ({ toggleTheme, onClick }) => {
  const theme = useContext(ThemeContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <LeftSection>
        <ThemeSwitcher>
          <button
            onClick={toggleTheme}
            aria-label={`Alternar tema - Tema atual: ${theme?.title}`}
          >
            {theme?.title === "light" ? <Moon size={32} /> : <Sun size={32} />}
          </button>
        </ThemeSwitcher>
        <FormContainer>
          <Logo>
            <img src="/marc5-green.png" alt="Logo MARC5" />
          </Logo>
          <Title>Conecte-se já!</Title>
          <LoginForm onSubmit={handleSubmit}>
            <LoginText>E-mail</LoginText>
            <Input type="email" aria-label="Email" required />
            <LoginText>Senha</LoginText>
            <Input type="password" aria-label="Senha" required />
            <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
            <SubmitButton type="submit" onClick={onClick}>
              Entrar
            </SubmitButton>
          </LoginForm>
          <DividerContainer>
            <DivorOrContent>
              <DividerLine />
              <span>Ou</span>
              <DividerLine />
            </DivorOrContent>
            <SignUpLink href="/signup">Ainda não tem uma conta? Cadastre-se</SignUpLink>
          </DividerContainer>
        </FormContainer>
      </LeftSection>
      <RightSection>
        <WelcomeImage src="/icon_login.png" alt="Icon de boas-vindas" />
        <WelcomeText>
          <span>Facilitando a aprendizagem</span>
          <span>através da tecnologia!</span>
        </WelcomeText>
      </RightSection>
    </Container>
  );
};

export { LoginPage };
