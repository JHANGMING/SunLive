import { useEffect, useState, useCallback } from 'react';
import { fixedPageSet } from './data';
import Logo from '../Logo';
import CartAndLogin from './CartAndLogin';
import { BsSearch } from 'react-icons/bs';
import SearchInput from '../Input/SearchInput';
import { LayoutPropsType } from '@/common/Layout/data';

const FixedHeader = ({ pageCategory }: LayoutPropsType) => {
  const headerBehavior = fixedPageSet[pageCategory];
  const [isVisible, setIsVisible] = useState(headerBehavior === 'always');
  const [isSearchActive, setIsSearchActive] = useState(false);

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
    } else {
      setIsVisible(headerBehavior === 'always');
    }
  }, [headerBehavior]);

  const isVisibleClass = isVisible ? 'opacity-100' : 'opacity-0';
  const heightClass = headerBehavior === 'always' ? 'h-[98px]' : 'h-60';
  const positionClass =
    headerBehavior === 'always'
      ? 'flex justify-between items-center '
      : 'fixed top-0 left-1/2 transform -translate-x-1/2';
  const logoImgstyle = headerBehavior === 'always' ? 50 : 32;

  if (headerBehavior === 'never') return null;

  return (
    <div
      className={`${isVisibleClass} ${heightClass} ${positionClass}  bg-white z-30 w-full transition-opacity duration-10000 ease-in-out flex-shrink-0`}>
      <div className="container flex justify-between items-center ">
        <div className="w-400 flex ">
          <Logo widthProps={logoImgstyle} heightProps={logoImgstyle} />
        </div>
        <div
          className={`w-400 flex justify-center ${pageCategory === 'dashboardPage' && 'hidden'}`}>
          {!isSearchActive ? (
            <div
              className="bg-primary-yellow w-53 h-48 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80"
              onClick={handleSearchClick}>
              <BsSearch className="text-20 text-mediumGray" />
            </div>
          ) : (
            <SearchInput headerVisible={true} onClick={handleSearchClick} />
          )}
        </div>
        <div className="flex gap-40 items-center justify-end w-400">
          <CartAndLogin pageCategory={pageCategory} />
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
