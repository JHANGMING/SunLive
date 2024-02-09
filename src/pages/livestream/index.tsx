
import Layout from '@/common/components/Layout';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import LiveStreamPage from '@/modules/LiveStreamPage';
import { liveStreamProps } from '@/modules/LiveStreamPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const LiveStream = ({liveData}:liveStreamProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        liveData,
      })
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
      apiPath: apiPaths['live'],
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