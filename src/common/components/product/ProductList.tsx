import PaginatedProductList from './PaginatedProductList';
import ProductCard from './ProductCard';
import { allproductData, productData } from './data';
type ProductListProps = {
  category: string;
};

const numberToChinese = (number: number) => {
  const chineseNumbers = ['零', '一', '二', '三'];
  return chineseNumbers[number] || number;
};
const ProductList = ({ category }: ProductListProps) => {
  switch (category) {
    case 'landingPage':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24 gap-y-84">
          {productData.map((data) => (
            <ProductCard
              key={data.title}
              {...data}
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'discounted':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24">
          {productData.slice(0, 3).map((data) => (
            <ProductCard
              key={data.title}
              {...data}
              label="限時折扣"
              labelStyle="text-white bg-primary-red"
              imgBorderStyle="border-primary-red"
            />
          ))}
        </ul>
      );
    case 'popular':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24 ">
          {productData.slice(0, 3).map((data, index) => (
            <ProductCard
              key={data.title}
              {...data}
              label={`熱賣第${numberToChinese(index + 1)}名`}
              labelStyle="text-primary-red bg-primary-yellow"
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'seasonalfruit':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24 gap-y-84">
          {productData.slice(0, 3).map((data) => (
            <ProductCard
              key={data.title}
              {...data}
              imgBorderStyle="border-white"
              priceBorderStyle="white"
              originalPriceStyle="white"
            />
          ))}
        </ul>
      );
    case 'related':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24">
          {productData.slice(0, 4).map((data) => (
            <ProductCard
              key={data.title}
              {...data}
              imgBorderStyle="border-primary-yellow"
              buttonAtBottom={true}
              cardGapThreeCol={false}
            />
          ))}
        </ul>
      );
    case 'search':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-24 ">
          {productData.slice(0, 3).map((data, index) => (
            <ProductCard
              key={data.title}
              {...data}
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'all':
      return <PaginatedProductList data={allproductData} itemsPerPage={9} />;

    default:
      return null;
  }
};

export default ProductList;
