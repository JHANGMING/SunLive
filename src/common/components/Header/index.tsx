import NavBar from './Navbar';
import { pageSet } from './data';
import Logo from '@/common/components/Logo';
import CartAndLogin from './CartAndLogin';
import { LayoutPropsType } from '../Layout/data';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import useSWR from 'swr';
import { fetcher } from '@/common/helpers/fetcher';
import { nextRoutes } from '@/constants/apiPaths';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartData } from '@/redux/features/cartSlice';

const Header = ({ pageCategory }: LayoutPropsType) => {
  const headerBehavior = pageSet[pageCategory];
  const { authStatus } = useAuthStatus();
  const dispatch = useDispatch();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['getcart']}` : null,
    fetcher
  );
  console.log('data', data);
  
  useEffect(() => {
    dispatch(setCartData({ cartData: data }));
  }, [data]);
  switch (headerBehavior) {
    case 'header':
      return (
        <header className="hidden bg-white lg:flex absolute left-1/2 top-60 z-20 max-w-full -translate-x-1/2 transform items-center rounded-25 gap-60 px-32 py-16">
          <NavBar />
          <div className="relative flex items-center gap-38">
            <CartAndLogin pageCategory={pageCategory} />
          </div>
        </header>
      );
    case 'logo':
      return (
        <header>
          <Logo classStyle="justify-center py-64 flex-shrink-0" classProps='w-50 h-50'/>
        </header>
      );

    default:
      return null;
  }
};

export default Header;
