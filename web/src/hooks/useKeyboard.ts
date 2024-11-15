import { useEffect, useCallback } from 'react';

interface KeyboardOptions {
  onEscape?: () => void;
  onEnter?: () => void;
  disabled?: boolean;
}

/**
 * Hook para gerenciar eventos de teclado
 * @param options Objeto com callbacks para diferentes teclas
 */
export function useKeyboard(options: KeyboardOptions): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (options.disabled) return;

      switch (event.key) {
        case 'Escape':
          options.onEscape?.();
          break;
        case 'Enter':
          options.onEnter?.();
          break;
      }
    },
    [options]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}