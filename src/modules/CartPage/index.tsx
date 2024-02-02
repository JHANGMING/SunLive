import useRequireAuth from '@/common/hooks/useRequireAuth';
import CartEmpty from './CartEmpty';
import CartFormSection from './CartFormSection';
import CartListSection from './CartListSection';
import CartProcess from './CartProcess';

const CartPage = () => {
  const authToken = useRequireAuth();
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
