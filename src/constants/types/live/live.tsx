export type LiveProductItemType = {
  liveId: number;
  liveProductId: string;
  liveProductName: string;
  livePrice: number;
  liveFarmer: string;
  liveFarmerPic: string;
  livePic: string;
  liveTime: string;
  classStyle?: string;
};

export type LivesDataType = {
  message?: string;
  data: {
    liveId?: number;
    liveProductId?: number;
    liveProductName?: string;
    livePrice?: number;
    description?: string;
    upcomingLive: LiveProductItemType[];
  };
};
