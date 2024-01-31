
import { ColumnType } from '../data';

export type ProductDataType = {
  [key: string]: string | string[] | number;
  id: string;

};
export type DynamicTableProps = {
  columns: ColumnType[];
  data: ProductDataType[];
  initialData?: ProductDataType[];
  showCheckbox: boolean;
};
