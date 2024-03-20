import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/api/apiPaths';
import LiveStreamView from '@/modules/LiveStreamView';
import createApiParams from '@/common/helpers/createApiParams';
import { LivestreamingProps } from '@/modules/LiveStreamView/data';
import { setAllProductsData } from '@/redux/features/productSlice';

const Livestreaming = ({ liveDetailData }: LivestreamingProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProductsData({ liveDetailData }));
  }, [liveDetailData]);
  return (
    <Layout pageCategory="liveStreamView">
      <LiveStreamView liveDetailData={liveDetailData} />
    </Layout>
  );
};

export default Livestreaming;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params } = context;
  const liveId = params ? params.liveId : null;

  let liveDetailData = [];
  try {
    // 取得編輯Live 直播頁
    const liveParams = createApiParams(`${apiPaths.live}/${liveId}`, 'GET');
    const liveResponse = await fetchApi(liveParams);
    switch (liveResponse.statusCode) {
      case 200:
        liveDetailData = liveResponse.data;
        break;
      case 401:
        return { notFound: true };
      default:
        return { notFound: true };
    }
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
  return {
    props: {
      liveDetailData,
    },
  };
};
