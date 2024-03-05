import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { CartProps } from './data';
import CartEmpty from './CartEmpty';
import CartProcess from './CartProcess';
import CartFormSection from './CartFormSection';
import CartListSection from './CartListSection';

const CartPage = ({ cartSSRData }:CartProps) => {
  const [cartDataLocal, setCartDataLocal] = useState(cartSSRData);
  const { cartData } = useSelector((state: RootState) => state.cart);
  const cartLength = cartDataLocal?.cartItemLength ?? 0;
  useEffect(() => {
      setCartDataLocal(cartData);
  }, [cartData]);

  return (
    <>
      <CartProcess />
      {cartLength === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartListSection cartData={cartDataLocal} />
          <CartFormSection cartData={cartDataLocal} />
        </>
      )}
    </>
  );
};

export default CartPage;
