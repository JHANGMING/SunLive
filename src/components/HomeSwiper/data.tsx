type ImageData = {
  src: string;
  alt: string;
};
export type SwiperData = {
  spaceBetween: number;
  imgDatas: ImageData[];
};
export type HomeSwiperPropsType = {
  classStyle?: string;
  imgData: keyof typeof swiperData;
};

export const swiperData: { [key: string]: SwiperData } = {
  farmDatas: {
    spaceBetween: 8,
    imgDatas: [
      {
        src: '/images/home/friendlyFarm/farmImg0.png',
        alt: 'farmImg0.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg1.png',
        alt: 'farmImg1.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg2.png',
        alt: 'farmImg2.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg3.png',
        alt: 'farmImg3.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg4.png',
        alt: 'farmImg4.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg5.png',
        alt: 'farmImg5.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg0.png',
        alt: 'farmImg6.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg1.png',
        alt: 'farmImg7.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg2.png',
        alt: 'farmImg22.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg3.png',
        alt: 'farmImg8.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg4.png',
        alt: 'farmImg9.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg5.png',
        alt: 'farmImg10.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg0.png',
        alt: 'farmImg40.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg1.png',
        alt: 'farmImg41.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg2.png',
        alt: 'farmImg42.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg3.png',
        alt: 'farmImg43.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg4.png',
        alt: 'farmImg44.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg5.png',
        alt: 'farmImg45.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg0.png',
        alt: 'farmImg46.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg1.png',
        alt: 'farmImg47.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg2.png',
        alt: 'farmImg52.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg3.png',
        alt: 'farmImg48.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg4.png',
        alt: 'farmImg49.png',
      },
      {
        src: '/images/home/friendlyFarm/farmImg5.png',
        alt: 'farmImg50.png',
      },
    ],
  },
  farmerDatas: {
    spaceBetween: 0,
    imgDatas: [
      {
        src: '/images/home/farmer/farmer1.png',
        alt: 'farmer11.png',
      },
      {
        src: '/images/home/farmer/farmer2.png',
        alt: 'farmer12.png',
      },
      {
        src: '/images/home/farmer/farmer3.png',
        alt: 'farmer13.png',
      },
      {
        src: '/images/home/farmer/farmer4.png',
        alt: 'farmer14.png',
      },
      {
        src: '/images/home/farmer/farmer5.png',
        alt: 'farmer15.png',
      },
      {
        src: '/images/home/farmer/farmer6.png',
        alt: 'farmer16.png',
      },
      {
        src: '/images/home/farmer/farmer7.png',
        alt: 'farmer17.png',
      },
      {
        src: '/images/home/farmer/farmer1.png',
        alt: 'farmer31.png',
      },
      {
        src: '/images/home/farmer/farmer2.png',
        alt: 'farmer32.png',
      },
      {
        src: '/images/home/farmer/farmer3.png',
        alt: 'farmer33.png',
      },
      {
        src: '/images/home/farmer/farmer4.png',
        alt: 'farmer34.png',
      },
      {
        src: '/images/home/farmer/farmer5.png',
        alt: 'farmer35.png',
      },
      {
        src: '/images/home/farmer/farmer6.png',
        alt: 'farmer36.png',
      },
      {
        src: '/images/home/farmer/farmer7.png',
        alt: 'farmer37.png',
      },
      {
        src: '/images/home/farmer/farmer1.png',
        alt: 'farmer61.png',
      },
      {
        src: '/images/home/farmer/farmer2.png',
        alt: 'farmer62.png',
      },
      {
        src: '/images/home/farmer/farmer3.png',
        alt: 'farmer63.png',
      },
      {
        src: '/images/home/farmer/farmer4.png',
        alt: 'farmer64.png',
      },
      {
        src: '/images/home/farmer/farmer5.png',
        alt: 'farmer65.png',
      },
      {
        src: '/images/home/farmer/farmer6.png',
        alt: 'farmer66.png',
      },
      {
        src: '/images/home/farmer/farmer7.png',
        alt: 'farmer67.png',
      },
      {
        src: '/images/home/farmer/farmer1.png',
        alt: 'farmer71.png',
      },
      {
        src: '/images/home/farmer/farmer2.png',
        alt: 'farmer72.png',
      },
      {
        src: '/images/home/farmer/farmer3.png',
        alt: 'farmer73.png',
      },
      {
        src: '/images/home/farmer/farmer4.png',
        alt: 'farmer74.png',
      },
      {
        src: '/images/home/farmer/farmer5.png',
        alt: 'farmer75.png',
      },
      {
        src: '/images/home/farmer/farmer6.png',
        alt: 'farmer76.png',
      },
      {
        src: '/images/home/farmer/farmer7.png',
        alt: 'farmer77.png',
      },
    ],
  },
};
