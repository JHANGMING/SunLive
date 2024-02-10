import { AllproductsDataType } from "@/constants/types/product/allproducts";

export type ProductShopProps = {
  allproductsData: AllproductsDataType;
  promotionProduct: AllproductsDataType;
  fruitProduct: AllproductsDataType;
  vegetableProduct: AllproductsDataType;
  topSaleProduct: AllproductsDataType;
};

export type ProductSearchProps = {
  allproductsData: AllproductsDataType;
};