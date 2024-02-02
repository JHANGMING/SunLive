import HomeSwiper from '@/common/components/HomeSwiper';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import Banner from '@/common/components/LandingPage/banner';
import FarmFeatureSection from '@/common/components/LandingPage/farmFeatureSection';
import FriendlyFarmSection from '@/common/components/LandingPage/friendlyFarmSection';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/productListSection';
import RecommendSection from '@/common/components/LandingPage/RecommendSection';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
const LandingPage = () => {
  const auth=useSelector((state:RootState)=>state.auth)

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
