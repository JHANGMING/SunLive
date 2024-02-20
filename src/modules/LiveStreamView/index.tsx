import useSWR from 'swr';
import { useRouter } from 'next/router';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import { LivestreamingProps } from './data';
import LiveSaleSection from './LiveSaleSection';

const LiveStreamView = ({ liveDetailData }:LivestreamingProps) => {
  const router = useRouter();
  const { liveId } = router.query;
  const { data } = useSWR(
    liveId ? `/api${nextRoutes['live']}?id=${liveId}` : null,
    fetcher,
    { fallbackData: liveDetailData }
  );

  return (
    <>
      <ViewBanner />
      <LiveViewer liveDetailData={data?.data} />
      <LiveSaleSection liveDetailData={data?.data} />
    </>
  );
};

export default LiveStreamView;
