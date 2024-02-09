export type ProductImgType={
  src: string;
  alt: string;
};


export type AllproductsItemType = {
  productId: number;
  productSpecId: number;
  productTitle: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: ProductImgType;
};

export type AllproductsDataType = AllproductsItemType[];