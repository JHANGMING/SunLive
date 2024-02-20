import useSWR from 'swr';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import DynamicTable from '@/common/components/DynamicTable/userOrderTable';
import { ordersColumns} from './data';

const AllOrders = () => {
  const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['orderlist']}` : null,
    fetcher
  );
  return (
    <>
      <h3 className=" text-20 mb-40 font-semibold ">所有訂單</h3>
      <DynamicTable columns={ordersColumns} data={data?.data} showCheckbox={false} />
    </>
  );
};

export default AllOrders;
