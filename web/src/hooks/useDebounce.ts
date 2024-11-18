import { useState, useEffect } from 'react';

/**
 * Hook para debounce de valores
 * @param value Valor a ser "debounced"
 * @param delay Tempo de espera em milissegundos
 * @returns Valor após o delay
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}