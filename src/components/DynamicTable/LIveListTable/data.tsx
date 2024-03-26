import { ColumnType } from '@/components/DynamicTable/data';

export type LiveListDataType = {
  id: string;
  [key: string]: string | string[] | number;
};
export type DynamicTableProps = {
  columns: ColumnType[];
};
