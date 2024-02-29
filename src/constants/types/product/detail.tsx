type productImgType = {
  src: string;
  alt: string;
};
export type DetailproductItemType = {
  productId: number;
  productSpecId: number;
  farmerId: number;
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
  largeproductSpecId: number;
  largeWeight: number;
  largeStock: number;
  smallWeight: number;
  smallStock: number;
  smallproductSpecId: number;
  productImages: productImgType[];
  farmerName: null;
  farmerVision: null;
  farmerDescription: null;
  farmerImg: {
    src: string;
    alt: string;
  };
};
