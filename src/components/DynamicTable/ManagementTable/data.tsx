import { ColumnType } from '../data';

export type ProductDataType = {
  id: string;
  [key: string]: string | string[] | number;
};
export type DynamicTableProps = {
  columns: ColumnType[];
  showCheckbox?: boolean;
  data?: ProductDataType[];
  initialData?: ProductDataType[];
};
