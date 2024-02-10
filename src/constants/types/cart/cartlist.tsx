export type CartImgType = {
  src: string;
  alt: string;
};

export type CartItemType = {
  // productId: number;
  // productSpecId: number;
  // productTitle: string;
  // smallOriginalPrice: number;
  // smallPromotionPrice: number;
  // productImg: CartImgType;
};

export type CartDataType = {
  cartLength?: number;
  allOriginalPrice?: number;
  alltotalPrice?: number;
  productData?: CartItemType[];
};
