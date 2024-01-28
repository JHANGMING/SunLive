export const productData: ProductDataProps[] = [
  {
    price: 299,
    title: '多汁天然有機鳳梨',
    personName: '黃小翰',
    date: '2024.02.12 (二) 14:00',
    classStyle: 'ml-16',
    productImage: {
      src: '/images/home/live/liveComingImg1.png',
      alt: 'liveComingImg1',
    },
    personImage: {
      src: '/images/home/live/liveComingPerson1.png',
      alt: 'liveComingPerson1',
    },
  },
  {
    price: 320,
    title: '甜蜜時光有機草莓',
    personName: '李小梅',
    date: '2024.02.05  (二) 14:00',
    classStyle: 'ml-102',
    productImage: {
      src: '/images/home/live/liveComingImg2.png',
      alt: 'liveComingImg2',
    },
    personImage: {
      src: '/images/home/live/liveComingPerson2.png',
      alt: 'liveComingPerson2',
    },
  },
  {
    price: 400,
    title: '清香時光有機香瓜',
    personName: '陳政忠',
    date: '2024.02.12 (二) 14:00',
    classStyle: 'ml-43',
    productImage: {
      src: '/images/home/live/liveComingImg3.png',
      alt: 'liveComingImg3',
    },
    personImage: {
      src: '/images/home/live/liveComingPerson3.png',
      alt: 'liveComingPerson3',
    },
  },
];
type ProductImageType = {
  src: string;
  alt: string;
};

export type ProductDataProps = {
  price: number;
  title: string;
  personName: string;
  date: string;
  classStyle: string;
  productImage: ProductImageType;
  personImage: ProductImageType;
};
