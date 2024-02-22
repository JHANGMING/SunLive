import { LivesDataType } from "@/constants/types/live/live";


export type LivingShowSectionProps = {
  isLivePage?: boolean;
};

export type LivingProductProps = {
  living?: boolean;
  liveData?: LivesDataType;
  };

export type YoutubeLiveIframProps = {
  isViewPage?: boolean;
  isLivePage?: boolean;
  isFarmer?: boolean;
  url?: string;
};