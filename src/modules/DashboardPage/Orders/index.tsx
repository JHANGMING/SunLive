
import { OrdersDashboardProps, tabs } from './data';
import { useRouter } from 'next/router';

const OrdersDashboard = ({ children }: OrdersDashboardProps) => {
  const router = useRouter();
  const { orderId } = router.query;
  
  return (
    <div className="w-9/12 flex-grow">
      <div className=" bg-white rounded-20 py-18 pl-28 flex gap-24 mb-40">
        {tabs.map((tab) => (
          <h4
            key={tab.id}
            onClick={() => router.push(`/dashboard/orders/${tab.id}`)}
            className={`text-16 font-normal py-10 px-8 rounded-8 cursor-pointer hover:opacity-70 ${
              orderId === tab.id ? 'bg-primary-yellow ' : ''
            }`}>
            {tab.name}
          </h4>
        ))}
      </div>
      {children}
    </div>
  );
};

export default OrdersDashboard;
