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
  qyt: number;
  total: number;
  spec: SpecType;
  productID: number;
  productTitle: string;
  smallOriginalPrice: number;
  productImg: ProductImgType;
  smallPromotionPrice: number;
};

export type CartProps = {
  cartData: CartDataType;
};

export type CartTotalPriceProps = {
  priceData: PriceItemType;
};

export type PaymentDataType = {
  TradeSha?: string;
  TradeInfo?: string;
  MerchantID?: string;
};
