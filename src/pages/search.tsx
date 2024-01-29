
import SearchPage from '@/modules/ProductPage/SearchPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
import Layout from '@/common/components/Layout';
const ProductSearch = () => {
  return (
    <Layout pageCategory="searchPage">
      <ProductsRefProvider>
        <SearchPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductSearch;
