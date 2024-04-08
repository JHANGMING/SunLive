import useSWR from 'swr';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '@/components/Logo';
import fetcher from '@/common/helpers/fetcher';
import { nextRoutes } from '@/constants/api/apiPaths';
import { setCartData } from '@/redux/features/cartSlice';
import useAuthStatus from '@/common/hooks/useAuthStatus';
import { LayoutPropsType } from '@/components/Layout/data';
import NavBar from './Navbar';
import { pageSet } from './data';
import CartAndLogin from './CartAndLogin';

const Header = ({ pageCategory }: LayoutPropsType) => {
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();
  const headerBehavior = pageSet[pageCategory];
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes.getcart}` : null,
    fetcher,
  );
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
          <Logo
            classStyle="justify-center py-64 flex-shrink-0"
            classProps="w-50 h-50"
          />
        </header>
      );

    default:
      return null;
  }
};

export default Header;
