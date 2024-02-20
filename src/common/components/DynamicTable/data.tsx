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
  creatTime: string;
  userNickName: string;
  orderId: number;
  orderSum: number;
  shipment: boolean;
  ispay: boolean;
};

export type DynamicTableProps = {
  columns: ColumnType[];
  data: OrderDataType[];
  showCheckbox?: boolean;
};
