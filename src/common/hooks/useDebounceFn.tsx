import { useRef, useCallback } from 'react';

const useDebounceFn = <T extends unknown[], R>(
  functionToDebounce: (...args: T) => R,
  delay: number,
): ((...args: T) => void) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        functionToDebounce(...args);
      }, delay);
    },
    [functionToDebounce, delay],
  );

  return debouncedFunction;
};

export default useDebounceFn;
