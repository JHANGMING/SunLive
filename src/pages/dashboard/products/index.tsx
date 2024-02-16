import { useEffect } from 'react';
import { getCookies } from 'cookies-next';
import { useDispatch } from 'react-redux';
import wrapper from '@/redux/store';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import AllProducts from '@/modules/DashboardPage/Management/AllProducts';
import { ProductPorps } from '@/modules/DashboardPage/Management/data';
import { setProductlistData } from '@/redux/features/dashboardSlice';
const Products = ({listData}:ProductPorps) => {
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
        const cartParams: ApiParamsType = {
          apiPath: apiPaths['productlist'],
          method: 'GET',
          authToken: token,
        };
        const listResponse = await fetchApi(cartParams);
        if (listResponse.statusCode === 200) {
          listData = listResponse.data;
        }
      }
      return {
        props: {
          listData,
        },
      };
    }
);
