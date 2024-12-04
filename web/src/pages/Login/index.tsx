import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon, Sun, Warning } from "@phosphor-icons/react";
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
  email: string;
  password: string;
}

const LoginPage: React.FC<Props> = ({ toggleTheme, onClick }) => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState<FieldError>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({ email: "", password: "" });
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        setError("Por favor, preencha todos os campos");
        setIsLoading(false);
        return;
      }

      await signIn({
        email: formData.email,
        password: formData.password,
      });
      
      navigate("/");
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      const errorMessage = err.response?.data?.message || "";

      if (errorMessage.includes("Usuário não cadastrado")) {
        setFieldErrors((prev) => ({
          ...prev,
          email: "Usuário não cadastrado",
        }));
      } else if (errorMessage.includes("password não é válido")) {
        setFieldErrors((prev) => ({ ...prev, password: "Senha inválida" }));
      } else {
        setError(
          "Não foi possível realizar o login. Por favor, tente novamente mais tarde."
        );
      }
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
          <Title>Conecte-se já!</Title>
          <LoginForm onSubmit={handleSubmit}>
            {error && (
              <ErrorMessage>
                <Warning size={20} weight="bold" />
                {error}
              </ErrorMessage>
            )}
            <LoginText>E-mail</LoginText>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-label="Email"
              required
              disabled={isLoading}
              autoComplete="email"
              $hasError={!!fieldErrors.email}
            />
            {fieldErrors.email && <InputError>{fieldErrors.email}</InputError>}

            <LoginText>Senha</LoginText>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              aria-label="Senha"
              required
              disabled={isLoading}
              autoComplete="current-password"
              $hasError={!!fieldErrors.password}
            />
            {fieldErrors.password && (
              <InputError>{fieldErrors.password}</InputError>
            )}

            <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
            <SubmitButton
              type="submit"
              disabled={isLoading}
              onClick={onClick}
              aria-busy={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </SubmitButton>
          </LoginForm>
          <DividerContainer>
            <DivorOrContent>
              <DividerLine />
              <span>Ou</span>
              <DividerLine />
            </DivorOrContent>
            <SignUpLink onClick={() => navigate("/signup")}>
              Ainda não tem uma conta? Cadastre-se
            </SignUpLink>
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
