import Banner from '@/common/components/ProductPage/Banner';
import CategorySection from './CategorySection';
import DiscountedSection from './DiscountedSection';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import AllProductSection from './AllProductSection';

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
