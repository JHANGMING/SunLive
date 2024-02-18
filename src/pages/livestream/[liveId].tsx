
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import LiveStreamView from '@/modules/LiveStreamView';

const Livestreaming = () => {
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
  console.log('liveId', liveId);
  
  // let detailData = [];
  // try {
  //   // 取得編輯Live
  //   const detailParams: ApiParamsType = {
  //     apiPath: `${apiPaths['liveSet']}/${liveId}`,
  //     method: 'GET',
  //     authToken: token,
  //   };
  //   const detailResponse = await fetchApi(detailParams);
  //   if (detailResponse.statusCode === 200) {
  //     detailData = detailResponse.data;
  //   } else if (detailData.length === 0) {
  //     return { notFound: true };
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  return {
    props: {
      // detailData,
    },
  };
};