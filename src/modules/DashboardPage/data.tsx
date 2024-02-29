export type ProductDataType = {
  id: string;
  productName: string;
  origialPrice: string;
  discountPrice: string;
  stock: number;
  createTime: string;
  productstatus: string;
};
export type OrderDataType = {
  id: string;
  orderNumber: string;
  custom: string;
  orderPrice: string;
  orderTime: string;
  payStatus: string;
  orderStatus: string;
};
export type LiveListDataType = {
  id: string;
  liveNumber: string;
  liveDate: string;
  startTime: string;
  liveLink: string;
};
type ColumnType = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (row: any) => JSX.Element;
};
export const productColumns: ColumnType[] = [
  { title: '農產品名稱', dataIndex: 'productTitle', key: 'productTitle' },
  { title: '原價', dataIndex: 'smallOriginalPrice', key: 'smallOriginalPrice' },
  {
    title: '促銷價',
    dataIndex: 'smallPromotionPrice',
    key: 'smallPromotionPrice',
  },
  { title: '庫存量', dataIndex: 'smallStock', key: 'smallStock' },
  { title: '上架時間', dataIndex: 'productUpdatTime', key: 'productUpdatTime' },
  { title: '商品狀態', dataIndex: 'productState', key: 'productState' },
];

export const ordersColumns: ColumnType[] = [
  { title: '訂單編號', dataIndex: 'orderId', key: 'orderId' },
  { title: '顧客', dataIndex: 'userNickName', key: 'userNickName' },
  { title: '金額', dataIndex: 'orderSum', key: 'orderSum' },
  { title: '訂單建立時間', dataIndex: 'creatTime', key: 'creatTime' },
  { title: '付款狀態', dataIndex: 'ispay', key: 'ispay' },
  { title: '出貨狀態', dataIndex: 'shipment', key: 'shipment' },
];

export const LiveListColumns: ColumnType[] = [
  { title: '直播名稱', dataIndex: 'liveName', key: 'liveName' },
  { title: '直播日期', dataIndex: 'liveDate', key: 'liveDate' },
  { title: '直播開始時間', dataIndex: 'startTime', key: 'tartTime' },
  { title: '直播連結', dataIndex: 'liveLink', key: 'liveLink' },
  { title: '直播後台', dataIndex: 'liveProudct', key: 'liveProudct' },
];
