import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import { RootState } from '@/redux/store';
import Image from '@/components/CustomImage';
import useAuthStatus from '@/common/hooks/useAuthStatus';
import CartInfo from './CartInfo';
import LoggingInfo from './LoggingInfo';
import CartItemCount from './CartItemCount';
import { LayoutPropsType } from '../Layout/data';

const CartAndLogin = ({ pageCategory, isVisible }: LayoutPropsType) => {
  const { authStatus } = useAuthStatus();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  let leaveCartTimer: ReturnType<typeof setTimeout>;
  let leaveProfileTimer: ReturnType<typeof setTimeout>;

  const handleProfileMouseEnter = () => {
    clearTimeout(leaveProfileTimer);
    setShowProfileDropdown(true);
  };

  const handleProfileMouseLeave = () => {
    leaveProfileTimer = setTimeout(() => {
      setShowProfileDropdown(false);
    }, 500);
  };

  const handleCartMouseEnter = () => {
    clearTimeout(leaveCartTimer);
    setShowCartDropdown(true);
  };

  const handleCartMouseLeave = () => {
    leaveCartTimer = setTimeout(() => {
      setShowCartDropdown(false);
    }, 500);
  };
  const dropdownClass = showCartDropdown || showProfileDropdown
    ? 'dropdown-enter'
    : 'dropdown-exit';
  return (
    <>
      {pageCategory !== 'dashboardPage' ? (
        <div
          className="relative"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
        >
          <button type="button" className="cartIcon" aria-label="cartIcon">
            <LuShoppingCart className="text-20 lg:text-32" />
            {authStatus && <CartItemCount cartData={cartData} />}
          </button>
          {showCartDropdown && (
            <CartInfo
              dropdownClass={dropdownClass}
              cartData={cartData}
              isVisible={isVisible}
            />
          )}
        </div>
      ) : (
        <div className="cartCount">
          <Image
            src="/images/dashBoard/notification.png"
            alt="notification"
            className="w-32 h-32"
          />
          <p className="absolute right-10 top-10 w-15 rounded-full bg-mediumGray flex justify-center text-xs text-white">
            0
          </p>
        </div>
      )}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={handleProfileMouseEnter}
        onMouseLeave={handleProfileMouseLeave}
      >
        <button type="button" className="authIcon" aria-label="authIcon">
          <BsPersonCircle className="text-primary-yellow text-[30px] lg:text-40" />
        </button>
        {showProfileDropdown && <LoggingInfo dropdownClass={dropdownClass} />}
      </div>
    </>
  );
};

export default CartAndLogin;
