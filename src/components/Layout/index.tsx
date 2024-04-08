import Header from '@/components/Header';
import ContactService from '@/modules/ContactService';
import Toast from '@/components/Toast';
import Footer from '@/components/Footer';
import CustomHead from '@/components/CustomHead';
import Loading from '@/components/Loading/Loading';
import ScrollPageTop from '@/components/ScrollPageTop';
import FixedHeader from '@/components/Header/FixedHeader';
import DashboardLayout from './DashboardLayout';
import AuthLayout from './AuthLayout';
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
