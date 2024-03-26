import HomeSwiper from '@/components/HomeSwiper';
import Banner from '@/components/Banner/LandingPageBanner';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/ProductListSection';
import RecommendSection from '@/components/LandingPage/RecommendSection';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import FarmFeatureSection from '@/components/LandingPage/FarmFeature';
import FriendlyFarmSection from '@/components/LandingPage/FriendlyFarm';

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
