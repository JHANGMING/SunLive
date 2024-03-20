import HomeSwiper from '@/components/HomeSwiper';
import Banner from '@/components/LandingPage/banner';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/productListSection';
import RecommendSection from '@/components/LandingPage/RecommendSection';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import FarmFeatureSection from '@/components/LandingPage/farmFeatureSection';
import FriendlyFarmSection from '@/components/LandingPage/friendlyFarmSection';

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
