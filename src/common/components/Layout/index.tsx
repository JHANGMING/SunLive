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
import { LayoutPropsType, colorWhiteSet, footerSet, notoTC } from './data';

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <div
      className={`${colorWhiteSet[pageCategory]} ${notoTC.className} flex flex-col min-h-screen`}
    >
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
      <Loading />
      <Toast />
      {/* <SmallHeader/> */}
      <main className="flex-grow">
        {(() => {
          switch (pageCategory) {
            case 'authPage':
              return (
                <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
              );
            case 'dashboardPage':
              return <DashboardLayout>{children}</DashboardLayout>;
            default:
              return children;
          }
        })()}

        <ScrollPageTop />
      </main>
      {pageCategory === 'authPage' || <ContactService />}
      <Footer
        gapClassSyle={footerSet[pageCategory]}
        pageCategory={pageCategory}
      />
    </div>
  );
};

export default Layout;
