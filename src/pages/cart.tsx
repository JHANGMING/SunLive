import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from 'cookies-next';
import wrapper from '@/redux/store';
import CartPage from '@/modules/CartPage';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import { CartProps } from '@/modules/CartPage/data';
import { setCartData } from '@/redux/features/cartSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

const Cart = ({ cartData }: CartProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartData({ cartData }));
  }, [cartData]);
  return (
    <Layout pageCategory="CartPage">
      <CartPage />
    </Layout>
  );
};

export default Cart;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const cookies = getCookies({ req, res });
      const token = cookies.token;
      let cartData = {};
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
          apiPath: apiPaths['cart'],
          method: 'GET',
          authToken: token,
        };
        const cartResponse = await fetchApi(cartParams);
        if (cartResponse.statusCode === 200) {
          cartData = cartResponse;
        }
      }
      return {
        props: {
          auth: token,
          cartData,
        },
      };
    }
);
