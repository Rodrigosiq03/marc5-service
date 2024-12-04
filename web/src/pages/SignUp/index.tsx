import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon, Sun, Warning } from "@phosphor-icons/react";
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
  FormGroup,
  ButtonContainer,
  LoginLink,
  ErrorMessage,
  InputError,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  toggleTheme: () => void;
  onClick: () => void;
}

interface FieldError {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC<Props> = ({ toggleTheme, onClick }) => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState<FieldError>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsLoading(true);

    try {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Por favor, preencha todos os campos");
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setFieldErrors((prev) => ({
          ...prev,
          confirmPassword: "As senhas devem ser iguais",
        }));
        setIsLoading(false);
        return;
      }

      await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        courses: [],
      });

      navigate("/login");
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      const errorMessage = err.response?.data?.message || "";

      console.error("Error during sign up:", errorMessage);
      setError(
        "Não foi possível realizar o cadastro. Por favor, tente novamente mais tarde."
      );
    } finally {
      setIsLoading(false);
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
            {theme?.title === "light" ? <Moon size={32} /> : <Sun size={32} />}
          </button>
        </ThemeSwitcher>
        <FormContainer>
          <Logo>
            <img src="/marc5-green.png" alt="Logo MARC5" />
          </Logo>
          <Title>Crie sua conta</Title>
          <SignUpForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                $hasError={!!fieldErrors.name}
              />
              {fieldErrors.name && <InputError>{fieldErrors.name}</InputError>}
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                $hasError={!!fieldErrors.email}
              />
              {fieldErrors.email && <InputError>{fieldErrors.email}</InputError>}
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                $hasError={!!fieldErrors.password}
              />
              {fieldErrors.password && <InputError>{fieldErrors.password}</InputError>}
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                $hasError={!!fieldErrors.confirmPassword}
              />
              {fieldErrors.confirmPassword && (
                <InputError>{fieldErrors.confirmPassword}</InputError>
              )}
            </FormGroup>

            {error && (
              <ErrorMessage>
                <Warning size={20} />
                {error}
              </ErrorMessage>
            )}

            <ButtonContainer>
              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </SubmitButton>
            </ButtonContainer>
          </SignUpForm>
          <DividerContainer>
            <DivorOrContent>
              <DividerLine />
              <span>Ou</span>
              <DividerLine />
            </DivorOrContent>
            <LoginLink onClick={() => navigate("/login")}>
              Já possui uma conta? Faça login!
            </LoginLink>
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
