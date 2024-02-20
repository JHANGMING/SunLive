export type ColumnType = {
  title: string;
  dataIndex: string;
  key: string;
};

export type OrderDataType = {
  creatTime: string;
  farmerNickName: string;
  orderId: number;
  orderSum: number;
  shipment: boolean;
};

export type FarmerOrderDataType = {
  userNickName: string;
  creatTime: string;
  ispay: string;
  orderId: number;
  orderSum: number;
  shipment: boolean;
};

export type DynamicTableProps = {
  columns: ColumnType[];
  data: OrderDataType[];
  showCheckbox?: boolean;
};
