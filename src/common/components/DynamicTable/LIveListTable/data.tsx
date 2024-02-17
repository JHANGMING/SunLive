
import { ColumnType } from "../data";


export type LiveListDataType = {
  [key: string]: string | string[]; // 根据实际情况调整类型
  id: string;
};
export type DynamicTableProps = {
  columns: ColumnType[];
  data?: LiveListDataType[];
  initialData?: LiveListDataType[];
  showCheckbox: boolean;
};
