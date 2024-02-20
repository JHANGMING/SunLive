import OrdersTable from '@/common/components/DynamicTable/OrdersTable';
import OrdersSearch from '@/common/components/Input/OrdersSearch';
import { ordersColumns, ordersData } from '../data';
import Button from '@/common/components/Button';
import { useEffect, useState } from 'react';
import { AllOrdersProps } from '../Management/data';
import OrdersDashboard from '.';
import { useRouter } from 'next/router';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import useSWR from 'swr';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';

const AllOrders = () => {
  const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['getorderlist']}` : null,
    fetcher
  );
  console.log('data', data.data);
  
  const [filteredData, setFilteredData] = useState(ordersData);
  const router = useRouter();
  const { orderId } = router.query;
  const [tabTitle, setTabTitle] = useState('所有訂單');
  useEffect(() => {
    switch (orderId) {
      case 'allorders':
        setTabTitle('所有訂單');
        break;
      case 'unshippedorders':
        setTabTitle('未出貨訂單');
        break;
      case 'shippedorders':
        setTabTitle('已出貨訂單');
        break;
      default:
        router.push('/dashboard/orders/allorders');
        break;
    }
  }, [orderId, router]);

  useEffect(() => {
    if (!orderId || orderId === 'allorders') {
      setFilteredData(ordersData);
    } else {
      const status = orderId === 'unshippedorders' ? '未出貨' : '已出貨'; 
      setFilteredData(
        ordersData.filter((order) => order.orderStatus === status)
      );
    }
  }, [orderId]); 
    return (
      <OrdersDashboard>
        <div className="bg-white rounded-20 p-32 flex flex-col">
          <div className="flex justify-between mb-24">
            <h3 className=" text-20 font-semibold ">{tabTitle}</h3>
            <OrdersSearch />
          </div>
          <div className="mb-32">
            <OrdersTable
              columns={ordersColumns}
              initialData={filteredData}
              showCheckbox={true}
            />
          </div>
          <Button category="default" classStyle="self-end">
            儲存
          </Button>
        </div>
      </OrdersDashboard>
    );
};

export default AllOrders;
