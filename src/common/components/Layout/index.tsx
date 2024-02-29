

import Header from '@/common/components/Header';
import ContactService from '@/modules/ContactService';
import Toast from '../Toast';
import Footer from '../Footer';
import AuthLayout from './AuthLayout';
import CustomHead from '../CustomHead';
import Loading from '../Loading/Loading';
import ScrollPageTop from '../ScrollPageTop';
import DashboardLayout from './DashboardLayout';
import FixedHeader from '../Header/FixedHeader';
import SmallHeader from '../Header/SmallHeader';
import { LayoutPropsType, colorWhiteSet, footerSet, notoTC } from './data';


const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <div
      className={`${colorWhiteSet[pageCategory]} ${notoTC.className} flex flex-col min-h-screen`}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
      <Loading />
      <Toast />
      {/* <SmallHeader/> */}
      <main className="flex-grow">
        {pageCategory === 'authPage' ? (
          <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
        ) : pageCategory === 'dashboardPage' ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          children
        )}
        {pageCategory === 'authPage' || <ContactService />}
        <ScrollPageTop />
      </main>
      <Footer
        gapClassSyle={footerSet[pageCategory]}
        pageCategory={pageCategory}
      />
    </div>
  );
};

export default Layout;
