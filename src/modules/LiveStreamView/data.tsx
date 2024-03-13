import { LivedetailDateType } from '@/constants/types/live/livedetailDate';

export type LiveCardProps = {
  qty: number;
  title: string;
  salePrice: number;
  originalPrice: number;
  productImg: {
    src: string;
    alt: string;
  };
};

export type Message = {
  photo: string;
  message: string;
  nickName: string;
  userIdSender: number;
};

export type LiveChatProps = {
  liveId: number;
  liveFarmerId: number;
  setViewerCount: (count: number) => void;
};

export type LivestreamingProps = {
  liveDetailData: LivedetailDateType;
};

export type ChatAndProductPorps = {
  liveId: number;
  isFarmer?: boolean;
  liveFarmerId: number;
  liveDetailData: LivedetailDateType;
};

export type LiveChatCountdownProps = {
  endTime: string;
};

export type AvatarProps = {
  photo: string;
  alt: string;
};

export type NameTagProps = {
  nickName: string;
  isLiveFarmer: boolean;
};
