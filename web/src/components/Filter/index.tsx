import React, { useState, useRef, useEffect } from 'react';
import { X } from "@phosphor-icons/react";
import * as S from "./styles";
import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyboard } from '../../hooks/useKeyboard';
import { FilterState } from '../../hooks/useCoursesFilter';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilters: FilterState;
  categories: string[];
  maxPrice: number;
  onApplyFilters: (filters: FilterState) => void;
  onResetFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  initialFilters,
  categories,
  maxPrice,
  onApplyFilters,
  onResetFilters,
}) => {
  const [tempFilters, setTempFilters] = useState<FilterState>(initialFilters);
  const [priceInputValue, setPriceInputValue] = useState(initialFilters.priceRange.toString());
  const panelRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLSelectElement>(null);

  useClickOutside(panelRef, onClose);
  useKeyboard({
    onEscape: onClose,
    disabled: !isOpen,
  });

  useEffect(() => {
    if (isOpen) {
      initialFocusRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setTempFilters(initialFilters);
    setPriceInputValue(initialFilters.priceRange.toFixed(2));
  }, [initialFilters, isOpen]);

  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.,]/g, '').replace(',', '.');
    setPriceInputValue(value);
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= maxPrice) {
      setTempFilters(prev => ({ ...prev, priceRange: numValue }));
    }
  };

  const handlePriceInputBlur = () => {
    const numValue = parseFloat(priceInputValue);
    if (isNaN(numValue) || numValue < 0) {
      setPriceInputValue('0.00');
      setTempFilters(prev => ({ ...prev, priceRange: 0 }));
    } else if (numValue > maxPrice) {
      setPriceInputValue(maxPrice.toFixed(2));
      setTempFilters(prev => ({ ...prev, priceRange: maxPrice }));
    } else {
      setPriceInputValue(numValue.toFixed(2));
    }
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTempFilters(prev => ({ ...prev, priceRange: value }));
    setPriceInputValue(value.toFixed(2));
  };

  const handleApply = () => {
    onApplyFilters(tempFilters);
    onClose();
  };

  const handleReset = () => {
    onResetFilters();
    onClose();
  };

  return (
    <S.FilterContainer>
      {isOpen && <S.FilterOverlay aria-hidden="true" />}
      <S.FilterPanel
        ref={panelRef}
        isOpen={isOpen}
        role="dialog"
        aria-label="Filtros de cursos"
        aria-modal="true"
      >
        <S.FilterPanelHeader>
          <S.FilterTitle>Filtros</S.FilterTitle>
          <S.CloseButton
            onClick={onClose}
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
            value={tempFilters.selectedCategory}
            onChange={(e) => setTempFilters(prev => ({ ...prev, selectedCategory: e.target.value }))}
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
                  checked={tempFilters.selectedOrder === value}
                  onChange={(e) => setTempFilters(prev => ({ 
                    ...prev, 
                    selectedOrder: e.target.value as 'todos' | 'popular' | 'novos' 
                  }))}
                />
                <span>{label}</span>
              </S.RadioLabel>
            ))}
          </S.RadioGroup>
        </S.FilterSection>

        <S.FilterSection>
          <S.FilterLabel htmlFor="price-range">
            Preço máximo: R$ 
            <S.PriceInput
              type="text"
              inputMode="decimal"
              value={priceInputValue}
              onChange={handlePriceInputChange}
              onBlur={handlePriceInputBlur}
              aria-label="Valor máximo do preço"
            />
          </S.FilterLabel>
          <S.PriceRange>
            <S.PriceLabel>
              <span>R$ 0,00</span>
              <span>R$ {maxPrice.toFixed(2)}</span>
            </S.PriceLabel>
            <S.PriceSliderContainer>
              <S.PriceSlider
                type="range"
                id="price-range"
                min={0}
                max={maxPrice}
                step={0.5}
                value={tempFilters.priceRange}
                onChange={handleRangeChange}
              />
            </S.PriceSliderContainer>
          </S.PriceRange>
        </S.FilterSection>

        <S.FilterActions>
          <S.ClearButton
            type="button"
            onClick={handleReset}
            aria-label="Limpar todos os filtros"
          >
            <span>Limpar Filtros</span>
            <X size={16} aria-hidden="true" />
          </S.ClearButton>
          <S.ApplyButton
            type="button"
            onClick={handleApply}
            aria-label="Aplicar filtros"
          >
            Aplicar
          </S.ApplyButton>
        </S.FilterActions>
      </S.FilterPanel>
    </S.FilterContainer>
  );
};

export default FilterPanel;