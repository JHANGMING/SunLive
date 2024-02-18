import Layout from '@/common/components/Layout';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import SuccessOrder from '@/modules/CartPage/payment/SuccessOrder';

const Order = () => {
  return (
    <Layout pageCategory="CartPage">
      <SuccessOrder />
    </Layout>
  );
};

export default Order;

export async function getServerSideProps() {
  try {
    const liveParams: ApiParamsType = {
      apiPath: apiPaths['live'],
      method: 'GET',
    };
    const liveResponse = await fetchApi(liveParams);
    if (liveResponse.statusCode === 200 && liveResponse.data?.liveId) {
      const liveId = liveResponse.data.liveId;
      const liveViewParams: ApiParamsType = {
        apiPath: `${apiPaths['live']}/${liveId}`,
        method: 'GET',
      };
      await fetchApi(liveViewParams);
    }
  } catch (error) {
    console.error('Error fetching live details:', error);
  }

  return {
    props: {},
  };
}