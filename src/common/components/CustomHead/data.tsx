import { PageCategoryType } from '@/common/Layout/data';

type dataType = {
  title: string;
  desc: string;
  url: string;
  image: string;
};

export const defaultMeta: Record<string, string> = {
  defaultTitle: 'SunLive | 搶鮮購',
  defaultDescription: '',
  defaultImage: '',
};

export const dataSet: Record<string, dataType> = {
  landingPage: {
    title: '',
    desc: '',
    url: '', //canonial
    image: '',
  },
  authPage: {
    title: '會員中心',
    desc: '加入搶鮮購，讓你購安心',
    url: '',
    image: '',
  },
  registerPage: {
    title: '會員註冊',
    desc: '加入搶鮮購，讓你購安心',
    url: '',
    image: '',
  },
  liveStreamPage: {
    title: '直播特惠',
    desc: '我们提供最新鲜的農產品直播銷售服務，确保質量和時效。',
    url: '',
    image: '',
  },
  liveStreamView: {
    title: '現正直播',
    desc: '我们提供最新鲜的農產品直播銷售服務，确保質量和時效。',
    url: '',
    image: '',
  },
  productPage: {
    title: '商品總覽',
    desc: '「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」',
    url: '',
    image: '',
  },
  productDetailPage: {
    title: '商品介紹',
    desc: '「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」',
    url: '',
    image: '',
  },
  CartPage: {
    title: '血拼中心',
    desc: '加入搶鮮購，讓你購安心',
    url: '',
    image: '',
  },
  dashboardPage: {
    title: '後台中心',
    desc: '一個專為小型農業生產者設計的綜合管理系統，簡化農產品的銷售和分銷流程',
    url: '',
    image: '',
  },
  searchPage: {
    title: '搜尋結果',
    desc: '我们提供最新鲜的農產品直播銷售服務，确保質量和時效。',
    url: '',
    image: '',
  },
  personInfoPage: {
    title: '個人資訊',
    desc: '我们提供最新鲜的農產品直播銷售服務，确保質量和時效。',
    url: '',
    image: '',
  },
  error: {
    title: '',
    desc: '',
    url: '',
    image: '',
  },
};

export type CustomHeadProps = {
  pageCategory: PageCategoryType;
};
