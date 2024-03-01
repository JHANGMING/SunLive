import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import UpcomingProduct from './UpcomingProduct';
import { updateUpcomingLiveWithStyles } from '@/common/helpers/upcomingDataAddclass';

const UpcomingProductsList = () => {
  const { liveData } = useSelector((state: RootState) => state.product);
  const upcomingLive = liveData?.data?.upcomingLive || [];
  const updatedUpcomingLive=updateUpcomingLiveWithStyles(upcomingLive)
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
