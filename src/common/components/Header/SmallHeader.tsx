import { useState, useCallback } from 'react';
import Logo from '../Logo';
import CartAndLogin from './CartAndLogin';
import { BsSearch } from 'react-icons/bs';
import SearchInput from '../Input/SearchInput';

const SmallHeader = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleSearchClick = useCallback(() => {
    setIsSearchActive((prevState) => !prevState);
  }, []);

  return (
    <div
      className={` fixed top-0 left-1/2 transform -translate-x-1/2 bg-white z-30 w-full transition-opacity duration-10000 ease-in-out flex-shrink-0 py-12 lg:hidden`}>
      <div className="container flex justify-between items-center ">
        <div className={`flex lg:justify-center w-[78px]`}>
          {!isSearchActive ? (
            <div
              className="bg-primary-yellow w-32 h-32 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80"
              onClick={handleSearchClick}>
              <BsSearch className="text-16 text-mediumGray" />
            </div>
          ) : (
            <SearchInput headerVisible={true} onClick={handleSearchClick} />
          )}
        </div>
        <div className="">
          <Logo textSytle="text-16" classStyle="gap-8" classProps="w-24 h-24" />
        </div>
        <div className="flex gap-16 items-center justify-end">
          <CartAndLogin pageCategory="mobile" />
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
