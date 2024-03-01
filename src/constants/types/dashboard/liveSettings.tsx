type LiveproudctTpye = {
  productId: number; //本頁面不設定置頂產品，後端採用第一筆預設為置頂產品
  liveprice: number;
  productSize: boolean; // 小為false、大為 true
};

export type EditSettingType = {
  yturl: string;
  liveId: number;
  endTime: string;
  livepic: string;
  liveName: string;
  liveDate: string;
  startTime: string;
  topProductId: number;
  topProductSize: boolean;
  liveproudct: LiveproudctTpye[];
};
