import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { farmerProductParams } from '@/constants/api/apiParams';
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
  const token = getCookie('token', { req: context.req });
  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const productParams = { ...farmerProductParams, authToken: token };
  const listResponse = await fetchApi(productParams);
  switch (listResponse.statusCode) {
    case 200:
      return {
        props: {
          listData: listResponse.data,
        },
      };
    case 409:
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    default:
      return { props: {} };
  }
}
