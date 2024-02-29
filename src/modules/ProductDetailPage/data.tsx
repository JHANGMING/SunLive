
import { DetailproductItemType } from "@/constants/types/product/detail";
import { AllproductsDataType } from "@/constants/types/product/allproducts";

export type ProductDetailProps = {
  detailData:{
    detailProduct: DetailproductItemType;
    productInfoByUser: AllproductsDataType;
  }
};

export type DetailSectionProps = {
  detailProduct: DetailproductItemType;
};