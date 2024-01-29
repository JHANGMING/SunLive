import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import LiveSaleSection from './LiveSaleSection';

const LiveStreamView = () => {
  return (
    <>
      <ViewBanner />
      <LiveViewer />
      <LiveSaleSection />
    </>
  );
};

export default LiveStreamView;
