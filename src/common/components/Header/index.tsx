import NavBar from './Navbar';
import { pageSet } from './data';
import { LayoutPropsType } from '@/common/Layout/data';
import Logo from '@/common/components/Logo';
import CartAndLogin from './CartAndLogin';

const Header = ({ pageCategory }: LayoutPropsType) => {
  const headerBehavior = pageSet[pageCategory];

  switch (headerBehavior) {
    case 'header':
      return (
        <header className="bg-white flex absolute left-1/2 top-60 z-20 max-w-full -translate-x-1/2 transform items-center rounded-25 gap-60 px-32 py-16">
          <NavBar />
          <div className="relative flex items-center gap-38">
            <CartAndLogin pageCategory={pageCategory} />
          </div>
        </header>
      );
    case 'logo':
      return (
        <header>
          <Logo classStyle="justify-center py-64 flex-shrink-0" />
        </header>
      );

    default:
      return null;
  }
};

export default Header;
