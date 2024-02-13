
import ErrorPage from '@/common/components/ErrorPage';
import Layout from '@/common/components/Layout';
const PageNotFound = () => {
  return (
    <Layout pageCategory="errorPage">
      <ErrorPage page="500" />
    </Layout>
  );
};

export default PageNotFound;
