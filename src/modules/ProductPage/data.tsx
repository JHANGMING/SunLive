import { AllproductsDataType } from "@/constants/types/product/allproducts";

export type ProductShopProps = {
  allproductsData: AllproductsDataType;
  topSaleProduct: AllproductsDataType;
  promotionProduct: AllproductsDataType;
  fruitProduct: AllproductsDataType;
  vegetableProduct: AllproductsDataType;
};