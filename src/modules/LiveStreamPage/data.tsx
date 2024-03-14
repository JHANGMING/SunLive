import { LivesDataType } from '@/constants/types/live/live';

export type LiveCardProps = {
  title: string;
  liveTime: string;
  farmerName: string;
  productImg: {
    src: string;
    alt: string;
  };
};

export type LiveStreamProps = {
  liveData: LivesDataType;
};
