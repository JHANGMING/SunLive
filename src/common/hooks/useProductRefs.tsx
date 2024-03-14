import { useRef, RefObject } from 'react';

export type ProductRefsType = {
  allProductsRef: RefObject<HTMLDivElement>;
  popularProductsRef: RefObject<HTMLDivElement>;
  seasonalProductsRef: RefObject<HTMLDivElement>;
  discountedProductsRef: RefObject<HTMLDivElement>;
};

const useProductRefs = (): ProductRefsType => {
  const allProductsRef = useRef<HTMLDivElement>(null);
  const popularProductsRef = useRef<HTMLDivElement>(null);
  const seasonalProductsRef = useRef<HTMLDivElement>(null);
  const discountedProductsRef = useRef<HTMLDivElement>(null);

  return {
    allProductsRef,
    popularProductsRef,
    seasonalProductsRef,
    discountedProductsRef,
  };
};

export default useProductRefs;
