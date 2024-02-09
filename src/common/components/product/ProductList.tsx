import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { numberToChinese } from '@/common/helpers/numberToChinese';
import PaginatedProductList from './PaginatedProductList';
import ProductCard from './ProductCard';
import { ProductListProps } from './data';
import Loading from '../Loading';

const ProductList = ({ category }: ProductListProps) => {
  const { searchData, allProductsData, topSaleProduct,fruitProduct,vegetableProduct,promotionProduct,productInfoByUser} = useSelector(
    (state: RootState) => state.product
  );
  switch (category) {
    case 'landingPage':
      if (!topSaleProduct || topSaleProduct.length === 0) {
        return <Loading />;
      }
      return (
        <ul className="grid grid-cols-4 lg:grid-cols-12 auto-rows-min gap-x-24 gap-y-24 lg:gap-y-84">
          {topSaleProduct.map((data) => (
            <ProductCard
              key={data.productId}
              {...data}
              imgBorderStyle="border-primary-yellow"
            />
          ))}
        </ul>
      );
    case 'discounted':
      if (!promotionProduct || promotionProduct.length === 0) {
        return <Loading />; 
      }
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
      if (!topSaleProduct || topSaleProduct.length === 0) {
        return <Loading />;
      }
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
      if (!vegetableProduct || vegetableProduct.length === 0) {
        return <Loading />;
      }
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
      if (!fruitProduct || fruitProduct.length === 0) {
        return <Loading />;
      }
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
      if (!productInfoByUser || productInfoByUser.length === 0) {
        return <Loading />;
      }
      return (
        <ul className="grid grid-cols-12 auto-rows-min gap-x-24">
          {productInfoByUser.slice(0, 4).map((data) => (
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
      if (!searchData || searchData.length === 0) {
        return <Loading />;
      }
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
      if (!allProductsData || allProductsData.length === 0) {
        return <Loading />;
      }
      return <PaginatedProductList data={allProductsData} itemsPerPage={9} />;

    default:
      return null;
  }
};

export default ProductList;
