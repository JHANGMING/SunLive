import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import CartItemCount from './CartItemCount';
import { useState } from 'react';
import Image from 'next/image';
import { LayoutPropsType } from '../Layout/data';
import LoggingInfo from './LoggingInfo';
import CartInfo from './CartInfo';
import { useToken } from '@/common/hooks/useToken';

const CartAndLogin = ({ pageCategory }: LayoutPropsType) => {
  const authToken = useToken();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  let leaveProfileTimer: ReturnType<typeof setTimeout>;
  let leaveCartTimer: ReturnType<typeof setTimeout>;
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
  const dropdownClass =
    showCartDropdown || showProfileDropdown
      ? 'dropdown-enter'
      : 'dropdown-exit';

  return (
    <>
      {pageCategory !== 'dashboardPage' ? (
        <div
          className="relative"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}>
          <button
            type="button"
            className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
            <LuShoppingCart size={32} />
          </button>
          {authToken && <CartItemCount />}
          {showCartDropdown && <CartInfo dropdownClass={dropdownClass} />}
        </div>
      ) : (
        <div className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
          <Image
            src="/images/dashBoard/notification.png"
            alt="notification"
            width={32}
            height={32}
          />
          <p className="absolute right-10 top-10 w-15 rounded-full bg-mediumGray flex justify-center text-xs text-white">
            0
          </p>
        </div>
      )}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={handleProfileMouseEnter}
        onMouseLeave={handleProfileMouseLeave}>
        <button className="shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3 rounded-full">
          <BsPersonCircle size={40} className="text-primary-yellow" />
        </button>
        {showProfileDropdown && <LoggingInfo dropdownClass={dropdownClass} />}
      </div>
    </>
  );
};

export default CartAndLogin;
