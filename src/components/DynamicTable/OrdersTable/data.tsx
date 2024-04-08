import {
  ColumnType,
  FarmerOrderDataType,
} from '@/components/DynamicTable/data';

export type OrderDataType = {
  [key: string]: string | string[] | number;
};
export type DynamicTableProps = {
  columns: ColumnType[];
  initialData: FarmerOrderDataType[];
};

export const shipmentOptions = [
  { value: true, label: '已出貨' },
  { value: false, label: '未出貨' },
];
