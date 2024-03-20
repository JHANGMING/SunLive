import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/api/apiPaths';
import createApiParams from '@/common/helpers/createApiParams';
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
        liveDetailData = liveResponse;
        break;
      case 409:
        return {
          redirect: {
            destination: '/auth/login',
            permanent: false,
          },
        };
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
