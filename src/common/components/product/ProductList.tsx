import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { numberToChinese } from '@/common/helpers/numberToChinese';
import PaginatedProductList from './PaginatedProductList';
import ProductCard from './ProductCard';
import { ProductListProps, productData } from './data';

const ProductList = ({ category }: ProductListProps) => {
  const { searchData, allProductsData, topSaleProduct,fruitProduct,vegetableProduct,promotionProduct} = useSelector(
    (state: RootState) => state.product
  );

  switch (category) {
    case 'landingPage':
      return (
        <ul className="grid grid-cols-4 lg:grid-cols-12 auto-rows-min gap-x-24 gap-y-24 lg:gap-y-84">
          {productData.map((data) => (
            <ProductCard
              key={data.productId}
              {...data}
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'discounted':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24">
          {promotionProduct.slice(1, 4).map((data) => (
            <ProductCard
              key={data.productId}
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
          {topSaleProduct.map((data, index) => (
            <ProductCard
              key={data.productId}
              {...data}
              label={`熱賣第${numberToChinese(index + 1)}名`}
              labelStyle="text-primary-red bg-primary-yellow"
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'seasonalVegetable':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24 gap-y-84">
          {vegetableProduct.slice(0, 3).map((data) => (
            <ProductCard
              key={data.productId}
              {...data}
              imgBorderStyle="border-white"
              priceBorderStyle="white"
              originalPriceStyle="white"
            />
          ))}
        </ul>
      );
    case 'seasonalfruit':
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24 gap-y-84">
          {fruitProduct.map((data) => (
            <ProductCard
              key={data.productId}
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
              key={data.productId}
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
          {searchData.map((data) => (
            <ProductCard
              key={data.productId}
              {...data}
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'all':
      return <PaginatedProductList data={allProductsData} itemsPerPage={9} />;

    default:
      return null;
  }
};

export default ProductList;
