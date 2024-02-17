import { GetServerSidePropsContext } from 'next';
import { getCookie } from 'cookies-next';
import Layout from '@/common/components/Layout';

import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import EditLiveSettings from '@/modules/DashboardPage/Management/EditLiveSettings';
import { EditLiveProps } from '@/modules/DashboardPage/Management/data';

const EditLive = ({ detailData }: EditLiveProps) => {
  return (
    <Layout pageCategory="dashboardPage">
      <EditLiveSettings detailData={detailData} />
    </Layout>
  );
};

export default EditLive;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const token = getCookie('token', { req: context.req, res: context.res });
  const params = context.params;
  const liveId = params ? params['liveId'] : null;
  let detailData = [];
  try {
    // 取得編輯Live
    const detailParams: ApiParamsType = {
      apiPath: `${apiPaths['liveSet']}/${liveId}`,
      method: 'GET',
      authToken: token,
    };
    const detailResponse = await fetchApi(detailParams);
    if (detailResponse.statusCode === 200) {
      detailData = detailResponse.data;
    } else if (detailData.length === 0) {
      return { notFound: true };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      detailData,
    },
  };
};
