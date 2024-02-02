import { useRouter } from 'next/router';
import CartEmpty from './CartEmpty';
import CartFormSection from './CartFormSection';
import CartLink from './CartLink';
import CartListSection from './CartListSection';
import CartProcess from './CartProcess';
import { useEffect } from 'react';
import { getCookies } from 'cookies-next';

const CartPage = () => {
  const router = useRouter();
  const authToken = getCookies().Token;

  useEffect(() => {
    if (!authToken) {
      router.push('/auth/login');
    }
  }, [authToken, router]);
  return (
    <>
      <CartProcess />
      {/* <CartEmpty /> */}
      <CartListSection />
      <CartFormSection />
    </>
  );
};

export default CartPage;
