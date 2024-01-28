import { ReactNode } from 'react';

export type PageCategoryType =
  | 'liveStreamPage'
  | 'liveStreamView'
  | 'productPage'
  | 'productDetailPage'
  | 'searchPage'
  | 'landingPage'
  | 'CartPage'
  | 'authPage'
  | 'dashboardPage'
  | 'personInfoPage';

export type LayoutPropsType = {
  children?: ReactNode;
  pageCategory: PageCategoryType;
  classStyle?: string;
};

export type AuthLayoutProps = {
  children: ReactNode;
  classStyle: string | undefined;
};

type pageSetType = {
  authPage: string;
  productDetailPage: string;
  liveStreamPage: string;
  productPage: string;
  landingPage: string;
  liveStreamView: string;
  CartPage: string;
  searchPage: string;
  dashboardPage: string;
  personInfoPage: string;
};
export const colorWhiteSet: pageSetType = {
  authPage: 'bg-white',
  productDetailPage: 'bg-white',
  liveStreamPage: 'bg-white',
  liveStreamView: 'bg-white',
  searchPage: 'bg-white',
  productPage: 'bg-lightWhite',
  landingPage: 'bg-lightWhite',
  CartPage: 'bg-dashboardGray',
  dashboardPage: 'bg-dashboardGray',
  personInfoPage: 'bg-dashboardGray',
};

export const footerSet: pageSetType = {
  authPage: 'pt-60',
  productDetailPage: 'pt-60',
  liveStreamPage: 'pt-60',
  liveStreamView: 'pt-60',
  productPage: 'pt-60',
  landingPage: 'pt-42',
  CartPage: 'pt-60',
  searchPage: 'pt-60',
  dashboardPage: 'pt-0',
  personInfoPage: 'pt-0',
};
