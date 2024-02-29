type LiveproudctTpye = {
  liveProductId: number; //本頁面不設定置頂產品，後端採用第一筆預設為置頂產品
  liveProductName: string;
};

export type LivelistType = {
  liveId: number;
  liveName: string;
  liveDate: string;
  startTime: string;
  yturl: string;
  shareurl: string;
  topLiveProductId: number;
  topProductName: string;
  liveProudct: LiveproudctTpye[];
};
