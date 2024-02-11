import Layout from '@/common/components/Layout';
import CartPage from '@/modules/CartPage';
import wrapper from '@/redux/store';
import { getCookies } from 'cookies-next';

const Cart = () => {
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
      const auth = getCookies({ req, res });
      if (!auth.token) {
        res.writeHead(302, { Location: '/auth/login' });
        res.end();
      }
      return {
        props: {
          auth,
        },
      };
    }
);
