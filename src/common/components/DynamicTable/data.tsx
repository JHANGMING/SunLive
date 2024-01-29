type ColumnType = {
  title: string;
  dataIndex: string;
  key: string;
};

type OrdersDataItemType = {
  id: string;
  farmer: string;
  amount: string;
  createTime: string;
  status: string;
  [key: string]: string;
};

export type DynamicTableProps = {
  columns: ColumnType[];
  data: OrdersDataItemType[];
  showCheckbox: boolean;
};
