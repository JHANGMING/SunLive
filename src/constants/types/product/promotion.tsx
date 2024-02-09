export type PromotionItemType = {
  farmerName: string;
  origin: string;
  productId: number;
  productSpecId: number;
  productTitle: string;
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
