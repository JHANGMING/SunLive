import { LivedetailDateType } from "@/constants/types/live/livedetailDate";

export type liveCardProps = {
  title: string;
  originalPrice: number;
  salePrice: number;
  qty: number;
  productImg: {
    src: string;
    alt: string;
  };
};

export type Message = {
  userIdSender: number;
  message: string;
  photo: string;
  nickName: string;
};

export type LiveChatProps = {
  liveId: number;
  liveFarmerId: number;
  setViewerCount: (count: number) => void;
};

export type LivestreamingProps = {
  liveDetailData:LivedetailDateType;
};

export type ChatAndProductPorps = {
  liveDetailData: LivedetailDateType;
  liveId: number;
  liveFarmerId: number;
  isFarmer?: boolean;
};

export type LiveChatCountdownProps={
  endTime:string;
}

export const liveCardData: liveCardProps[] = [
  {
    title: '紫禧有機天使茄',
    originalPrice: 299,
    salePrice: 199,
    qty: 43,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    title: '多汁天然有機鳳梨',
    originalPrice: 299,
    salePrice: 199,
    qty: 32,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    title: '笑笑果橙樂',
    originalPrice: 299,
    salePrice: 199,
    qty: 14,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    title: '甜蜜時光有機草莓',
    originalPrice: 299,
    salePrice: 199,
    qty: 0,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
];
