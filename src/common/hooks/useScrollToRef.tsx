import { useRef, useCallback } from 'react';

const useScrollToElement = () => {
  const ref = useRef<HTMLLIElement>(null);

  const scrollToElement = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return [ref, scrollToElement] as const;
};

export default useScrollToElement;
