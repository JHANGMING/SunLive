export type CartImgType = {
  src: string;
  alt: string;
};

export type CartItemType = {
  subtotal: number;
  productId: number;
  cartItemQty: number;
  smallWeight: number;
  largeWeight: number;
  productTitle: string;
  productSpecId: number;
  productImg: CartImgType;
  productSpecSize: number;
  cartItemLivePrice: number;
  largeOriginalPrice: number;
  smallOriginalPrice: number;
  smallProductSpecId: number;
  largeProductSpecId: number;
  largePromotionPrice: number;
  smallPromotionPrice: number;
  cartItemPromotionPrice: number;
};

export type CartInfoItemType = {
  totalDiscount: number;
  totalOriginalPrice: number;
  totalPromotionPrice: number;
};

export type PriceItemType = {
  totalDiscount: number;
  totalOriginalPrice: number;
  totalPromotionPrice: number;
};

export type CartDataType = {
  cartId?: number;
  cartItemLength?: number;
  cartItemProductInfo?: CartItemType[];
  cartInfo?: PriceItemType[] | undefined;
};
