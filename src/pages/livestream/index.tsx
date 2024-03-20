import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/common/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import LiveStreamPage from '@/modules/LiveStreamPage';
import { liveParams } from '@/constants/api/apiParams';
import { LiveStreamProps } from '@/modules/LiveStreamPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';

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
    const liveResponse = await fetchApi(liveParams);
    switch (liveResponse.statusCode) {
      case 200:
        liveData = liveResponse;
        break;
      default:
        break;
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
