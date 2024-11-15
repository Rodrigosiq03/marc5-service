import { useEffect, RefObject } from 'react';

/**
 * Hook para detectar cliques fora de um elemento
 * @param ref Referência do elemento
 * @param handler Função a ser executada quando houver clique fora
 * @param excludeRefs Referencias de elementos a serem excluídos do click outside
 */
export function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: () => void,
  excludeRefs: RefObject<HTMLElement>[] = []
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      for (const excludeRef of excludeRefs) {
        if (excludeRef.current?.contains(target)) {
          return;
        }
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, excludeRefs]);
}