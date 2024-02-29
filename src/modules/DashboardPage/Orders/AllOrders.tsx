import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import OrdersSearch from '@/common/components/Input/OrdersSearch';
import { transFarmerOrderData } from '@/common/helpers/transOrderData';
import OrdersTable from '@/common/components/DynamicTable/OrdersTable';
import { FarmerOrderDataType } from '@/common/components/DynamicTable/data';
import OrdersDashboard from '.';
import { ordersColumns } from '../data';

const AllOrders = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const { authStatus } = useAuthStatus();
  const [tabTitle, setTabTitle] = useState('所有訂單');
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['getorderlist']}` : null,
    fetcher
  );
  const [filteredData, setFilteredData] = useState<
    FarmerOrderDataType[] | null
  >(null);
  useEffect(() => {
    if (!data) return;
    const transformedData = transFarmerOrderData(data.data);
    let filtered;
    switch (orderId) {
      case 'allorders':
        setTabTitle('所有訂單');
        filtered = transformedData;
        break;
      case 'unshippedorders':
        setTabTitle('未出貨訂單');
        filtered = transformedData.filter((order) => !order.shipment);
        break;
      case 'shippedorders':
        setTabTitle('已出貨訂單');
        filtered = transformedData.filter((order) => order.shipment);
        break;
      default:
        filtered = transformedData;
        router.push('/dashboard/orders/allorders');
        break;
    }
    setFilteredData(filtered);
  }, [data, orderId]);

  return (
    <OrdersDashboard>
      <div className="bg-white rounded-20 p-32 flex flex-col">
        <div className="flex justify-between mb-24">
          <h3 className=" text-20 font-semibold ">{tabTitle}</h3>
          <OrdersSearch placeholder="尋找訂單" />
        </div>
        <div className="mb-32">
          {filteredData && (
            <OrdersTable columns={ordersColumns} initialData={filteredData} />
          )}
        </div>
      </div>
    </OrdersDashboard>
  );
};

export default AllOrders;
