import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductPage from '@/modules/ProductPage';
import Layout from '@/common/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { ProductShopProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import { ProductsRefProvider } from '@/common/components/product/ProductsRefContext';
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
        <ProductPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductShop;

export async function getServerSideProps() {
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
}
