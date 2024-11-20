import React, { useRef, useState } from "react";
import { Funnel, MagnifyingGlass } from "@phosphor-icons/react";
import CourseCard from "../CourseCard";
import { useCoursesFilter, Course, FilterState } from "../../hooks/useCoursesFilter";
import * as S from "./styles";
import FilterPanel from "../Filter";

const courses: Course[] = [
  {
    _id: "1",
    title: "JavaScript Moderno",
    description: "Domine JavaScript ES6+, Promises, Async/Await e as últimas features da linguagem",
    creator: "Rafael Bietti",
    imageUrl: "/curso.png",
    category: "Desenvolvimento",
    price: "R$ 199,90",
    date: "2024-04-10",
    subscribers: 1432
  },
  {
    _id: "2",
    title: "Design de Interface Web",
    description: "Aprenda a criar interfaces modernas e responsivas com as melhores práticas de UI",
    creator: "Julia Santos",
    imageUrl: "/curso.png",
    category: "Design",
    price: "R$ 159,90",
    date: "2024-03-15",
    subscribers: 856
  },
  {
    _id: "3",
    title: "Docker & Kubernetes",
    description: "Containerização de aplicações e orquestração com Docker e Kubernetes",
    creator: "André Silva",
    imageUrl: "/curso.png",
    category: "DevOps",
    price: "R$ 249,90",
    date: "2024-02-20",
    subscribers: 723
  },
  {
    _id: "4",
    title: "React Native do Zero",
    description: "Desenvolvimento de aplicativos móveis com React Native e TypeScript",
    creator: "Rafael Bietti",
    imageUrl: "/curso.png",
    category: "Desenvolvimento",
    price: "R$ 299,90",
    date: "2024-04-05",
    subscribers: 1876
  },
  {
    _id: "5",
    title: "UX Writing",
    description: "Aprenda a escrever textos efetivos para interfaces digitais",
    creator: "Mariana Costa",
    imageUrl: "/curso.png",
    category: "Design",
    price: "R$ 129,90",
    date: "2024-03-25",
    subscribers: 435
  },
  {
    _id: "6",
    title: "CI/CD na Prática",
    description: "Implementação de pipelines de integração e deploy contínuo",
    creator: "André Silva",
    imageUrl: "/curso.png",
    category: "DevOps",
    price: "R$ 189,90",
    date: "2024-01-30",
    subscribers: 612
  },
  {
    _id: "7",
    title: "TypeScript Avançado",
    description: "Domine TypeScript com padrões avançados e melhores práticas",
    creator: "Rafael Bietti",
    imageUrl: "/curso.png",
    category: "Desenvolvimento",
    price: "R$ 219,90",
    date: "2024-04-15",
    subscribers: 945
  },
  {
    _id: "8",
    title: "Design System",
    description: "Criação e implementação de Design Systems escaláveis",
    creator: "Julia Santos",
    imageUrl: "/curso.png",
    category: "Design",
    price: "R$ 179,90",
    date: "2024-03-20",
    subscribers: 567
  },
  {
    _id: "9",
    title: "AWS para Desenvolvedores",
    description: "Aprenda a utilizar os principais serviços da AWS para suas aplicações",
    creator: "André Silva",
    imageUrl: "/curso.png",
    category: "DevOps",
    price: "R$ 269,90",
    date: "2024-02-28",
    subscribers: 834
  },
  {
    _id: "10",
    title: "Next.js na Prática",
    description: "Desenvolvimento de aplicações web com Next.js e SSR",
    creator: "Rafael Bietti",
    imageUrl: "/curso.png",
    category: "Desenvolvimento",
    price: "R$ 229,90",
    date: "2024-04-01",
    subscribers: 1234
  },
  {
    _id: "11",
    title: "Figma Masterclass",
    description: "Do básico ao avançado no Figma para design de interfaces",
    creator: "Julia Santos",
    imageUrl: "/curso.png",
    category: "Design",
    price: "R$ 149,90",
    date: "2024-03-10",
    subscribers: 789
  },
  {
    _id: "12",
    title: "Git Avançado",
    description: "Fluxos de trabalho avançados com Git e GitHub",
    creator: "André Silva",
    imageUrl: "/curso.png",
    category: "DevOps",
    price: "R$ 139,90",
    date: "2024-02-15",
    subscribers: 678
  }
];

const CoursesScreen: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  
  const {
    filters,
    filteredCourses,
    categories,
    maxPrice,
    updateSearch,
    updateCategory,
    updateOrder,
    updatePriceRange,
    resetFilters,
  } = useCoursesFilter(courses);

  const handleOpenFilters = () => {
    setIsFilterOpen(true);
  };

  const handleCloseFilters = () => {
    setIsFilterOpen(false);
    filterButtonRef.current?.focus();
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    updateCategory(newFilters.selectedCategory);
    updateOrder(newFilters.selectedOrder);
    updatePriceRange(newFilters.priceRange);
  };

  const renderFilterButton = () => (
    <S.FilterButton
      ref={filterButtonRef}
      onClick={handleOpenFilters}
      aria-expanded={isFilterOpen}
      aria-controls="filter-panel"
      aria-haspopup="dialog"
    >
      <span>Filtros</span>
      <Funnel aria-hidden="true" size={20} />
    </S.FilterButton>
  );

  const renderFilterPanel = () => (
    <FilterPanel
      isOpen={isFilterOpen}
      onClose={handleCloseFilters}
      initialFilters={{
        searchQuery: filters.searchQuery,
        selectedCategory: filters.selectedCategory,
        selectedOrder: filters.selectedOrder,
        priceRange: filters.priceRange,
      }}
      categories={categories}
      maxPrice={maxPrice} // Adicionando a prop maxPrice
      onApplyFilters={handleApplyFilters}
      onResetFilters={resetFilters}
    />
  );

  const renderSearchInput = () => (
    <S.SearchWrapper>
      <S.SearchInput
        type="search"
        id="course-search"
        placeholder="Pesquise o seu curso aqui por título ou instrutor..."
        value={filters.searchQuery}
        onChange={(e) => updateSearch(e.target.value)}
        aria-label="Buscar cursos"
      />
      <S.SearchIcon>
        <MagnifyingGlass aria-hidden="true" size={20} />
      </S.SearchIcon>
    </S.SearchWrapper>
  );

  return (
    <S.CoursesContainer role="main">
      <S.HeaderContainer>
        <S.Title>Todos os Cursos</S.Title>
  
        <S.SearchFilterContainer>
          {renderSearchInput()}
          <S.FilterContainer>
            {renderFilterButton()}
            {renderFilterPanel()}
          </S.FilterContainer>
        </S.SearchFilterContainer>

        <S.ResultCount aria-live="polite">
          {filteredCourses.length}{" "}
          {filteredCourses.length === 1 ? "curso encontrado" : "cursos encontrados"}
        </S.ResultCount>
      </S.HeaderContainer>

      <S.CourseGrid
        role="grid"
        aria-label="Lista de cursos"
        aria-rowcount={filteredCourses.length}
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <S.CardWrapper
              key={course._id}
              role="gridcell"
              aria-rowindex={index + 1}
            >
              <S.CardContent>
                <CourseCard {...course} />
              </S.CardContent>
            </S.CardWrapper>
          ))
        ) : (
          <S.EmptyState>
            <p>Nenhum curso encontrado com os filtros selecionados.</p>
          </S.EmptyState>
        )}
      </S.CourseGrid>
    </S.CoursesContainer>
  );
};

export default CoursesScreen;