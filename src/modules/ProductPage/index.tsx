
import ProductBanner from '@/components/Banner/ProductBanner';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import CategorySection from './CategorySection';
import AllProductSection from './AllProductSection';
import DiscountedSection from './DiscountedSection';

const ProductPage = () => {
  return (
    <>
      <ProductBanner />
      <CategorySection />
      <DiscountedSection />
      <PopularSection />
      <SeasonalSection />
      <AllProductSection />
    </>
  );
};

export default ProductPage;
