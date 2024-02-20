import { format } from 'date-fns';
import { FarmerOrderDataType, OrderDataType } from '../components/DynamicTable/data';

export const transOrderData = (data: OrderDataType[]) => {
  return data?.map((item) => ({
    ...item,
    creatTime: format(new Date(item.creatTime), 'yyyy/MM/dd'),
    shipment: item.shipment ? '已出貨' : '未出貨',
  }));
};


export const transFarmerOrderData = (data: FarmerOrderDataType[]) => {
  return data?.map((item) => ({
    ...item,
    creatTime: format(new Date(item.creatTime), 'yyyy/MM/dd'),
    shipment: item.shipment ? '已出貨' : '未出貨',
    ispay: item.ispay ? '已付款' : '未付款',
  }));
};