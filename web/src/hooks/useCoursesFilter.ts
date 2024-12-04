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

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedOrder: 'todos' | 'popular' | 'novos';
  priceRange: number;
}

export function useCoursesFilter(courses: Course[]) {
  const maxPrice = useMemo(() => {
    return Math.max(
      ...courses.map(course => 
        parseFloat(course.price.replace('R$ ', '').replace(',', '.'))
      )
    );
  }, [courses]);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: '',
    selectedOrder: 'todos',
    priceRange: maxPrice
  });

  const debouncedSearch = useDebounce(filters.searchQuery, 300);

  const categories = useMemo(() => 
    Array.from(new Set(courses.map(course => course.category))),
    [courses]
  );

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
    setFilters({
      searchQuery: '',
      selectedCategory: '',
      selectedOrder: 'todos',
      priceRange: maxPrice
    });
  }, [maxPrice]);

  const filteredCourses = useMemo(() => {
    const filtered = courses.filter(course => {
      const coursePrice = parseFloat(course.price.replace('R$ ', '').replace(',', '.'));
      
      const matchesSearch = !debouncedSearch || 
        course.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        course.creator.toLowerCase().includes(debouncedSearch.toLowerCase());
      
      const matchesCategory = !filters.selectedCategory || 
        course.category === filters.selectedCategory;
      
      const matchesPrice = coursePrice <= filters.priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (filters.selectedOrder === 'popular') {
      filtered.sort((a, b) => b.subscribers - a.subscribers);
    } else if (filters.selectedOrder === 'novos') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [courses, debouncedSearch, filters]);

  return {
    filters,
    filteredCourses,
    categories,
    maxPrice,
    updateSearch,
    updateCategory,
    updateOrder,
    updatePriceRange,
    resetFilters,
  };
}