import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
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
  CourseGridLoadingWrapper,
  PartnerName,
  PartnersDescription,
  PartnerCard,
} from "./styles";
import { Loading } from "../../components/Loading";
import { Course } from "../../hooks/useCoursesFilter";

const HomeScreen: React.FC = () => {
  const [isLoadingRecent, setIsLoadingRecent] = useState(true);
  const [isLoadingNew, setIsLoadingNew] = useState(true);
  const [recentCourses, setRecentCourses] = useState<Course[]>([]);
  const [newContent, setNewContent] = useState<Course[]>([]);

  const partners = [
    { name: "MetLife", logo: "/empresa.png" },
    { name: "Tekno", logo: "/empresa.png" },
    { name: "Partner 3", logo: "/empresa.png" },
    { name: "Partner 4", logo: "/empresa.png" },
  ];

  // Simulando carregamento dos dados
  useEffect(() => {
    const loadData = async () => {
      try {

        setRecentCourses([
          {
            _id: "asdasdasd",
            title: "Deep Learning",
            description: "O curso abrange todas as técnicas mais atualizadas de DeepLearning do mercado",
            creator: "Rodrigo Siqueira",
            imageUrl: "/curso.png",
            category: "Desenvolvimento",
            price: "R$ 200,00",
            date: "28/11/24",
            subscribers: 100,
          },
        ]);
        setIsLoadingRecent(false);

        setNewContent([
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
            _id: "a1b2c3d4e5f6g7h8",
            title: "React Native Avançado",
            description: "Desenvolvimento mobile com React Native e TypeScript",
            creator: "Amanda Silva",
            imageUrl: "/curso.png",
            category: "Mobile",
            price: "R$ 299,90",
            date: "15/12/24",
            subscribers: 250,
          },
          {
            _id: "h7g6f5e4d3c2b1a",
            title: "DevOps na Prática",
            description: "Docker, Kubernetes e CI/CD para desenvolvedores",
            creator: "Carlos Santos",
            imageUrl: "/curso.png",
            category: "Infraestrutura",
            price: "R$ 349,00",
            date: "10/01/25",
            subscribers: 180,
          },
          {
            _id: "x9y8z7w6v5u4t3s",
            title: "UX/UI Design Master",
            description: "Design de interfaces modernas e experiência do usuário",
            creator: "Julia Costa",
            imageUrl: "/curso.png",
            category: "Design",
            price: "R$ 275,00",
            date: "05/02/25",
            subscribers: 320,
          }
        ]);

        setIsLoadingNew(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setIsLoadingNew(false);
        setIsLoadingRecent(false);
      }
    };

    loadData();
  }, []);

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
          {isLoadingRecent ? (
            <CourseGridLoadingWrapper>
              <Loading isLoading={true} message="Carregando os seus cursos" />
            </CourseGridLoadingWrapper>
          ) : (
            recentCourses.map((course) => (
              <div key={course._id} role="listitem">
                <CourseCard {...course} />
              </div>
            ))
          )}
        </CourseGrid>
      </Section>

      <Section role="region" aria-label="Cursos em destaque">
        <SectionTitle tabIndex={0}>
          Destaque
        </SectionTitle>
        <CourseGrid role="list">
          {isLoadingNew ? (
            <CourseGridLoadingWrapper>
              <Loading isLoading={true} message="Carregando cursos em destaque" />
            </CourseGridLoadingWrapper>
          ) : (
            newContent.map((course) => (
              <div key={course._id} role="listitem">
                <CourseCard {...course} />
              </div>
            ))
          )}
        </CourseGrid>
      </Section>

      <PartnersSection>
        <PartnersTitle>Empresas Parceiras</PartnersTitle>
        <PartnersDescription>
          Conheça as empresas que confiam em nossa plataforma para capacitar suas equipes
          e desenvolver talentos.
        </PartnersDescription>
        <PartnersGrid role="list">
          {partners.map((partner, index) => (
            <PartnerCard key={`partner-${index}`} role="listitem">
              <PartnerImage
                src={partner.logo}
                alt={`Logo da empresa parceira ${partner.name}`}
                loading="lazy"
              />
              <PartnerName>{partner.name}</PartnerName>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </PartnersSection>
    </HomeContainer>
  );
};

export default HomeScreen;
