import React from "react";
import CourseCard from "../CourseCard";
import {
  HomeContainer,
  Section,
  SectionTitle,
  CourseGrid,
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  PartnersSection,
  PartnersTitle,
  PartnersGrid,
  PartnerImage,
  DifferentialDescription,
  DifferentialItem,
  DifferentialsList,
  DifferentialTitle,
} from "./styles";

const HomeScreen: React.FC = () => {
  const partners = [
    { name: "MetLife", logo: "/empresa.png" },
    { name: "Tekno", logo: "/empresa.png" },
    { name: "Partner 3", logo: "/empresa.png" },
    { name: "Partner 4", logo: "/empresa.png" },
  ];

  const recentCourses = [
    {
      _id: "asdasdasd",
      title: "Deep Learning",
      description:
        "O curso abrange todas as técnicas mais atualizadas de DeepLearning do mercado",
      creator: "Rodrigo Siqueira",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 200,00",
      date: "28/11/24",
      subscribers: 100,
    },
    {
      _id: "sdasojdoas",
      title: "Front-End",
      description:
        "O curso abrange a linguagem Javascript juntamente da Framework React",
      creator: "Rafael Bietti",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 200,00",
      date: "28/11/24",
      subscribers: 100,
    },
  ];

  const newContent = [
    {
      _id: "j3k4j3k4j3k4j3k4j3k4",
      title: "Desenvolvimento back-end",
      description: "Aprenda as principais tecnologias de backend",
      creator: "Rafael Bietti",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 200,00",
      date: "28/11/24",
      subscribers: 100,
    },
    {
      _id: "kdsakdjsakdjsakdjsakd",
      title: "Front-End em 3 dias!",
      description: "Curso intensivo de desenvolvimento frontend",
      creator: "Rodrigo Siqueira",
      imageUrl: "/curso.png",
      category: "Desenvolvimento",
      price: "R$ 150,00",
      date: "28/11/24",
      subscribers: 100,
    },
    {
      _id: "ojsojdaojsdoajsd",
      title: "Experiência e Interface do Usuário",
      description: "Aprenda UX/UI com especialistas da IBM",
      creator: "IBM - Flávia Beo",
      imageUrl: "/curso.png",
      category: "Design",
      price: "R$ 250,00",
      date: "28/11/24",
      subscribers: 100,
    },
  ];

  return (
    <HomeContainer role="main">
      <HeaderContainer role="banner">
        <HeaderTitle>
          A plataforma de educação digital que coloca sua empresa no controle.
        </HeaderTitle>
        <HeaderDescription>
          A MARC5 oferece uma solução completa para empresas que desejam
          gerenciar cursos internos com segurança e eficiência, além de
          possibilitar a criação de conteúdos para o público externo.
          Desenvolvida em React e Typescript, nossa plataforma está em fase de
          MVP, focada em atender empresas com um sistema dedicado e exclusivo
          para desktop.
        </HeaderDescription>

        <HeaderTitle>Nossos Diferenciais</HeaderTitle>
        <DifferentialsList>
          <DifferentialItem>
            <DifferentialTitle>Segurança e Controle</DifferentialTitle>
            <DifferentialDescription>
              Acesso seguro e controle personalizado para cada empresa, com
              soluções adaptadas às necessidades e ao tamanho do seu negócio.
            </DifferentialDescription>
          </DifferentialItem>
          <DifferentialItem>
            <DifferentialTitle>
              Versatilidade na Criação de Cursos
            </DifferentialTitle>
            <DifferentialDescription>
              Crie, personalize e distribua cursos de maneira eficaz, seja para
              sua equipe ou para o público externo. Nossa plataforma permite
              cursos gratuitos, pagos ou sustentados por anúncios, adaptando-se
              às necessidades e estratégias de cada empresa.
            </DifferentialDescription>
          </DifferentialItem>
          <DifferentialItem>
            <DifferentialTitle>Monetização Facilitada</DifferentialTitle>
            <DifferentialDescription>
              Cursos gratuitos com lucro através de anúncios ou pagos com
              comissão sobre o valor, criando novas fontes de receita.
            </DifferentialDescription>
          </DifferentialItem>
          <DifferentialItem>
            <DifferentialTitle>Foco em Experiência Desktop</DifferentialTitle>
            <DifferentialDescription>
              Plataforma otimizada para uso em desktops, oferecendo uma
              experiência focada e ideal para ambientes corporativos.
            </DifferentialDescription>
          </DifferentialItem>
        </DifferentialsList>
      </HeaderContainer>

      <Section role="region" aria-label="Cursos em andamento">
        <SectionTitle className="text-2xl font-bold text-gray-900" tabIndex={0}>
          Continue seu aprendizado
        </SectionTitle>
        <CourseGrid role="list">
          {recentCourses.map((course, index) => (
            <div key={`recent-${index}`} role="listitem">
              <CourseCard {...course} />
            </div>
          ))}
        </CourseGrid>
      </Section>

      <Section role="region" aria-label="Cursos em destaque">
        <SectionTitle className="text-2xl font-bold text-gray-900" tabIndex={0}>
          Destaque
        </SectionTitle>
        <CourseGrid role="list">
          {newContent.map((course, index) => (
            <div key={`new-${index}`} role="listitem">
              <CourseCard {...course} />
            </div>
          ))}
        </CourseGrid>
      </Section>

      <PartnersSection>
        <PartnersTitle>Empresas parceiras</PartnersTitle>
        <PartnersGrid role="list">
          {partners.map((partner, index) => (
            <PartnerImage
              key={`partner-${index}`}
              src={partner.logo}
              alt={`Logo da empresa parceira ${partner.name}`}
              loading="lazy"
              role="listitem"
            />
          ))}
        </PartnersGrid>
      </PartnersSection>
    </HomeContainer>
  );
};

export default HomeScreen;
