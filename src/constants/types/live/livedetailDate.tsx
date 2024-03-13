type LiveProductItemType = {
  specId: number;
  productId: number;
  productName: string;
  productPhoto: string;
  productStock: number;
  productLivePrice: number;
  productOriginPrice: number;
};

export type LivedetailDateType = {
  yturl: string;
  liveId: number;
  endTime: string;
  liveDate: string;
  liveName: string;
  topSpecId: number;
  liveFarmer: string;
  isFuture?: boolean;
  topProductId: number;
  liveFarmerId: number;
  liveFarmerPic: string;
  topProductName: string;
  topProductPhoto: string;
  liveDescription: string;
  topProductStock: number;
  topProductLivePrice: number;
  liveProductList: LiveProductItemType[];
  [key: string]: number | string | boolean | LiveProductItemType[] | undefined;
};
