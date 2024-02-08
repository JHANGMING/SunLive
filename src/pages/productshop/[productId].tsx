import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import ProductDetailPage from '@/modules/ProductDetailPage';

const ProductDetail = () => {
  return (
    <Layout pageCategory="productDetailPage">
      <ProductDetailPage />
    </Layout>
  );
};

export default ProductDetail;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  console.log(params);

  const userId = params.uid;
  return {
    props: {
      id: `userId-${userId}`,
    },
  };
};
