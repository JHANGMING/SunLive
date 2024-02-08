
export type AllproductsItemType = {
  productId: number;
  productSpecId: number;
  productTitle: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: {
    src: string;
    alt: string;
  };
};

export type AllproductsDataType = AllproductsItemType[];