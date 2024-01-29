import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';
import { useProducts } from '@/common/hooks/ProductsRefContext';

const AllProductSection = () => {
  const refs = useProducts();
  if (!refs) return null;
  const { allProductsRef } = refs;
  return (
    <section className="container py-60 mb-100" ref={allProductsRef}>
      <CategoryTitle title="所有農產品" gapStyle="mb-24" />
      <ProductList category="all" />
    </section>
  );
};

export default AllProductSection;
