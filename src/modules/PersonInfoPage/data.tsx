type AuthDataType = {
  sex: boolean;
  phone: string;
  account: string;
  nickName: string;
  birthday: string;
};

export type AccountSettingProps = {
  data: { data: AuthDataType };
};

export const ordersColumns = [
  { title: '訂單編號', dataIndex: 'orderId', key: 'orderId' },
  { title: '小農', dataIndex: 'farmerNickName', key: 'farmerNickName' },
  { title: '金額', dataIndex: 'orderSum', key: 'orderSum' },
  { title: '訂單建立時間', dataIndex: 'creatTime', key: 'creatTime' },
  { title: '出貨狀態', dataIndex: 'shipment', key: 'shipment' },
];
