import { PageCategoryType } from '@/common/components/Layout/data';

type DataType = {
  url: string;
  desc: string;
  title: string;
  image: string;
};

export const defaultMeta: Record<string, string> = {
  defaultTitle: 'SunLive | 搶鮮購',
  defaultDescription:
    '搶鮮購是探索有機農產品的理想平台，致力於協助小農推廣並販售有機農作物，透過即時直播和搶購功能，讓用戶更深入了解每個美味的背後故事。',
  defaultImage: '/images/sunLive.png',
};

export const dataSet: Record<string, DataType> = {
  landingPage: {
    title: '',
    desc: '',
    url: '',
    image: '',
  },
  authPage: {
    title: '會員中心',
    desc: '成為搶鮮購的一員，可以深入了解有機農作物的背後故事，享受健康、新鮮的購物體驗。',
    url: '',
    image: '',
  },
  registerPage: {
    title: '會員註冊',
    desc: '立即加入搶鮮購，探索有機農產品，體驗直播和搶購功能帶來的樂趣。',
    url: '',
    image: '',
  },
  liveStreamPage: {
    title: '直播特惠',
    desc: '透過直播列表，了解未來特惠農產品。',
    url: '',
    image: '',
  },
  liveStreamView: {
    title: '現正直播',
    desc: '加入現場直播，探索各種新鮮有機農產品，享受優惠搶購。',
    url: '',
    image: '',
  },
  productPage: {
    title: '商品總覽',
    desc: '「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機農產品，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」',
    url: '',
    image: '',
  },
  productDetailPage: {
    title: '商品介紹',
    desc: '深入了解您選擇的有機農產品。',
    url: '',
    image: '',
  },
  CartPage: {
    title: '血拼中心',
    desc: '查看你的購物車，細選心儀的有機農產品，準備享受健康美味的生活。',
    url: '',
    image: '',
  },
  dashboardPage: {
    title: '後台中心',
    desc: '一個專為小農設計的綜合管理系統，簡化農產品的銷售和分銷流程。',
    url: '',
    image: '',
  },
  searchPage: {
    title: '搜尋結果',
    desc: '帶你快速找出所需的有機農產品。',
    url: '',
    image: '',
  },
  personInfoPage: {
    title: '個人資訊',
    desc: '管理你的個人訊息，讓每次購買都更加順暢。',
    url: '',
    image: '',
  },
  errorPage: {
    title: 'Error',
    desc: '遇到一些小問題，請稍後再試。',
    url: '',
    image: '',
  },
};

export type CustomHeadProps = {
  pageCategory: PageCategoryType;
};
