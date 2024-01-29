import React, { ReactNode, createContext, useContext } from 'react';
import useProductRefs, { ProductRefsType } from './useProductRefs';
export const ProductsRefContext = createContext<ProductRefsType | null>(null);
type ProductsRefProviderProps = {
  children: ReactNode;
};
export const ProductsRefProvider = ({ children }: ProductsRefProviderProps) => {
  const productRefs = useProductRefs();

  return (
    <ProductsRefContext.Provider value={productRefs}>
      {children}
    </ProductsRefContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsRefContext);

  if (context === undefined) {
    console.log('Error');
  }
  return context;
};
