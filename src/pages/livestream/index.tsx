import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/api/apiPaths';
import LiveStreamPage from '@/modules/LiveStreamPage';
import { LiveStreamProps } from '@/modules/LiveStreamPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

const LiveStream = ({ liveData }: LiveStreamProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        liveData,
      }),
    );
  }, [liveData]);

  return (
    <Layout pageCategory="liveStreamPage">
      <LiveStreamPage />
    </Layout>
  );
};

export default LiveStream;

export async function getServerSideProps() {
  let liveData = [];
  try {
    // 取得近期直播商品
    const liveParams: ApiParamsType = {
      apiPath: apiPaths.live,
      method: 'GET',
    };

    const liveResponse = await fetchApi(liveParams);
    if (liveResponse.statusCode === 200) {
      liveData = liveResponse;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      liveData,
    },
  };
}
