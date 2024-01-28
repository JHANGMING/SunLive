type FeatureIconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type featureImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type FeatureDataType = {
  title: string;
  subTitle: string;
  descFirst: string;
  descSecond: string;
  featureIconLeft: string;
  featureIconRight: string;
  image: featureImageType;
};
export const featureData: FeatureDataType[] = [
  {
    title: '新鮮速遞',
    subTitle: '一鍵下單，新鮮速遞',
    descFirst: '將新鮮農產品直送到您的門前',
    descSecond: '品嚐到最新鮮最美味的農產品',
    featureIconLeft: 'featureIconLeft',
    featureIconRight: 'featureIconRight',
    image: {
      src: '/images/home/friendlyFarm/featureImg1.svg',
      alt: 'featureImg1',
      width: 414.5,
      height: 276,
    },
  },
  {
    title: '直播限時優惠驚喜',
    subTitle: '獨家直播特惠價',
    descFirst: '只有在我們平台才能體驗的專屬活動',
    descSecond: '享受前所未有的互動式購物樂趣',
    featureIconLeft: 'featureIconLeft',
    featureIconRight: 'featureIconRight',
    image: {
      src: '/images/home/friendlyFarm/featureImg2.svg',
      alt: 'featureImg2',
      width: 368,
      height: 276,
    },
  },
  {
    title: '與小農即時聊天',
    subTitle: '透過即時聊天室與小農互動',
    descFirst: '從農產品源頭加深認識',
    descSecond: '為您的選擇增添更多價值',
    featureIconLeft: 'featureIconLeft',
    featureIconRight: 'featureIconRight',
    image: {
      src: '/images/home/friendlyFarm/featureImg3.svg',
      alt: 'featureImg3',
      width: 276,
      height: 276,
    },
  },
];
export const featureIcon: Record<string, FeatureIconProps> = {
  featureIconLeft: {
    src: '/images/home/friendlyFarm/featureIconLeft.png',
    alt: 'featureIconLeft',
    width: 30,
    height: 60,
  },
  featureIconRight: {
    src: '/images/home/friendlyFarm/featureIconRight.png',
    alt: 'featureIconRight',
    width: 30,
    height: 60,
  },
};
