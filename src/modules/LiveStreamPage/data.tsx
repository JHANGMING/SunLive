import { LivesDataType } from '@/constants/types/live/live';

export type liveCardProps = {
  title: string;
  liveTime: string;
  farmerName: string;
  productImg: {
    src: string;
    alt: string;
  };
};

export type liveStreamProps = {
  liveData: LivesDataType;
};
