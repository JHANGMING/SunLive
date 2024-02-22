
import { ColumnType } from "../data";


export type LiveListDataType = {
  [key: string]: string | string[] |number; 
  id: string;
};
export type DynamicTableProps = {
  columns: ColumnType[];
};

