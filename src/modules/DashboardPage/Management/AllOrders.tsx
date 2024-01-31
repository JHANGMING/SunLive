import OrdersTable from '@/common/components/DynamicTable/OrdersTable';
import OrdersSearch from '@/common/components/Input/OrdersSearch';
import { ordersColumns, ordersData } from '../data';
import Button from '@/common/components/Button';
import { useEffect, useState } from 'react';
import { AllOrdersProps } from './data';

const AllOrders = ({
  selectedTab: initialSelectedTab,
  onTabChange,
}: AllOrdersProps) => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const [filteredData, setFilteredData] = useState(ordersData);

  useEffect(() => {
    setSelectedTab(initialSelectedTab);
    handleFilterChange(initialSelectedTab);
  }, [initialSelectedTab]);

  const handleFilterChange = (tab: string) => {
    onTabChange(tab);
    setSelectedTab(tab);
    if (tab === '所有訂單') {
      setFilteredData(ordersData);
    } else {
      const status = tab === '未出貨訂單' ? '未出貨' : '已出貨';
      setFilteredData(
        ordersData.filter((order) => order.orderStatus === status)
      );
    }
  };

  return (
    <div className="w-9/12 flex-grow">
      <div className=" bg-white rounded-20 py-18 pl-28 flex gap-24 mb-40">
        {['所有訂單', '未出貨訂單', '已出貨訂單'].map((tab) => (
          <h4
            key={tab}
            className={`text-16 font-normal py-10 px-8 rounded-8 cursor-pointer hover:opacity-70 ${
              selectedTab === tab ? 'bg-primary-yellow' : ''
            }`}
            onClick={() => handleFilterChange(tab)}>
            {tab}
          </h4>
        ))}
      </div>
      <div className="bg-white rounded-20 p-32 flex flex-col">
        <div className="flex justify-between mb-24">
          <h3 className=" text-20 font-semibold ">{selectedTab}</h3>
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
    </div>
  );
};

export default AllOrders;
