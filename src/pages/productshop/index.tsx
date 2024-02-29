import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductPage from '@/modules/ProductPage';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import { ProductShopProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
import { AllproductsDataType } from '@/constants/types/product/allproducts';

const ProductShop = ({
  allproductsData,
  promotionProduct,
  fruitProduct,
  vegetableProduct,
  topSaleProduct,
}: ProductShopProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        allproductsData,
        promotionProduct,
        fruitProduct,
        vegetableProduct,
        topSaleProduct,
      })
    );
  }, [
    allproductsData,
    promotionProduct,
    fruitProduct,
    vegetableProduct,
    topSaleProduct,
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
  let allproductsData: AllproductsDataType = [];
  let promotionProduct = [];
  let fruitProduct = [];
  let vegetableProduct = [];
  let topSaleProduct = [];
  try {
    // 取得所有商品
    const allParams: ApiParamsType = {
      apiPath: apiPaths['allproducts'],
      method: 'GET',
    };

    const allproductsResponse = await fetchApi(allParams);
    if (allproductsResponse.statusCode === 200) {
      allproductsData = allproductsResponse.data;
    }

    // 取得其他分類商品
    const otherCategoryParams: ApiParamsType = {
      apiPath: apiPaths['otherCategory'],
      method: 'GET',
    };

    const otherCategoryResponse = await fetchApi(otherCategoryParams);
    if (otherCategoryResponse.statusCode === 200) {
      const { data } = otherCategoryResponse;
      promotionProduct = data.promotionProduct;
      fruitProduct = data.fruitProduct;
      vegetableProduct = data.vegetableProduct;
      topSaleProduct = data.topSaleProduct;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      allproductsData,
      promotionProduct,
      fruitProduct,
      vegetableProduct,
      topSaleProduct,
    },
  };
}
