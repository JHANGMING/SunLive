import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import LiveSaleSection from './LiveSaleSection';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store';
import useSWR from 'swr';
import { fetcher } from '@/common/helpers/fetcher';
import { useEffect } from 'react';
import { nextRoutes } from '@/constants/apiPaths';

const LiveStreamView = () => {
   const router = useRouter();
   const { liveId } = router.query;
  // const liveDetailData = useSelector(
  //   (state: RootState) => state.product.liveDetailData
  // ); 
  const { data: liveDetailData } = useSWR(
    liveId ? `/api${nextRoutes['live']}?id=${liveId}` : null,
    fetcher
  );
  return (
    <>
      <ViewBanner />
      <LiveViewer liveDetailData={liveDetailData?.data} />
      <LiveSaleSection liveDetailData={liveDetailData?.data} />
    </>
  );
};

export default LiveStreamView;
