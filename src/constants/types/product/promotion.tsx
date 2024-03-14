export type PromotionItemType = {
  origin: string;
  productId: number;
  farmerName: string;
  description: string;
  productTitle: string;
  productSpecId: number;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  farmerImg: {
    src: string;
    alt: string;
  };
  productImg: {
    src: string;
    alt: string;
  };
};

export type PromotionDataType = PromotionItemType[];
