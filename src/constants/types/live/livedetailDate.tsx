type LiveProductItemType = {
  productId: number;
  specId: number;
  productStock: number;
  productLivePrice: number;
  productOriginPrice: number;
  productPhoto: string;
  productName: string;
};

export type LivedetailDateType = {
  liveId: number;
  yturl: string;
  liveName: string;
  liveFarmerId: number;
  liveFarmer: string;
  liveFarmerPic: string;
  liveDate: string;
  liveDescription: string;
  topProductId: number;
  topSpecId: number;
  topProductStock: number;
  topProductLivePrice: number;
  topProductPhoto: string;
  topProductName: string;
  liveProductList: LiveProductItemType[];
  isFuture?: boolean;
};
