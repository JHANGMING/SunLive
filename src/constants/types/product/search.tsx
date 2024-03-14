type ProductImgType = {
  src: string;
  alt: string;
};

export type SearchDataItemType = {
  productId: number;
  description: string;
  productTitle: string;
  productSpecId: number;
  productImg: ProductImgType;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
};

export type SearchDataType = SearchDataItemType[];
