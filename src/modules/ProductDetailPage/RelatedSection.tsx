import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from '../ProductPage/CategoryTitle';

const RelatedSection = () => {
  return (
    <section className="container pt-60 pb-160">
      <CategoryTitle title="相關推薦" gapStyle="mb-24" />
      <ProductList category="related" />
    </section>
  );
};

export default RelatedSection;
