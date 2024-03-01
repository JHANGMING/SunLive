type PhotosItemType = {
  src: string;
  alt: string;
  photoId: string;
};
type PhotosDataType = PhotosItemType[];

export type DetailproductDataType = {
  period: string;
  origin: string;
  storage: string;
  category: string;
  productId: number;
  smallStock: number;
  largeStock: number;
  largeWeight: number;
  smallWeight: number;
  description: string;
  introduction: string;
  productTitle: string;
  productState: boolean;
  photos: PhotosDataType;
  largeOriginalPrice: number;
  smallOriginalPrice: number;
  largePromotionPrice: number;
  smallPromotionPrice: number;
};
