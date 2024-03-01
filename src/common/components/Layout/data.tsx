import { ReactNode } from 'react';
import { Noto_Sans_TC } from 'next/font/google';
export type PageCategoryType =
  | 'mobile'
  | 'CartPage'
  | 'authPage'
  | 'errorPage'
  | 'searchPage'
  | 'landingPage'
  | 'productPage'
  | 'dashboardPage'
  | 'personInfoPage'
  | 'liveStreamPage'
  | 'liveStreamView'
  | 'productDetailPage'

export type LayoutPropsType = {
  classStyle?: string;
  isVisible?: boolean;
  children?: ReactNode;
  pageCategory: PageCategoryType;
};

export type AuthLayoutProps = {
  children: ReactNode;
  classStyle: string | undefined;
};
export type DashboardLayoutProps = {
  children: ReactNode;
};
type pageSetType = {
  mobile?: string;
  authPage: string;
  CartPage: string;
  errorPage: string;
  searchPage: string;
  productPage: string;
  landingPage: string;
  dashboardPage: string;
  liveStreamPage: string;
  liveStreamView: string;
  personInfoPage: string;
  productDetailPage: string;
};
export const colorWhiteSet: pageSetType = {
  mobile: 'lightWhite',
  authPage: 'bg-white',
  searchPage: 'bg-white',
  errorPage: 'bg-lightWhite',
  liveStreamPage: 'bg-white',
  liveStreamView: 'bg-white',
  productPage: 'bg-lightWhite',
  landingPage: 'bg-lightWhite',
  CartPage: 'bg-dashboardGray',
  productDetailPage: 'bg-white',
  dashboardPage: 'bg-dashboardGray',
  personInfoPage: 'bg-dashboardGray',
};

export const footerSet: pageSetType = {
  mobile: 'p-24',
  CartPage: 'pt-60',
  authPage: 'pt-60',
  errorPage: 'pt-60',
  searchPage: 'pt-60',
  landingPage: 'pt-42',
  productPage: 'pt-60',
  dashboardPage: 'pt-0',
  personInfoPage: 'pt-0',
  liveStreamPage: 'pt-60',
  liveStreamView: 'pt-60',
  productDetailPage: 'pt-60',
};

export const notoTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
