
import CategorySection from './CategorySection';
import DiscountedSection from './DiscountedSection';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import AllProductSection from './AllProductSection';
import Banner from '@/common/components/ProductPage/Banner';

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
