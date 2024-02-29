import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CartEmpty from './CartEmpty';
import CartProcess from './CartProcess';
import CartFormSection from './CartFormSection';
import CartListSection from './CartListSection';

const CartPage = () => {
  const { cartData } = useSelector((state: RootState) => state.cart);
  const cartLength = cartData?.cartItemLength ?? 0;

  return (
    <>
      <CartProcess />
      {cartLength === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartListSection cartData={cartData} />
          <CartFormSection cartData={cartData} />
        </>
      )}
    </>
  );
};

export default CartPage;
