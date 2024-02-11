export type CartImgType = {
  src: string;
  alt: string;
};

export type CartItemType = {
  productId: number;
  productImg: CartImgType;
  productTitle: string;
  cartItemPromotionPrice: number;
  cartItemQty: number;
  productSpecId: number;
};

export type CartDataType = {
  cartItemLength?: number;
  allOriginalPrice?: number;
  alltotalPrice?: number;
  cartItemInfo?: CartItemType[];
};