type ProductImageType = {
  src: string;
  alt: string;
};

export type ProductDataProps = {
  price: number;
  title: string;
  personName: string;
  date: string;
  classStyle: string;
  productImage: ProductImageType;
  personImage: ProductImageType;
};
