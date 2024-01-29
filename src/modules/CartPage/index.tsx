import CartEmpty from './CartEmpty';
import CartFormSection from './CartFormSection';
import CartLink from './CartLink';
import CartListSection from './CartListSection';
import CartProcess from './CartProcess';

const CartPage = () => {
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
