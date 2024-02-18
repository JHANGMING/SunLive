import Button from '@/common/components/Button';
import LiveListTable from '@/common/components/DynamicTable/LIveListTable';
import OrdersSearch from '@/common/components/Input/OrdersSearch';
import { useState } from 'react';
import { LiveListColumns } from '../data';
import Link from 'next/link';

const AllLive = () => {
  const [selectedTab, setSelectedTab] = useState('所有直播');
   const handleTabClick = (tab:string) => {
     setSelectedTab(tab);
   };
  return (
    <div className="w-9/12 flex-grow">
      <div className="bg-white rounded-20 py-18 pl-28 flex gap-24 mb-40">
        {['所有直播', '直播設定'].map((tab) => (
          <Link
            key={tab}
            href={
              tab === '所有直播'
                ? '/dashboard/live'
                : '/dashboard/live/livesetting'
            }
            passHref>
            <h4
              onClick={() => handleTabClick(tab)}
              className={`text-16 font-normal py-10 px-8 rounded-8 cursor-pointer hover:opacity-70 ${
                selectedTab === tab ? 'bg-primary-yellow' : ''
              }`}>
              {tab}
            </h4>
          </Link>
        ))}
      </div>
      <div className="bg-white rounded-20 p-32 flex flex-col">
        <div className="flex justify-between mb-24">
          <h3 className=" text-20 font-semibold ">所有直播</h3>
          <OrdersSearch />
        </div>
        <div className="mb-32">
          <LiveListTable columns={LiveListColumns} />
        </div>
        {/* <Button category="default" classStyle="self-end">
          儲存
        </Button> */}
      </div>
    </div>
  );
};

export default AllLive;
