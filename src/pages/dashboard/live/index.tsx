import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import AllLive from '@/modules/DashboardPage/Management/AllLive';
import { setLivelistData } from '@/redux/features/dashboardSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { LiveListProps } from '@/modules/DashboardPage/Management/data';
const Live = ({ listData }: LiveListProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLivelistData(listData));
  }, [listData]);
  return (
    <Layout pageCategory="dashboardPage">
      <AllLive />
    </Layout>
  );
};

export default Live;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req, res: context.res });
  let listData = {};
  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const liveParams: ApiParamsType = {
    apiPath: apiPaths['livelist'],
    method: 'GET',
    authToken: token,
  };
  const liveResponse = await fetchApi(liveParams);
  if (liveResponse.statusCode === 200) {
    listData = liveResponse.data;
  }
  return {
    props: {
      listData,
    },
  };
}
