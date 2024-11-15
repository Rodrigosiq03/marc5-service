import { useState, useCallback, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export interface Course {
  _id: string;
  title: string;
  description: string;
  creator: string;
  imageUrl: string;
  category: string;
  price: string;
  date: string;
  subscribers: number;
}

interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedOrder: 'todos' | 'popular' | 'novos';
  priceRange: number;
}

interface UseCoursesFilterReturn {
  filters: FilterState;
  filteredCourses: Course[];
  categories: string[];
  updateSearch: (value: string) => void;
  updateCategory: (value: string) => void;
  updateOrder: (value: 'todos' | 'popular' | 'novos') => void;
  updatePriceRange: (value: number) => void;
  resetFilters: () => void;
}

const initialFilters: FilterState = {
  searchQuery: '',
  selectedCategory: '',
  selectedOrder: 'todos',
  priceRange: 200.50,
};

/**
 * Hook para gerenciar filtros e ordenação dos cursos
 * @param courses Lista de cursos
 * @returns Objeto com estados e funções para manipulação dos filtros
 */
export function useCoursesFilter(courses: Course[]): UseCoursesFilterReturn {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const debouncedSearch = useDebounce(filters.searchQuery, 300);
  const categories = useMemo(() => 
    Array.from(new Set(courses.map(course => course.category))),
    [courses]
  );

  const sortedCourses = useMemo(() => {
    const sorted = [...courses];
    
    switch (filters.selectedOrder) {
      case 'popular':
        sorted.sort((a, b) => b.subscribers - a.subscribers);
        break;
      case 'novos':
        sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      default:
        break;
    }
    
    return sorted;
  }, [courses, filters.selectedOrder]);

  // Aplica os filtros nos cursos
  const filteredCourses = useMemo(() => {
    return sortedCourses.filter(course => {
      const matchesSearch = !debouncedSearch || 
        course.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        course.creator.toLowerCase().includes(debouncedSearch.toLowerCase());
      
      const matchesCategory = !filters.selectedCategory || 
        course.category === filters.selectedCategory;
      
      const coursePrice = parseFloat(course.price.replace('R$ ', '').replace(',', '.'));
      const matchesPrice = coursePrice <= filters.priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [sortedCourses, debouncedSearch, filters.selectedCategory, filters.priceRange]);

  const updateSearch = useCallback((value: string) => {
    setFilters(prev => ({ ...prev, searchQuery: value }));
  }, []);

  const updateCategory = useCallback((value: string) => {
    setFilters(prev => ({ ...prev, selectedCategory: value }));
  }, []);

  const updateOrder = useCallback((value: 'todos' | 'popular' | 'novos') => {
    setFilters(prev => ({ ...prev, selectedOrder: value }));
  }, []);

  const updatePriceRange = useCallback((value: number) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return {
    filters,
    filteredCourses,
    categories,
    updateSearch,
    updateCategory,
    updateOrder,
    updatePriceRange,
    resetFilters,
  };
}