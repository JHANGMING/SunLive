type PhotosItemType = {
  photoId: string;
  src: string;
  alt: string;
};
type PhotosDataType = PhotosItemType[];

export type DetailproductDataType = {
  productTitle: string;
  category: string;
  period: string;
  origin: string;
  storage: string;
  description: string;
  introduction: string;
  productState: boolean;
  largeOriginalPrice: number;
  largePromotionPrice: number;
  largeWeight: number;
  largeStock: number;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  smallWeight: number;
  smallStock: number;
  productId: number;
  photos: PhotosDataType;
};
