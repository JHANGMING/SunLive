

import { ColumnType } from '../data';
export type OrderDataType ={
  [key: string]: string | string[]; // 根据实际情况调整类型
  id:string;
}
export type DynamicTableProps = {
  columns: ColumnType[];
  data?: OrderDataType[];
  initialData: OrderDataType[];
  showCheckbox: boolean;
};
