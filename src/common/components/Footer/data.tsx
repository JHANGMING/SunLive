export const icons = [
  {
    src: '/images/icons/facebook.png',
    alt: 'facebook',
    path: 'https://www.facebook.com',
  },
  {
    src: '/images/icons/twitter.png',
    alt: 'twitter',
    path: 'https://twitter.com',
  },
  {
    src: '/images/icons/youtube.png',
    alt: 'youtube',
    path: 'https://www.youtube.com',
  },
  {
    src: '/images/icons/behanch.png',
    alt: 'behanch',
    path: 'https://www.linkedin.com/feed/',
  },
];

type pageSetType = {
  [key: string]: boolean;
};
export const swiperSet: pageSetType = {
  authPage: false,
  CartPage: false,
  productDetailPage: true,
  liveStreamPage: true,
  liveStreamView: true,
  productPage: true,
  landingPage: true,
  searchPage: true,
};
