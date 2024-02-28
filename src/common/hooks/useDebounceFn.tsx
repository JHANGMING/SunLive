import { useRef, useCallback } from 'react';

export function useDebounceFn<T extends (...args: any[]) => any>(
  functionToDebounce: T,
  delay: number
): T {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        functionToDebounce(...args);
      }, delay);
    },
    [functionToDebounce, delay]
  );

  return debouncedFunction as T;
}
