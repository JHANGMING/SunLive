type ProductImgType = {
  src: string;
  alt: string;
};
export type DetailproductItemType = {
  period: string;
  origin: string;
  storage: string;
  category: string;
  farmerName: null;
  farmerId: number;
  productId: number;
  farmerVision: null;
  largeStock: number;
  smallStock: number;
  largeWeight: number;
  smallWeight: number;
  introduction: string;
  productTitle: string;
  productSpecId: number;
  farmerDescription: null;
  smallOriginalPrice: number;
  smallproductSpecId: number;
  productDescription: string;
  largeOriginalPrice: number;
  largeproductSpecId: number;
  smallPromotionPrice: number;
  largePromotionPrice: number;
  productImages: ProductImgType[];
  farmerImg: {
    src: string;
    alt: string;
  };
};
