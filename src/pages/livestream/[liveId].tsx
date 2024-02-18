
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import LiveStreamView from '@/modules/LiveStreamView';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import { LivestreamingProps } from '@/modules/LiveStreamView/data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllProductsData } from '@/redux/features/productSlice';

const Livestreaming = ({ livedetailData }:LivestreamingProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setAllProductsData(livedetailData));
    }, [livedetailData]);
  return (
    <Layout pageCategory="liveStreamView">
      <LiveStreamView />
    </Layout>
  );
};

export default Livestreaming;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;
  const liveId = params ? params['liveId'] : null;
  
  let livedetailData = [];
  try {
    // 取得編輯Live 直播頁
    const liveParams: ApiParamsType = {
      apiPath: `${apiPaths['live']}/${liveId}`,
      method: 'GET',
    };
    const liveResponse = await fetchApi(liveParams);
    if (liveResponse.statusCode === 200) {
      livedetailData = liveResponse.data;
    } else if (livedetailData.length === 0) {
      return { notFound: true };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      livedetailData,
    },
  };
};