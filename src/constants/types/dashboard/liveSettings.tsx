type LiveproudctTpye = {
  productId: number; //本頁面不設定置頂產品，後端採用第一筆預設為置頂產品
  productSize: boolean; // 小為false、大為 true
  liveprice: number;
};

export type EditSettingType = {
  liveId: number;
  liveName: string;
  liveDate: string;
  startTime: string;
  endTime: string;
  livepic: string;
  yturl: string;
  topProductId: number;
  topProductSize: boolean;
  liveproudct: LiveproudctTpye[];
};
