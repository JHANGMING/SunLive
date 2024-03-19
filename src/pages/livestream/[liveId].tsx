import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/api/apiPaths';
import LiveStreamView from '@/modules/LiveStreamView';
import { LivestreamingProps } from '@/modules/LiveStreamView/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

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
    const liveParams: ApiParamsType = {
      apiPath: `${apiPaths.live}/${liveId}`,
      method: 'GET',
    };
    const liveResponse = await fetchApi(liveParams);
    if (liveResponse.statusCode === 200) {
      liveDetailData = liveResponse;
    } else if (liveDetailData.length === 0) {
      return { notFound: true };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      liveDetailData,
    },
  };
};
