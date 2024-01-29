
import ProductPage from '@/modules/ProductPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
import Layout from '@/common/components/Layout';
const ProductShop = () => {
  return (
    <Layout pageCategory="productPage">
      <ProductsRefProvider>
        <ProductPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductShop;
