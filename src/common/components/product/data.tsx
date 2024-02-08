export type ProductCardProps = {
  productTitle: string;
  description?: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productSpecId?: number;
  productId?: number;
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

export type ProductListProps = {
  category: string;
};

export const productData: ProductCardProps[] = [
  {
    productTitle: '紫禧有機天使茄',
    description:
      '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    productTitle: '多汁天然有機鳳梨',
    description:
      '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    productTitle: '笑笑果橙樂',
    description:
      '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '甜蜜時光有機草莓',
    description:
      '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '黃金口福玉米',
    description:
      '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '夏日甜蜜季西瓜',
    description:
      '每一片都蘊含著陽光的味道，如夏季微風般清新，帶來一陣陣的甜蜜幸福。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
];

export const allproductData: ProductCardProps[] = [
  {
    productTitle: '紫禧有機天使茄',
    description: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    productTitle: '多汁天然有機鳳梨',
    description: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    productTitle: '笑笑果橙樂',
    description: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '甜蜜時光有機草莓',
    description: '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '黃金口福玉米',
    description: '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '紫禧有機天使茄',
    description: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    productTitle: '多汁天然有機鳳梨',
    description: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    productTitle: '笑笑果橙樂',
    description: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '多汁天然有機鳳梨',
    description: '金鑽香梨是鳳梨中的極致之選。每一口都散發著濃郁的香氣，快來品味極致鳳梨的甜美和多汁。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg2.png',
      alt: 'product2',
    },
  },
  {
    productTitle: '笑笑果橙樂',
    description: '擁有著陽光的味道和微妙的酸甜平衡，一顆笑果橙樂，保證您的味蕾也跟著嘴巴笑開懷！',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/productShop/discountedImg3.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '甜蜜時光有機草莓',
    description: '一咬，彷彿品味到大自然的甜蜜吻，讓您在『甜蜜時光有機草莓』中品味到時令的鮮美與香甜。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '黃金口福玉米',
    description: '每一粒都是如絲般嫩滑，散發著大地的香氣，點綴您的餐桌，享受這份黃金般的口福。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    productTitle: '夏日甜蜜季西瓜',
    description: '每一片都蘊含著陽光的味道，如夏季微風般清新，帶來一陣陣的甜蜜幸福。',
    smallOriginalPrice: 299,
    smallPromotionPrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
];
