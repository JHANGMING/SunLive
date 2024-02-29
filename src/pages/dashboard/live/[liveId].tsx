import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { EditLiveProps } from '@/modules/DashboardPage/Management/data';
import EditLiveSettings from '@/modules/DashboardPage/Management/EditLiveSettings';

const EditLive = ({ liveDetailData }: EditLiveProps) => {
  return (
    <Layout pageCategory="dashboardPage">
      <EditLiveSettings liveDetailData={liveDetailData} />
    </Layout>
  );
};

export default EditLive;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;
  const liveId = params ? params['liveId'] : null;
  let liveDetailData = [];
  try {
    // 取得編輯Live 直播頁
    const liveParams: ApiParamsType = {
      apiPath: `${apiPaths['live']}/${liveId}`,
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
