

import { LayoutPropsType, colorWhiteSet, footerSet, notoTC } from './data';
import CustomHead from '../CustomHead';
import AuthLayout from './AuthLayout';
import Header from '@/common/components/Header';
import Footer from '../Footer';
import FixedHeader from '../Header/FixedHeader';
import ScrollPageTop from '../ScrollPageTop';
import ContactService from '@/modules/ContactService';
import DashboardLayout from './DashboardLayout';


const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <div
      className={`${colorWhiteSet[pageCategory]} ${notoTC.className} flex flex-col min-h-screen`}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
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
