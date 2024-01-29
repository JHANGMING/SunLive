

import { LayoutPropsType, colorWhiteSet, footerSet } from './data';
import CustomHead from '../CustomHead';
import AuthLayout from './AuthLayout';
import Header from '@/common/components/Header';
import Footer from '../Footer';
import FixedHeader from '../Header/FixedHeader';
// import ScrollPageTop from '../components/ScrollPageTop';
// import ContactService from '@/modules/ContactService';

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <div
      className={`${colorWhiteSet[pageCategory]} flex flex-col min-h-screen`}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
      <main className="flex-grow">
        {pageCategory === 'authPage' ? (
          <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
        ) : (
          children
        )}
        {/* {pageCategory === 'authPage' || <ContactService />} */}
        {/* <ScrollPageTop /> */}
      </main>
      <Footer
        gapClassSyle={footerSet[pageCategory]}
        pageCategory={pageCategory}
      />
    </div>
  );
};

export default Layout;
