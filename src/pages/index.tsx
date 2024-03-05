import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/apiPaths';
import LandingPage from '@/modules/LandingPage';
import { setCartData } from '@/redux/features/cartSlice';
import { HomePropsType } from '@/modules/LandingPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

export default function Home({
  liveData,
  cartData,
  topSaleProduct,
}: HomePropsType) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        liveData,
        topSaleProduct,
      })
    );
    dispatch(setCartData({ cartData }));
  }, [liveData, topSaleProduct, cartData]);

  return (
    <Layout pageCategory="landingPage">
      <LandingPage />
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req });
  let liveData = [];
  let cartData = [];
  let topSaleProduct = [];

  // 取得近期直播商品
  const liveParams: ApiParamsType = {
    apiPath: apiPaths['live'],
    method: 'GET',
  };

  // 取得熱門商品
  const otherCategoryParams: ApiParamsType = {
    apiPath: apiPaths['otherCategory'],
    method: 'GET',
  };

  // 取得購物車
  const cartParams: ApiParamsType = {
    apiPath: apiPaths['cart'],
    method: 'GET',
    authToken: token,
  };

  const responses = await Promise.allSettled([
    fetchApi(liveParams),
    fetchApi(otherCategoryParams),
    token ? fetchApi(cartParams) : Promise.resolve(null),
  ]);
  const liveResponse =
    responses[0].status === 'fulfilled'
      ? responses[0].value
      : { statusCode: 500 };
  const otherCategoryResponse =
    responses[1].status === 'fulfilled'
      ? responses[1].value
      : { statusCode: 500 };
  const cartResponse =
    responses[2].status === 'fulfilled'
      ? responses[2].value
      : { statusCode: 500 };

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
