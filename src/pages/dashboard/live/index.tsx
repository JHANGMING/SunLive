import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from 'cookies-next';
import wrapper from '@/redux/store';
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

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const cookies = getCookies({ req, res });
      const token = cookies.token;
      let listData = {};
      if (!token) {
        return {
          redirect: {
            destination: '/auth/login',
            permanent: false,
          },
        };
      }
      if (token) {
        const liveParams: ApiParamsType = {
          apiPath: apiPaths['livelist'],
          method: 'GET',
          authToken: token,
        };
        const liveResponse = await fetchApi(liveParams);
        if (liveResponse.statusCode === 200) {
          listData = liveResponse.data;
        }
      }
      return {
        props: {
          listData,
        },
      };
    }
);
