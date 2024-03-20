import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { farmerLiveParams } from '@/constants/api/apiParams';
import AllLive from '@/modules/DashboardPage/Management/AllLive';
import { setLivelistData } from '@/redux/features/dashboardSlice';
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
  const token = getCookie('token', { req: context.req });
  let listData = {};
  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const liveParams = { ...farmerLiveParams, authToken: token };
  const liveResponse = await fetchApi(liveParams);
  switch (liveResponse.statusCode) {
    case 200:
      listData = liveResponse.data;
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
  return {
    props: {
      listData,
    },
  };
}
