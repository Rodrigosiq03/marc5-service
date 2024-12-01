import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Moon, Sun, GithubLogo } from "@phosphor-icons/react";
import {
  Container,
  LeftSection,
  RightSection,
  SignUpForm,
  SignUpText,
  ThemeSwitcher,
  Input,
  SubmitButton,
  Logo,
  Title,
  FormContainer,
  WelcomeImage,
  WelcomeText,
  DividerContainer,
  DivorOrContent,
  DividerLine,
  IconContainer,
  IconButton,
  FormGroup,
  ButtonContainer,
} from './styles';

interface Props {
  toggleTheme: () => void;
  onClick: () => void;
}

const SignUpPage: React.FC<Props> = ({ toggleTheme, onClick }) => {
  const theme = useContext(ThemeContext);
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]') as HTMLInputElement;
    if (confirmPasswordInput) {
      confirmPasswordInput.pattern = e.target.value;
    }
  };

  return (
    <Container>
      <LeftSection>
        <ThemeSwitcher>
          <button
            onClick={toggleTheme}
            aria-label={`Alternar tema - Tema atual: ${theme?.title}`}
          >
            {theme?.title === 'light' ? <Moon size={32} /> : <Sun size={32} />}
          </button>
        </ThemeSwitcher>
        <FormContainer>
          <Logo>
            <img src="/marc5-green.png" alt="Logo MARC5" />
          </Logo>
          <Title>Crie sua conta</Title>
          <SignUpForm onSubmit={handleSubmit}>
            <FormGroup>
              <SignUpText>
                Nome
              </SignUpText>
              <Input
                type="text"
                aria-label="Nome"
                required
              />
            </FormGroup>
            <FormGroup>
              <SignUpText>
                E-mail
              </SignUpText>
              <Input
                type="email"
                aria-label="Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <SignUpText>
                Senha
              </SignUpText>
              <Input
                type="password"
                name="password"
                aria-label="Senha"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <FormGroup>
              <SignUpText>
                Confirmar senha
              </SignUpText>
              <Input
                type="password"
                name="confirmPassword"
                aria-label="Confirmar Senha"
                required
                pattern={password}
                title="As senhas devem ser iguais."
              />
            </FormGroup>
            <ButtonContainer>
              <SubmitButton type="submit" onClick={onClick}>
                Cadastrar-se
              </SubmitButton>
            </ButtonContainer>
          </SignUpForm>
          <DividerContainer>
            <DivorOrContent>
              <DividerLine />
              <span>Ou</span>
              <DividerLine />
            </DivorOrContent>
            <IconContainer>
              <IconButton>
                <GithubLogo size={32} color={theme?.colors.icons.color} />
              </IconButton>
              <IconButton>
                <img src="/google_icon.png" alt="Google Icon" />
              </IconButton>
            </IconContainer>
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

export { SignUpPage };