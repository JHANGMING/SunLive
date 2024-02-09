type productImgType = {
  src: string;
  alt: string;
};

export type SearchDataItemType = {
  productId: number;
  productTitle: string;
  description: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: productImgType;
  productSpecId: number;
};

export type SearchDataType = SearchDataItemType[];
