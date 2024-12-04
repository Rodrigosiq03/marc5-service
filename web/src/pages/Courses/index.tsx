import React, { useEffect, useMemo, useRef, useState } from "react";
import { Funnel, MagnifyingGlass, ArrowClockwise } from "@phosphor-icons/react";
import CourseCard from "../../components/CourseCard";
import { useCoursesFilter, FilterState } from "../../hooks/useCoursesFilter";
import * as S from "./styles";
import FilterPanel from "../../components/Filter";
import { Loading } from "../../components/Loading";
import { useCourse } from "../../hooks/useCourse";

const CoursesScreen: React.FC = () => {
  const { courses, loading: isLoading, hasLoadedCourses, fetchCourses } = useCourse();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  
  const transformedCourses = useMemo(() => 
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
  } = useCoursesFilter(transformedCourses);

  useEffect(() => {
    if (!hasLoadedCourses) {
      fetchCourses();
    }
  }, [hasLoadedCourses, fetchCourses]);

  const handleOpenFilters = () => {
    setIsFilterOpen(true);
  };

  const handleCloseFilters = () => {
    setIsFilterOpen(false);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    updateSearch(newFilters.searchQuery);
    updateCategory(newFilters.selectedCategory);
    updateOrder(newFilters.selectedOrder);
    updatePriceRange(newFilters.priceRange);
  };

  const handleRefresh = () => {
    fetchCourses();
  };

  return (
    <S.CoursesContainer role="main">
      <S.HeaderContainer>
        <S.Title>Todos os Cursos</S.Title>
  
        <S.SearchFilterContainer>
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
          <S.FilterContainer>
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
            <S.RefreshButton
              onClick={handleRefresh}
              disabled={isLoading}
              aria-label="Atualizar cursos"
            >
              <ArrowClockwise size={20} />
            </S.RefreshButton>
            <FilterPanel
              isOpen={isFilterOpen}
              onClose={handleCloseFilters}
              initialFilters={filters}
              categories={categories}
              maxPrice={maxPrice}
              onApplyFilters={handleApplyFilters}
              onResetFilters={resetFilters}
            />
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
        {isLoading ? (
          <S.LoadingWrapper>
            <Loading isLoading={true} message="Carregando cursos" />
          </S.LoadingWrapper>
        ) : filteredCourses.length > 0 ? (
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