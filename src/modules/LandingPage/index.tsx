import HomeSwiper from '@/common/components/HomeSwiper';
import Banner from '@/common/components/LandingPage/banner';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/productListSection';
import RecommendSection from '@/common/components/LandingPage/RecommendSection';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import FarmFeatureSection from '@/common/components/LandingPage/farmFeatureSection';
import FriendlyFarmSection from '@/common/components/LandingPage/friendlyFarmSection';

const LandingPage = () => {
  return (
    <>
      <Banner />
      <FriendlyFarmSection />
      <HomeSwiper imgData="farmDatas" />
      <FarmFeatureSection />
      <LivingShowSection />
      <ComingProductsSection />
      <RecommendSection />
      <ProductListSection />
    </>
  );
};

export default LandingPage;
