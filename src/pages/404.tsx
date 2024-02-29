import Layout from '@/common/components/Layout';
import ErrorPage from '@/common/components/ErrorPage';
const PageNotFound = () => {
  return (
    <Layout pageCategory="errorPage">
      <ErrorPage page="404"/>
    </Layout>
  );
};

export default PageNotFound;
