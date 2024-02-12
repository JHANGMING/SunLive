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

export type PriceItemType = {
  totalDiscount: number;
  totalOriginalPrice: number;
  totalPromotionPrice: number;
};

export type CartDataType = {
  cartItemLength?: number;
  cartItemProductInfo?: CartItemType[];
  cartInfo?: PriceItemType[] | undefined;
};
