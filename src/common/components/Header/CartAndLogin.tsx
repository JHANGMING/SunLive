import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import CartItemCount from '../../../modules/Header/CartItemCount';
import { useState } from 'react';
import Image from 'next/image';
import { LayoutPropsType } from '../Layout/data';
import LoggingInfo from './LoggingInfo';
const CartAndLogin = ({ pageCategory }: LayoutPropsType) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropdownClass = showDropdown ? 'dropdown-enter' : 'dropdown-exit';

  return (
    <>
      {pageCategory !== 'dashboardPage' ? (
        <Link
          href="/cart"
          className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
          <LuShoppingCart size={32} />
          <CartItemCount />
        </Link>
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
      <div className="relative flex items-center justify-center">
        <button
          onClick={toggleDropdown}
          className="shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3 rounded-full">
          <BsPersonCircle size={40} className="text-primary-yellow" />
        </button>
        {showDropdown && (
          <LoggingInfo
            toggleDropdown={toggleDropdown}
            dropdownClass={dropdownClass}
          />
        )}
      </div>
    </>
  );
};

export default CartAndLogin;
