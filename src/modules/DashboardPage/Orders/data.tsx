import { ReactNode } from 'react';

export type OrdersDashboardProps = {
  children?: ReactNode;
};

export const tabs = [
  { name: '所有訂單', id: 'allorders' },
  { name: '已出貨訂單', id: 'shippedorders' },
  { name: '未出貨訂單', id: 'unshippedorders' },
];
