import ProductList from '@/components/Product/ProductList';
import CategoryTitle from '@/modules/ProductPage/CategoryTitle';

const RelatedSection = () => {
  return (
    <section className="container pt-60 pb-160">
      <CategoryTitle title="相關推薦" gapStyle="mb-24" />
      <ProductList category="related" />
    </section>
  );
};

export default RelatedSection;
