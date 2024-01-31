export type ProductDataType ={
  id: string;
  productName: string;
  origialPrice: string;
  discountPrice: string;
  stock: number;
  createTime: string;
  productstatus: string;
}
export type OrderDataType= {
  id: string;
  orderNumber: string;
  custom: string;
  orderPrice: string;
  orderTime: string;
  payStatus: string;
  orderStatus: string;
}
export type LiveListDataType= {
  id: string;
  liveNumber: string;
  liveDate: string;
  startTime: string;
  liveLink: string;
}
type ColumnType= {
  title: string;
  dataIndex: string;
  key: string;
  render?: (row: any) => JSX.Element; // 根据需要调整类型
}
export const productColumns: ColumnType[] = [
  { title: '農產品名稱', dataIndex: 'productName', key: 'productName' },
  { title: '原價', dataIndex: 'origialPrice', key: 'origialPrice' },
  { title: '促銷價', dataIndex: 'discountPrice', key: 'discountPrice' },
  { title: '庫存量', dataIndex: 'stock', key: 'stock' },
  { title: '上架時間', dataIndex: 'createTime', key: 'createTime' },
  { title: '商品狀態', dataIndex: 'productstatus', key: 'productstatus' },
];

export const productData: ProductDataType []= [
  {
    id: '001',
    productName: '甜蜜時光有機草莓',
    origialPrice: '$500',
    discountPrice: '$250',
    stock: 200,
    createTime: '2022/01/28',
    productstatus: '上架',
  },
  {
    id: '002',
    productName: '夏浪西瓜舞',
    origialPrice: '$299',
    discountPrice: '$199',
    stock: 20,
    createTime: '2023/12/25',
    productstatus: '上架',
  },
  {
    id: '003',
    productName: '極致芒果夏韻',
    origialPrice: '$399',
    discountPrice: '$300',
    stock: 130,
    createTime: '2023/10/05',
    productstatus: '未出貨',
  },
  {
    id: '004',
    productName: '夢幻柳橙夏悠',
    origialPrice: '$350',
    discountPrice: '$250',
    stock: 110,
    createTime: '2023/10/02',
    productstatus: '未出貨',
  },
  {
    id: '005',
    productName: '柳橙夏悠',
    origialPrice: '$230',
    discountPrice: '$150',
    stock: 60,
    createTime: '2023/11/02',
    productstatus: '未出貨',
  },
  {
    id: '006',
    productName: '甜蜜有機草莓',
    origialPrice: '$430',
    discountPrice: '$250',
    stock: 260,
    createTime: '2023/12/02',
    productstatus: '未出貨',
  },
];

export const ordersColumns: ColumnType[] = [
  { title: '訂單編號', dataIndex: 'orderNumber', key: 'orderNumber' },
  { title: '顧客', dataIndex: 'custom', key: 'custom' },
  { title: '金額', dataIndex: 'orderPrice', key: 'orderPrice' },
  { title: '訂單建立時間', dataIndex: 'orderTime', key: 'orderTime' },
  { title: '付款狀態', dataIndex: 'payStatus', key: 'payStatus' },
  { title: '出貨狀態', dataIndex: 'orderStatus', key: 'orderStatus' },
];

export const ordersData: OrderDataType[] = [
  {
    id: '001',
    orderNumber: '012012012',
    custom: '小米',
    orderPrice: '$2500',
    orderTime: '2024/01/28',
    payStatus: '未付款',
    orderStatus: '未出貨',
  },
  {
    id: '002',
    orderNumber: '012012013',
    custom: '阿亮',
    orderPrice: '$1500',
    orderTime: '2023/12/20',
    payStatus: '已付款',
    orderStatus: '未出貨',
  },
  {
    id: '003',
    orderNumber: '012012345',
    custom: '玉米頭',
    orderPrice: '$1340',
    orderTime: '2023/12/12',
    payStatus: '已付款',
    orderStatus: '未出貨',
  },
  {
    id: '004',
    orderNumber: '012012554',
    custom: '米頭',
    orderPrice: '$1240',
    orderTime: '2023/12/02',
    payStatus: '已付款',
    orderStatus: '已出貨',
  },
  {
    id: '005',
    orderNumber: '012012546',
    custom: '筍頭',
    orderPrice: '$340',
    orderTime: '2023/11/02',
    payStatus: '已付款',
    orderStatus: '已出貨',
  },
  {
    id: '006',
    orderNumber: '012013852',
    custom: '芋頭',
    orderPrice: '$3340',
    orderTime: '2023/11/01',
    payStatus: '已付款',
    orderStatus: '已出貨',
  },
];

export const LiveListColumns: ColumnType[] = [
  { title: '直播名稱', dataIndex: 'liveNumber', key: 'liveNumber' },
  { title: '直播日期', dataIndex: 'liveDate', key: 'liveDate' },
  { title: '直播開始時間', dataIndex: 'startTime', key: 'tartTime' },
  { title: '直播連結', dataIndex: 'liveLink', key: 'liveLink' },
];

export const LiveListData: LiveListDataType []= [
  {
    id: '001',
    liveNumber: '蕃茄特價直播',
    liveDate: '2024/01/16',
    startTime: '14:00',
    liveLink: '複製連結',
  },
  {
    id: '002',
    liveNumber: '玉米特價直播',
    liveDate: '2024/01/14',
    startTime: '10:30',
    liveLink: '複製連結',
  },
  {
    id: '003',
    liveNumber: '芋頭特價直播',
    liveDate: '2024/01/02',
    startTime: '09:30',
    liveLink: '複製連結',
  },
];
