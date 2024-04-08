import { PageCategoryType } from '@/components/Layout/data';
import { CartDataType } from '@/constants/types/cart/cartlist';

export const navBarDatas = [
  {
    src: '/',
    title: '關於我們',
    subTitle: 'About',
  },
  {
    src: '/livestream',
    title: '直播特惠',
    subTitle: 'Live',
  },
  {
    src: '/productshop',
    title: '商品總覽',
    subTitle: 'Products',
  },
];
export const logoData = {
  title: '搶鮮購',
};

export const pageSet: PageSet = {
  authPage: 'logo',
  CartPage: 'never',
  errorPage: 'never',
  searchPage: 'header',
  landingPage: 'header',
  productPage: 'header',
  liveStreamPage: 'header',
  liveStreamView: 'header',
  productDetailPage: 'header',
};

export const fixedPageSet: PageSet = {
  authPage: 'never',
  CartPage: 'always',
  errorPage: 'always',
  searchPage: 'scroll',
  landingPage: 'scroll',
  productPage: 'scroll',
  dashboardPage: 'always',
  liveStreamView: 'never',
  personInfoPage: 'always',
  liveStreamPage: 'scroll',
  productDetailPage: 'never',
};

export type PageSet = {
  [key in PageCategoryType]?: string | boolean;
};

export type LoggingInfoProps = {
  isVisible?: boolean;
  dropdownClass: string;
  cartData?: CartDataType;
};

export type CartItemCountProps = {
  cartData: CartDataType;
};

export type LiveIconProps = {
  size: number;
  isLivingSection?: boolean;
};
