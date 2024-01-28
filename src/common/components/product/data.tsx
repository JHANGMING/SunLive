export type ProductCardProps = {
  title: string;
  des: string;
  originalPrice: number;
  salePrice: number;
  label?: string;
  imgBorderStyle?: string;
  labelStyle?: string;
  priceBorderStyle?: string;
  originalPriceStyle?: string;
  buttonAtBottom?: boolean;
  cardGapThreeCol?: boolean;
  productImg: {
    src: string;
    alt: string;
  };
};
export const productData: ProductCardProps[] = [
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    title: '多汁天然有機鳳梨',
    des: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    title: '笑笑果橙樂',
    des: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    title: '甜蜜時光有機草莓',
    des: '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '黃金口福玉米',
    des: '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '夏日甜蜜季西瓜',
    des: '每一片都蘊含著陽光的味道，如夏季微風般清新，帶來一陣陣的甜蜜幸福。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
];

export const allproductData: ProductCardProps[] = [
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    title: '多汁天然有機鳳梨',
    des: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    title: '笑笑果橙樂',
    des: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    title: '甜蜜時光有機草莓',
    des: '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '黃金口福玉米',
    des: '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    title: '多汁天然有機鳳梨',
    des: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    title: '笑笑果橙樂',
    des: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    title: '多汁天然有機鳳梨',
    des: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    title: '笑笑果橙樂',
    des: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    title: '甜蜜時光有機草莓',
    des: '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '黃金口福玉米',
    des: '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '夏日甜蜜季西瓜',
    des: '每一片都蘊含著陽光的味道，如夏季微風般清新，帶來一陣陣的甜蜜幸福。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
];
