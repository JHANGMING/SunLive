import Layout from '@/components/Layout';
import ErrorPage from '@/components/ErrorPage';

const PageNotFound = () => {
  return (
    <Layout pageCategory="errorPage">
      <ErrorPage page="500" />
    </Layout>
  );
};

export default PageNotFound;
