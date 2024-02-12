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
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productSpecSize: number;
  largeOriginalPrice: number;
  largePromotionPrice: number;
  subtotal: number;
  smallWeight: number;
  largeWeight: number;
  smallProductSpecId: number;
  largeProductSpecId: number;
};

export type CartInfoItemType = {
  totalOriginalPrice: number;
  totalPromotionPrice: number;
  totalDiscount: number;
};

export type CartDataType = {
  cartItemLength?: number;
  allOriginalPrice?: number;
  alltotalPrice?: number;
  cartItemProductInfo?: CartItemType[];
  cartInfo?: CartInfoItemType[];
};
