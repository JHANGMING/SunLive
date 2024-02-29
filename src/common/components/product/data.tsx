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

export type PaginatedProductListProps = {
  data: ProductCardProps[];
  itemsPerPage: number;
};