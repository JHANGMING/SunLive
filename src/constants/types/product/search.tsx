type productImgType = {
  src: string;
  alt: string;
};

export type SearchDataItemType = {
  productId: number;
  description: string;
  productTitle: string;
  productSpecId: number;
  productImg: productImgType;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
};

export type SearchDataType = SearchDataItemType[];
