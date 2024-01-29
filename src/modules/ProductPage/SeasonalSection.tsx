import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';
import { useProducts } from '@/common/hooks/ProductsRefContext';

const SeasonalSection = () => {
  const refs = useProducts();
  if (!refs) return null;
  const { seasonalProductsRef } = refs;
  return (
    <section
      className=" bg-seasonalBG pt-80 bg-repeat-x  -mt-80"
      ref={seasonalProductsRef}>
      <div className="bg-primary-yellow">
        <div className="container pb-60">
          <CategoryTitle
            title="當季水果"
            gapStyle="mb-24"
            backgroundStyle={false}
          />
          <ProductList category="seasonalfruit" />
          <CategoryTitle
            title="當季蔬菜"
            gapStyle="mb-24 mt-60"
            backgroundStyle={false}
          />
          <ProductList category="seasonalfruit" />
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;
