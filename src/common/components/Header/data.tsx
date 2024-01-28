import { PageCategoryType } from '@/common/Layout/data';

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
  landingPage: 'header',
  liveStreamPage: 'header',
  liveStreamView: 'header',
  productPage: 'header',
  productDetailPage: 'header',
  authPage: 'logo',
  CartPage: 'never',
  searchPage: 'header',
};

export const fixedPageSet: PageSet = {
  landingPage: 'scroll',
  liveStreamPage: 'scroll',
  liveStreamView: 'never',
  productPage: 'scroll',
  productDetailPage: 'never',
  authPage: 'never',
  CartPage: 'always',
  searchPage: 'scroll',
  dashboardPage: 'always',
  personInfoPage: 'always',
};

export type PageSet = {
  [key in PageCategoryType]?: string | boolean;
};
