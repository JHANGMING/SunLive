import Link from 'next/link';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LiveListTable from '@/components/DynamicTable/LIveListTable';
import OrdersSearch from '@/components/Input/OrdersSearch';
import { LiveListColumns } from '../data';

const AllLive = () => {
  const [selectedTab, setSelectedTab] = useState('所有直播');
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div className="w-9/12 flex-grow">
      <div className="bg-white rounded-20 py-18 pl-28 flex gap-24 mb-40">
        {['所有直播', '直播設定'].map((tab) => (
          <Link
            key={uuidv4()}
            href={
              tab === '所有直播'
                ? '/dashboard/live'
                : '/dashboard/live/livesetting'
            }
            passHref
          >
            <button
              type="button"
              onClick={() => handleTabClick(tab)}
              className={`text-16 font-normal py-10 px-8 rounded-8 cursor-pointer hover:opacity-70 ${
                selectedTab === tab ? 'bg-primary-yellow' : ''
              }`}
            >
              {tab}
            </button>
          </Link>
        ))}
      </div>
      <div className="bg-white rounded-20 p-32 flex flex-col">
        <div className="flex justify-between mb-24">
          <h3 className=" text-20 font-semibold ">所有直播</h3>
          <OrdersSearch placeholder="尋找直播" />
        </div>
        <div className="mb-32">
          <LiveListTable columns={LiveListColumns} />
        </div>
      </div>
    </div>
  );
};

export default AllLive;
