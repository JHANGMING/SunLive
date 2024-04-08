import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { ProductShopProps } from '@/modules/ProductPage/data';
import ProductBanner from '@/components/Banner/ProductBanner';
import PopularSection from '@/modules/ProductPage/PopularSection';
import { setAllProductsData } from '@/redux/features/productSlice';
import SeasonalSection from '@/modules/ProductPage/SeasonalSection';
import CategorySection from '@/modules/ProductPage/CategorySection';
import AllProductSection from '@/modules/ProductPage/AllProductSection';
import DiscountedSection from '@/modules/ProductPage/DiscountedSection';
import { ProductsRefProvider } from '@/components/Product/ProductsRefContext';
import {
  allproductsParams,
  otherCategoryParams,
} from '@/constants/api/apiParams';

const ProductShop = ({
  fruitProduct,
  topSaleProduct,
  allproductsData,
  promotionProduct,
  vegetableProduct,
}: ProductShopProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        fruitProduct,
        topSaleProduct,
        allproductsData,
        promotionProduct,
        vegetableProduct,
      }),
    );
  }, [
    fruitProduct,
    topSaleProduct,
    allproductsData,
    promotionProduct,
    vegetableProduct,
  ]);

  return (
    <Layout pageCategory="productPage">
      <ProductsRefProvider>
        <ProductBanner />
        <CategorySection />
        <DiscountedSection />
        <PopularSection />
        <SeasonalSection />
        <AllProductSection />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductShop;

export async function getServerSideProps() {
  try {
    let fruitProduct = {};
    let topSaleProduct = {};
    let allproductsData = {};
    let promotionProduct = {};
    let vegetableProduct = {};

    const responses = await Promise.allSettled([
      fetchApi(allproductsParams),
      fetchApi(otherCategoryParams),
    ]);
    responses.forEach((response, index) => {
      if (response.status !== 'fulfilled' || !response.value) return;
      const { statusCode } = response.value;
      switch (statusCode) {
        case 200:
          switch (index) {
            case 0:
              allproductsData = response.value.data;
              break;
            case 1:
              {
                const { data } = response.value;
                ({
                  fruitProduct,
                  topSaleProduct,
                  promotionProduct,
                  vegetableProduct,
                } = data);
              }
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    });

    return {
      props: {
        fruitProduct,
        topSaleProduct,
        allproductsData,
        promotionProduct,
        vegetableProduct,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
