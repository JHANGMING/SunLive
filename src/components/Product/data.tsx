export type ProductCardProps = {
  label?: string;
  productId?: number;
  labelStyle?: string;
  productTitle: string;
  description?: string;
  productSpecId?: number;
  imgBorderStyle?: string;
  buttonAtBottom?: boolean;
  cardGapThreeCol?: boolean;
  priceBorderStyle?: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  originalPriceStyle?: string;
  productImg: {
    src: string;
    alt: string;
  };
};

export type ProductListProps = {
  category: string;
};

export type PaginatedProductListProps = {
  itemsPerPage: number;
  data: ProductCardProps[];
};
