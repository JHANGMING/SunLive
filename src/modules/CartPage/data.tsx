import { CartDataType, PriceItemType } from "@/constants/types/cart/cartlist";

type ProductImgType = {
  src: string;
  alt: string;
 }
type SpecType = {
  smallWeight: number;
  largeWeight: number;
}


export type ProductCardProps = {
  productID:number;
  productTitle: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: ProductImgType;
  qyt: number;
  spec: SpecType;
  total: number;
};

export type CartProps={
  cartData:CartDataType;
}

export type CartTotalPriceProps = {
  priceData: PriceItemType;
};

export const productData: ProductCardProps[] = [
  {
    productID: 12434,
    productTitle: '紫禧有機天使茄',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/home/live/liveComingImg1.png',
      alt: 'product1',
    },
    qyt: 1,
    spec: {
      smallWeight: 200,
      largeWeight: 300,
    },
    total: 199,
  },
  {
    productID: 145434,
    productTitle: '多汁天然有機鳳梨',
    smallOriginalPrice: 350,
    smallPromotionPrice: 170,
    productImg: {
      src: '/images/home/live/liveComingImg2.png',
      alt: 'product1',
    },
    qyt: 3,
    spec: {
      smallWeight: 120,
      largeWeight: 150,
    },
    total: 299,
  },
  {
    productID: 434,
    productTitle: '笑笑果橙樂',
    smallOriginalPrice: 250,
    smallPromotionPrice: 175,
    productImg: {
      src: '/images/home/live/liveComingImg3.png',
      alt: 'product1',
    },
    qyt: 1,
    spec: {
      smallWeight: 150,
      largeWeight: 170,
    },
    total: 399,
  },
];

const productAllPrice = {
  allOriginalPrice:500,
  alltotalPrice: 300
};