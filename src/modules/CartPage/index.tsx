import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';
import CartFormSection from './CartFormSection';
import CartListSection from './CartListSection';
import CartProcess from './CartProcess';
import { RootState } from '@/redux/store';

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
