export type ProductImgType = {
  src: string;
  alt: string;
};

export type AllproductsItemType = {
  productId: number;
  productTitle: string;
  productSpecId: number;
  smallOriginalPrice: number;
  productImg: ProductImgType;
  smallPromotionPrice: number;
};

export type AllproductsDataType = AllproductsItemType[];
