import styled from 'styled-components';

export const CompanyContainer = styled.div`
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

export const CompanyHeader = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsSizes.mobile.h3};
  }
`;

export const FormSection = styled.section`
  background: ${({ theme }) => theme.colors.input.background};
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsSizes.desktop.h4};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  color: ${({ theme }) => theme.colors.primary};
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green_500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500}33;
  }
`;

export const LogoUploadArea = styled.div`
  width: 200px;
  height: 200px;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px dashed ${({ theme }) => theme.colors.input.border};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green_500};
  }
`;

export const SaveButton = styled.button`
  background: ${({ theme }) => theme.colors.green_500};
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-size: ${({ theme }) => theme.fontsSizes.desktop.p};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green_300};
  }
`;
