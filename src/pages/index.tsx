import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import LandingPage from '@/modules/LandingPage';
import fetchApi from '@/common/helpers/fetchApi';
import { setCartData } from '@/redux/features/cartSlice';
import { HomePropsType } from '@/modules/LandingPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import {
  liveParams,
  otherCategoryParams,
  cartParams,
} from '@/constants/api/apiParams';

const Home = ({ liveData, cartData, topSaleProduct }: HomePropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        liveData,
        topSaleProduct,
      }),
    );
    dispatch(setCartData({ cartData }));
  }, [liveData, topSaleProduct, cartData]);

  return (
    <Layout pageCategory="landingPage">
      <LandingPage />
    </Layout>
  );
};
export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req });
  let liveData = [];
  let cartData = [];
  let topSaleProduct = [];

  // 取得購物車
  const cartParamsData = { ...cartParams, token };

  const responses = await Promise.allSettled([
    fetchApi(liveParams),
    fetchApi(otherCategoryParams),
    token ? fetchApi(cartParamsData) : Promise.resolve(null),
  ]);
  const liveResponse = responses[0].status === 'fulfilled' ? responses[0].value : { statusCode: 500 };
  const otherCategoryResponse = responses[1].status === 'fulfilled' ? responses[1].value : { statusCode: 500 };
  const cartResponse = responses[2].status === 'fulfilled' ? responses[2].value : { statusCode: 500 };

  if (liveResponse.statusCode === 200) {
    liveData = liveResponse;
  }

  if (otherCategoryResponse.statusCode === 200 && otherCategoryResponse.data) {
    topSaleProduct = otherCategoryResponse.data.topSaleProduct;
  }

  if (cartResponse && cartResponse.statusCode === 200) {
    cartData = cartResponse.data;
  }

  return {
    props: {
      liveData,
      topSaleProduct,
      cartData,
    },
  };
}
