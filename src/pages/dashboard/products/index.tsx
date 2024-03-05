import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { setProductlistData } from '@/redux/features/dashboardSlice';
import { ProductPorps } from '@/modules/DashboardPage/Management/data';
import AllProducts from '@/modules/DashboardPage/Management/AllProducts';
const Products = ({ listData }: ProductPorps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductlistData(listData));
  }, [listData]);
  return (
    <Layout pageCategory="dashboardPage">
      <AllProducts />
    </Layout>
  );
};

export default Products;

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
  const cartParams: ApiParamsType = {
    apiPath: apiPaths['productlist'],
    method: 'GET',
    authToken: token,
  };
  const listResponse = await fetchApi(cartParams);
  if (listResponse.statusCode === 200) {
    listData = listResponse.data;
  }
  return {
    props: {
      listData,
    },
  };
}


