import { ReactNode } from 'react';
import { Noto_Sans_TC } from 'next/font/google';
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
  | 'personInfoPage'
  | 'mobile';

export type LayoutPropsType = {
  children?: ReactNode;
  pageCategory: PageCategoryType;
  classStyle?: string;
};

export type AuthLayoutProps = {
  children: ReactNode;
  classStyle: string | undefined;
};
export type DashboardLayoutProps = {
  children: ReactNode;
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
  mobile?: string;
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
  mobile: 'lightWhite',
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
  mobile:"p-24"
};

export const notoTC = Noto_Sans_TC({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});
