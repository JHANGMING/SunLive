import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import CartPage from '@/modules/CartPage';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import { CartProps } from '@/modules/CartPage/data';
import { setCartData } from '@/redux/features/cartSlice';
import { showLoading } from '@/redux/features/messageSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

const Cart = ({ cartData }:CartProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartData({ cartData }));
    dispatch(showLoading());
  }, [cartData]);
  return (
    <Layout pageCategory="CartPage">
      <CartPage />
    </Layout>
  );
};

export default Cart;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req, res: context.res });
  let cartData = [];
  try {

    // 取得購物車
    if (token) {
      const cartParams: ApiParamsType = {
        apiPath: apiPaths['cart'],
        method: 'GET',
        authToken: token,
      };
      const cartResponse = await fetchApi(cartParams);
      if (cartResponse.statusCode === 200) {
        cartData = cartResponse;
      }
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
