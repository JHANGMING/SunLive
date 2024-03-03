import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from 'cookies-next';
import wrapper from '@/redux/store';
import CartPage from '@/modules/CartPage';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import { setCartData } from '@/redux/features/cartSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { showLoading } from '@/redux/features/messageSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    dispatch(showLoading());
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <Layout pageCategory="CartPage">
      <CartPage />
    </Layout>
  );
};

export default Cart;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const cookies = getCookies({ req, res });
      const token = cookies.token;
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
          store.dispatch(setCartData({ cartData: cartResponse }));
        }
      }
      return {
        props: {},
      };
    }
);
