import React, { useRef, useState } from "react";
import { Funnel, MagnifyingGlass, X } from "@phosphor-icons/react";
import CourseCard from "../CourseCard";
import { useCoursesFilter, Course } from "../../hooks/useCoursesFilter";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useKeyboard } from "../../hooks/useKeyboard";
import * as S from "./styles";

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
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const initialFocusRef = useRef<HTMLSelectElement>(null);

  const {
    filters,
    filteredCourses,
    categories,
    updateSearch,
    updateCategory,
    updateOrder,
    updatePriceRange,
    resetFilters,
  } = useCoursesFilter(courses);

  const handleOpenFilters = () => {
    setIsFilterOpen(true);
    setTimeout(() => initialFocusRef.current?.focus(), 100);
  };

  const handleCloseFilters = () => {
    setIsFilterOpen(false);
    filterButtonRef.current?.focus();
  };
  useClickOutside(filterPanelRef, handleCloseFilters, [filterButtonRef]);
  useKeyboard({
    onEscape: handleCloseFilters,
    disabled: !isFilterOpen,
  });

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
    <S.FilterContainer>
      {isFilterOpen && <S.FilterOverlay aria-hidden="true" />}
      <S.FilterPanel
        ref={filterPanelRef}
        isOpen={isFilterOpen}
        id="filter-panel"
        role="dialog"
        aria-label="Filtros de cursos"
        aria-modal="true"
      >
        <S.FilterPanelHeader>
          <S.FilterTitle>Filtros</S.FilterTitle>
          <S.CloseButton
            onClick={handleCloseFilters}
            aria-label="Fechar painel de filtros"
          >
            <X size={14} aria-hidden="true" />
          </S.CloseButton>
        </S.FilterPanelHeader>
        <S.FilterSection>
          <S.FilterLabel htmlFor="category-select">Categoria</S.FilterLabel>
          <S.CategorySelect
            id="category-select"
            ref={initialFocusRef}
            value={filters.selectedCategory}
            onChange={(e) => updateCategory(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </S.CategorySelect>
        </S.FilterSection>

        <S.FilterSection>
          <S.FilterLabel>Ordenação</S.FilterLabel>
          <S.RadioGroup role="radiogroup" aria-label="Ordenação dos cursos">
            {[
              { value: "todos", label: "Todos" },
              { value: "popular", label: "Mais populares" },
              { value: "novos", label: "Mais recentes" },
            ].map(({ value, label }) => (
              <S.RadioLabel key={value}>
                <input
                  type="radio"
                  name="order"
                  id={`order-${value}`}
                  value={value}
                  checked={filters.selectedOrder === value}
                  onChange={(e) => updateOrder(e.target.value as 'todos' | 'popular' | 'novos')}
                />
                <span>{label}</span>
              </S.RadioLabel>
            ))}
          </S.RadioGroup>
        </S.FilterSection>

        <S.FilterSection>
          <S.FilterLabel htmlFor="price-range">
            Preço máximo: R$ {filters.priceRange.toFixed(2)}
          </S.FilterLabel>
          <S.PriceRange>
            <S.PriceLabel>
              <span>R$ 0,00</span>
              <span>R$ 300,00</span>
            </S.PriceLabel>
            <S.PriceSlider
              type="range"
              id="price-range"
              min={0}
              max={300}
              step={0.5}
              value={filters.priceRange}
              onChange={(e) => updatePriceRange(parseFloat(e.target.value))}
            />
          </S.PriceRange>
        </S.FilterSection>

        <S.FilterActions>
          <S.ClearButton
            type="button"
            onClick={resetFilters}
            aria-label="Limpar todos os filtros"
          >
            <span>Limpar Filtros</span>
            <X size={16} aria-hidden="true" />
          </S.ClearButton>
          <S.ApplyButton
            type="button"
            onClick={handleCloseFilters}
            aria-label="Aplicar filtros"
          >
            Aplicar
          </S.ApplyButton>
        </S.FilterActions>
      </S.FilterPanel>
    </S.FilterContainer>
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
        {filteredCourses.map((course, index) => (
          <S.CardWrapper
            key={course._id}
            role="gridcell"
            aria-rowindex={index + 1}
          >
            <S.CardContent>
              <CourseCard {...course} />
            </S.CardContent>
          </S.CardWrapper>
        ))}
      </S.CourseGrid>
    </S.CoursesContainer>
  );
};

export default CoursesScreen;