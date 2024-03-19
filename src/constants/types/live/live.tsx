export type LiveProductItemType = {
  liveId: number;
  livePic: string;
  liveTime: string;
  livePrice: number;
  liveFarmer: string;
  classStyle?: string;
  liveProductId: string;
  liveFarmerPic: string;
  liveProductName: string;
};

export type LivesDataType = {
  message?: string;
  data: {
    liveId?: number;
    livePrice?: number;
    description?: string;
    liveProductId?: number;
    liveProductName?: string;
    upcomingLive: LiveProductItemType[];
  };
};
