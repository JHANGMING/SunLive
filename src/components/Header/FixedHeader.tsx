import { BsSearch } from 'react-icons/bs';
import { useEffect, useState, useCallback } from 'react';
import Logo from '@/components/Logo';
import SearchInput from '@/components/Input/SearchInput';
import { LayoutPropsType } from '@/components/Layout/data';
import LiveIcon from './LIveIcon';
import { fixedPageSet } from './data';
import CartAndLogin from './CartAndLogin';

const FixedHeader = ({ pageCategory }: LayoutPropsType) => {
  const headerBehavior = fixedPageSet[pageCategory];
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isVisible, setIsVisible] = useState(headerBehavior === 'always');

  const handleSearchClick = useCallback(() => {
    setIsSearchActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (headerBehavior === 'scroll') {
      const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 500);
      };
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
    setIsVisible(headerBehavior === 'always');
    return undefined;
  }, [headerBehavior]);

  const isVisibleClass = isVisible ? 'opacity-100' : 'opacity-0';
  const heightClass = headerBehavior === 'always' ? 'h-[98px]' : 'h-60';
  const positionClass = headerBehavior === 'always'
    ? 'lg:flex justify-between items-center '
    : 'fixed top-0 left-1/2 transform -translate-x-1/2';
  const logoImgstyle = headerBehavior === 'always' ? 50 : 32;

  if (headerBehavior === 'never') return null;
  return (
    <div
      className={`${isVisibleClass} ${heightClass} ${positionClass}  bg-white z-50 w-full transition-opacity duration-10000 ease-in-out flex-shrink-0`}
    >
      <div className="container flex justify-between items-center ">
        <div className="w-400 flex gap-24">
          <Logo classProps={`w-${logoImgstyle} h-${logoImgstyle}`} />
          <LiveIcon size={60} />
        </div>
        <div
          className={`w-400 flex justify-center ${pageCategory === 'dashboardPage' && 'hidden'}`}
        >
          {!isSearchActive ? (
            <button
              type="button"
              aria-label="Search"
              className="bg-primary-yellow w-53 h-48 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80"
              onClick={handleSearchClick}
            >
              <BsSearch className="text-20 text-mediumGray" />
            </button>
          ) : (
            <SearchInput headerVisible onClick={handleSearchClick} />
          )}
        </div>
        <div className="flex gap-40 items-center justify-end w-400">
          <CartAndLogin pageCategory={pageCategory} isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
