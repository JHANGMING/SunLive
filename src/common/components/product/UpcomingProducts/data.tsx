type ProductImageType = {
  src: string;
  alt: string;
};

export type ProductDataProps = {
  date: string;
  price: number;
  title: string;
  personName: string;
  classStyle: string;
  personImage: ProductImageType;
  productImage: ProductImageType;
};
