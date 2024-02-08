type productImgType= {
  src: string;
  alt: string;
}
export type DetailproductItemType = {
  productId: number;
  productSpecId: number;
  productTitle: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  category: string;
  period: string;
  origin: string;
  storage: string;
  productDescription: string;
  introduction: string;
  largeOriginalPrice: number;
  largePromotionPrice: number;
  largeWeight: number;
  largeStock: number;
  smallWeight: number;
  smallStock: number;
  productImages: productImgType[];
  farmerName: null;
  farmerVision: null;
  farmerDescription: null;
  farmerImg: {
    src: string;
    alt: string;
  };
};

export type DetailproductDataType = DetailproductItemType[];
