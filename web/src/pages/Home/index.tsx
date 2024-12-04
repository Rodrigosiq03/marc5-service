import React, { useEffect, useMemo } from "react";
import CourseCard from "../../components/CourseCard";
import * as S from "./styles";
import { Loading } from "../../components/Loading";
import { useCourse } from "../../hooks/useCourse";

const HomeScreen: React.FC = () => {
  const { courses, loading, fetchCourses } = useCourse();

  const formattedCourses = useMemo(() => 
    courses.map(course => ({
      _id: course.courseId,
      title: course.title,
      description: course.description,
      creator: course.createdBy,
      imageUrl: course.imageUrl,
      category: course.category,
      price: `R$ ${course.price.toFixed(2).replace('.', ',')}`,
      date: new Date().toISOString(),
      subscribers: course.subscribedUsers?.length || 0
    })), [courses]
  );

  const featuredCourses = useMemo(() => {
    return [...formattedCourses]
      .sort((a, b) => b.subscribers - a.subscribers)
      .slice(0, 3);
  }, [formattedCourses]);

  const recentCourses = useMemo(() => {
    return formattedCourses.slice(0, 1);
  }, [formattedCourses]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const partners = [
    { name: "MetLife", logo: "/empresa.png" },
    { name: "Tekno", logo: "/empresa.png" },
    { name: "Partner 3", logo: "/empresa.png" },
    { name: "Partner 4", logo: "/empresa.png" },
  ];

  return (
    <S.HomeContainer role="main">
      <S.HeaderContainer role="banner">
        <S.HeaderTitle>
          A plataforma de educação digital que coloca sua empresa no controle.
        </S.HeaderTitle>
        <S.HeaderDescription>
          A MARC5 oferece uma solução completa para empresas que desejam
          gerenciar cursos internos com segurança e eficiência, além de
          possibilitar a criação de conteúdos para o público externo.
          Desenvolvida em React e Typescript, nossa plataforma está em fase de
          MVP, focada em atender empresas com um sistema dedicado e exclusivo
          para desktop.
        </S.HeaderDescription>

        <S.HeaderTitle>Nossos Diferenciais</S.HeaderTitle>
        <S.DifferentialsList>
          <S.DifferentialItem>
            <S.DifferentialTitle>Segurança e Controle</S.DifferentialTitle>
            <S.DifferentialDescription>
              Acesso seguro e controle personalizado para cada empresa, com
              soluções adaptadas às necessidades e ao tamanho do seu negócio.
            </S.DifferentialDescription>
          </S.DifferentialItem>
          <S.DifferentialItem>
            <S.DifferentialTitle>
              Versatilidade na Criação de Cursos
            </S.DifferentialTitle>
            <S.DifferentialDescription>
              Crie, personalize e distribua cursos de maneira eficaz, seja para
              sua equipe ou para o público externo. Nossa plataforma permite
              cursos gratuitos, pagos ou sustentados por anúncios, adaptando-se
              às necessidades e estratégias de cada empresa.
            </S.DifferentialDescription>
          </S.DifferentialItem>
          <S.DifferentialItem>
            <S.DifferentialTitle>Monetização Facilitada</S.DifferentialTitle>
            <S.DifferentialDescription>
              Cursos gratuitos com lucro através de anúncios ou pagos com
              comissão sobre o valor, criando novas fontes de receita.
            </S.DifferentialDescription>
          </S.DifferentialItem>
          <S.DifferentialItem>
            <S.DifferentialTitle>Foco em Experiência Desktop</S.DifferentialTitle>
            <S.DifferentialDescription>
              Plataforma otimizada para uso em desktops, oferecendo uma
              experiência focada e ideal para ambientes corporativos.
            </S.DifferentialDescription>
          </S.DifferentialItem>
        </S.DifferentialsList>
      </S.HeaderContainer>

      <S.Section role="region" aria-label="Cursos em andamento">
        <S.SectionTitle className="text-2xl font-bold text-gray-900" tabIndex={0}>
          Continue seu aprendizado
        </S.SectionTitle>
        <S.CourseGrid role="list">
          {loading ? (
            <S.CourseGridLoadingWrapper>
              <Loading isLoading={true} message="Carregando os seus cursos" />
            </S.CourseGridLoadingWrapper>
          ) : (
            recentCourses.map((course) => (
              <div key={course._id} role="listitem">
                <CourseCard {...course} />
              </div>
            ))
          )}
        </S.CourseGrid>
      </S.Section>

      <S.Section role="region" aria-label="Cursos em destaque">
        <S.SectionTitle tabIndex={0}>Destaque</S.SectionTitle>
        <S.CourseGrid role="list">
          {loading ? (
            <S.CourseGridLoadingWrapper>
              <Loading isLoading={true} message="Carregando cursos em destaque" />
            </S.CourseGridLoadingWrapper>
          ) : (
            featuredCourses.map((course) => (
              <div key={course._id} role="listitem">
                <CourseCard {...course} />
              </div>
            ))
          )}
        </S.CourseGrid>
      </S.Section>

      <S.PartnersSection>
        <S.PartnersTitle>Empresas Parceiras</S.PartnersTitle>
        <S.PartnersDescription>
          Conheça as empresas que confiam em nossa plataforma para capacitar suas equipes
          e desenvolver talentos.
        </S.PartnersDescription>
        <S.PartnersGrid role="list">
          {partners.map((partner, index) => (
            <S.PartnerCard key={`partner-${index}`} role="listitem">
              <S.PartnerImage
                src={partner.logo}
                alt={`Logo da empresa parceira ${partner.name}`}
                loading="lazy"
              />
              <S.PartnerName>{partner.name}</S.PartnerName>
            </S.PartnerCard>
          ))}
        </S.PartnersGrid>
      </S.PartnersSection>
    </S.HomeContainer>
  );
};

export default HomeScreen;