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

