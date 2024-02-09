import { useSelector } from 'react-redux';
import UpcomingProduct from './UpcomingProduct';
import { productData } from './data';
import { RootState } from '@/redux/store';



const UpcomingProductsList = () => {
  const { liveData } = useSelector((state: RootState) => state.product);
  const upcomingLive = liveData?.data?.upcomingLive || [];
  const classStyles = ['ml-16', 'ml-102', 'ml-43'];
  const updatedUpcomingLive = upcomingLive.slice(0, 3).map((item, index) => {
    return {
      ...item,
      classStyle: classStyles[index],
    };
  });
  return (
    <div className=" col-start-5 col-end-11">
      <ul className="flex flex-col gap-40">
        {updatedUpcomingLive.map((data) => (
          <UpcomingProduct key={data.liveId} {...data} />
        ))}
      </ul>
    </div>
  );
};

export default UpcomingProductsList;
