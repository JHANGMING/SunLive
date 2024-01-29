import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';
import { useProducts } from '@/common/hooks/ProductsRefContext';

const PopularSection = () => {
  const refs = useProducts();

  if (!refs) return null;
  const { popularProductsRef } = refs;

  return (
    <section className="bg-white pt-60 pb-[200px]" ref={popularProductsRef}>
      <div className="container">
        <CategoryTitle title="熱門農產品" gapStyle="mb-24" />
        <ProductList category="popular" />
      </div>
    </section>
  );
};

export default PopularSection;
