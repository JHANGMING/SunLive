import { useProducts } from '@/components/Product/ProductsRefContext';
import ProductList from '@/components/Product/ProductList';
import CategoryTitle from './CategoryTitle';

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
