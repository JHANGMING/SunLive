import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import LiveSaleSection from './LiveSaleSection';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const LiveStreamView = () => {
  const liveDetailData = useSelector(
    (state: RootState) => state.product.liveDetailData
  ); 
  return (
    <>
      <ViewBanner />
      <LiveViewer liveDetailData={liveDetailData} />
      <LiveSaleSection liveDetailData={liveDetailData} />
    </>
  );
};

export default LiveStreamView;
