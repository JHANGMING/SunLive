
import { AllproductsDataType } from "@/constants/types/product/allproducts";
import { DetailproductItemType } from "@/constants/types/product/detail";



export const productData = [
  {
    src: '/images/productDetail/detailImg1.svg',
    alt: 'product1',
  },
  {
    src: '/images/productShop/discountedImg2.png',
    alt: 'product2',
  },
  {
    src: '/images/productShop/discountedImg3.png',
    alt: 'product33',
  },
  {
    src: '/images/product/product1.png',
    alt: 'product333',
  },
  {
    src: '/images/productShop/discountedImg1.png',
    alt: 'product33333',
  },
];

export type ProductDetailProps = {
  detailData:{
    detailProduct: DetailproductItemType;
    productInfoByUser: AllproductsDataType;
  }
};

export type DetailSectionProps = {
  detailProduct: DetailproductItemType;
};