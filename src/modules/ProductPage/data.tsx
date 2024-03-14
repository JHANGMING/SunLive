import { AllproductsDataType } from '@/constants/types/product/allproducts';

export type ProductShopProps = {
  fruitProduct: AllproductsDataType;
  topSaleProduct: AllproductsDataType;
  allproductsData: AllproductsDataType;
  promotionProduct: AllproductsDataType;
  vegetableProduct: AllproductsDataType;
};

export type ProductSearchProps = {
  allproductsData: AllproductsDataType;
};

export type CategoryProductTagProps = {
  text: string;
  classStyle: string;
};

export type CategoryTitleProps = {
  title: string;
  gapStyle?: string;
  backgroundStyle?: boolean;
};
