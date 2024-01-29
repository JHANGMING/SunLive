import { ordersColumns, ordersData } from './data';
import DynamicTable from '@/common/components/DynamicTable';

const AllOrders = () => {
  return (
    <>
      <h3 className=" text-20 mb-40 font-semibold ">所有訂單</h3>
      <DynamicTable
        columns={ordersColumns}
        data={ordersData}
        showCheckbox={false}
      />
    </>
  );
};

export default AllOrders;
