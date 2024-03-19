import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import CartPage from '@/modules/CartPage';
import Layout from '@/common/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { cartParams } from '@/constants/api/apiParams';
import { CartListProps } from '@/modules/CartPage/data';
import { setCartData } from '@/redux/features/cartSlice';

const Cart = ({ cartData }: CartListProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartData({ cartData }));
  }, [cartData]);
  return (
    <Layout pageCategory="CartPage">
      <CartPage cartSSRData={cartData.data} />
    </Layout>
  );
};

export default Cart;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req });
  let cartData = [];
  try {
    if (!token) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
    // 取得購物車商品
    const cartParamsData = { ...cartParams, authToken: token };
    const cartResponse = await fetchApi(cartParamsData);
    switch (cartResponse.statusCode) {
      case 200:
        cartData = cartResponse;
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      cartData,
    },
  };
}
