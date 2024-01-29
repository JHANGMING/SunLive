import { useRef, RefObject } from 'react';

export type ProductRefsType = {
  discountedProductsRef: RefObject<HTMLDivElement>;
  popularProductsRef: RefObject<HTMLDivElement>;
  allProductsRef: RefObject<HTMLDivElement>;
  seasonalProductsRef: RefObject<HTMLDivElement>;
};

const useProductRefs = (): ProductRefsType => {
  const discountedProductsRef = useRef<HTMLDivElement>(null);
  const popularProductsRef = useRef<HTMLDivElement>(null);
  const allProductsRef = useRef<HTMLDivElement>(null);
  const seasonalProductsRef = useRef<HTMLDivElement>(null);

  return {
    discountedProductsRef,
    popularProductsRef,
    allProductsRef,
    seasonalProductsRef,
  };
};

export default useProductRefs;
