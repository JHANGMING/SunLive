import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import LandingPage from '@/modules/LandingPage';
import fetchApi from '@/common/helpers/fetchApi';
import { setCartData } from '@/redux/features/cartSlice';
import { HomePropsType } from '@/modules/LandingPage/data';
import { LivesDataType } from '@/constants/types/live/live';
import { CartDataType } from '@/constants/types/cart/cartlist';
import { setAllProductsData } from '@/redux/features/productSlice';
import { AllproductsDataType } from '@/constants/types/product/allproducts';
import {
  liveParams,
  cartParams,
  otherCategoryParams,
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
  let liveData: LivesDataType = {};
  let cartData: CartDataType = {};
  let topSaleProduct: AllproductsDataType = [];

  // 取得購物車
  const cartParamsData = { ...cartParams, authToken: token };

  const responses = await Promise.allSettled([
    fetchApi(liveParams),
    fetchApi(otherCategoryParams),
    token ? fetchApi(cartParamsData) : Promise.resolve(null),
  ]);
  responses.forEach((response, index) => {
    if (response.status !== 'fulfilled' || !response.value) return;
    const { statusCode } = response.value;
    switch (statusCode) {
      case 200:
        switch (index) {
          case 0:
            liveData = response.value;
            break;
          case 1:
            topSaleProduct = response.value.data.topSaleProduct;
            break;
          case 2:
            cartData = response.value.data;
            break;
          default:
            break;
        }
        break;
      case 401:
        break;
      default:
        break;
    }
  });

  return {
    props: {
      liveData,
      topSaleProduct,
      cartData,
    },
  };
}
