import { CartDataType, PriceItemType } from '@/constants/types/cart/cartlist';

type ProductImgType = {
  src: string;
  alt: string;
};
type SpecType = {
  smallWeight: number;
  largeWeight: number;
};

export type ProductCardProps = {
  productID: number;
  productTitle: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: ProductImgType;
  qyt: number;
  spec: SpecType;
  total: number;
};

export type CartProps = {
  cartData: CartDataType;
};

export type CartTotalPriceProps = {
  priceData: PriceItemType;
};

export type PaymentDataType = {
  MerchantID?: string;
  TradeInfo?: string;
  TradeSha?: string;
};
