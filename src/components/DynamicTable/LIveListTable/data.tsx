import { ColumnType } from '../data';

export type LiveListDataType = {
  id: string;
  [key: string]: string | string[] | number;
};
export type DynamicTableProps = {
  columns: ColumnType[];
};
