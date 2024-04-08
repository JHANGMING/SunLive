import HomeSwiper from '@/components/HomeSwiper';
import Banner from '@/components/Banner/LandingPageBanner';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/ProductListSection';
import RecommendSection from '@/components/LandingPage/RecommendSection';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import FarmFeatureSection from '@/components/LandingPage/FarmFeature';
import FriendlyFarmSection from '@/components/LandingPage/FriendlyFarm';
import { LivesDataType } from '@/constants/types/live/live';
import { CartDataType } from '@/constants/types/cart/cartlist';
import { AllproductsDataType } from '@/constants/types/product/allproducts';

export type HomePropsType = {
  cartData: CartDataType;
  liveData: LivesDataType;
  topSaleProduct: AllproductsDataType;
};

export { HomeSwiper, Banner, LivingShowSection, ProductListSection, RecommendSection, ComingProductsSection, FarmFeatureSection, FriendlyFarmSection };
