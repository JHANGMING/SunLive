import { LivesDataType } from "@/constants/types/live/live";

export type liveCardProps = {
  title: string;
  farmerName: string;
  liveTime: string;
  productImg: {
    src: string;
    alt: string;
  };
};

export type liveStreamProps = {
  liveData: LivesDataType;
};
