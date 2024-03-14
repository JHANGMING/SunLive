import Banner from '@/common/components/ProductPage/Banner';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import CategorySection from './CategorySection';
import AllProductSection from './AllProductSection';
import DiscountedSection from './DiscountedSection';

const ProductPage = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <DiscountedSection />
      <PopularSection />
      <SeasonalSection />
      <AllProductSection />
    </>
  );
};

export default ProductPage;
