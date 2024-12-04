import React, { useState, useCallback } from 'react';
import { UploadSimple } from '@phosphor-icons/react';
import {
  CompanyContainer,
  MainContent,
  CompanyHeader,
  PageTitle,
  FormSection,
  SectionTitle,
  FormGrid,
  FormField,
  Label,
  Input,
  TextArea,
  LogoUploadArea,
  SaveButton
} from './styles';

interface CompanyData {
  name: string;
  logo: string;
  description: string;
  sector: string;
  address: string;
  email: string;
  phone: string;
  website: string;
}

const AdminCompany: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: 'Nome da Empresa',
    logo: '',
    description: 'Breve descrição da empresa...',
    sector: 'Tecnologia',
    address: 'Endereço da empresa',
    email: 'contato@empresa.com',
    phone: '(00) 0000-0000',
    website: 'www.empresa.com'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      
      let formattedValue = numericValue;
      if (numericValue.length <= 11) {
        if (numericValue.length > 2) {
          formattedValue = `(${numericValue.slice(0, 2)})${numericValue.slice(2)}`;
        }
        if (numericValue.length > 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;
        }
      }

      setCompanyData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }

    setCompanyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyData(prev => ({
          ...prev,
          logo: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSave = () => {
    // Implementar a lógica de salvamento dos dados
  };

  return (
    <CompanyContainer>
      <MainContent>
        <CompanyHeader>
          <PageTitle>Perfil da Empresa</PageTitle>
        </CompanyHeader>

        <FormSection>
          <SectionTitle>Informações Gerais</SectionTitle>
          <FormGrid>
            <div>
              <FormField>
                <Label>Nome da Empresa</Label>
                <Input
                  type="text"
                  name="name"
                  value={companyData.name}
                  onChange={handleInputChange}
                />
              </FormField>

              <FormField>
                <Label>Setor de Atuação</Label>
                <Input
                  type="text"
                  name="sector"
                  value={companyData.sector}
                  onChange={handleInputChange}
                />
              </FormField>

              <FormField>
                <Label>Endereço</Label>
                <Input
                  type="text"
                  name="address"
                  value={companyData.address}
                  onChange={handleInputChange}
                />
              </FormField>
            </div>

            <div>
              <FormField>
                <Label>Logo da Empresa</Label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                  id="logo-upload"
                />
                <label htmlFor="logo-upload">
                  <LogoUploadArea>
                    {companyData.logo ? (
                      <img
                        src={companyData.logo}
                        alt="Logo"
                        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem' }}
                      />
                    ) : (
                      <>
                        <UploadSimple size={32} />
                        <span>Fazer upload</span>
                      </>
                    )}
                  </LogoUploadArea>
                </label>
              </FormField>
            </div>
          </FormGrid>

          <FormField>
            <Label>Descrição</Label>
            <TextArea
              name="description"
              value={companyData.description}
              onChange={handleInputChange}
            />
          </FormField>
        </FormSection>

        <FormSection>
          <SectionTitle>Dados de Contato</SectionTitle>
          <FormGrid>
            <FormField>
              <Label>E-mail Corporativo</Label>
              <Input
                type="email"
                name="email"
                value={companyData.email}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <Label>Telefone</Label>
              <Input
                type="tel"
                name="phone"
                value={companyData.phone}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <Label>Website (opcional)</Label>
              <Input
                type="url"
                name="website"
                value={companyData.website}
                onChange={handleInputChange}
              />
            </FormField>
          </FormGrid>
        </FormSection>

        <SaveButton onClick={handleSave}>
          Salvar Alterações
        </SaveButton>
      </MainContent>
    </CompanyContainer>
  );
};

export default AdminCompany;
