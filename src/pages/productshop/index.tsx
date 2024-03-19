import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductPage from '@/modules/ProductPage';
import { apiPaths } from '@/constants/api/apiPaths';
import Layout from '@/common/components/Layout';
import { ProductShopProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { ProductsRefProvider } from '@/common/components/product/ProductsRefContext';

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
  let fruitProduct = [];
  let topSaleProduct = [];
  let allproductsData = [];
  let promotionProduct = [];
  let vegetableProduct = [];

  // 取得所有商品
  const allParams: ApiParamsType = {
    apiPath: apiPaths.allproducts,
    method: 'GET',
  };

  // 取得其他分類商品
  const otherCategoryParams: ApiParamsType = {
    apiPath: apiPaths.otherCategory,
    method: 'GET',
  };
  const responses = await Promise.allSettled([
    fetchApi(allParams),
    fetchApi(otherCategoryParams),
  ]);
  if (
    responses[0].status === 'fulfilled'
    && responses[0].value.statusCode === 200
  ) {
    allproductsData = responses[0].value.data;
  }

  if (
    responses[1].status === 'fulfilled'
    && responses[1].value.statusCode === 200
  ) {
    const { data } = responses[1].value;
    ({ fruitProduct, topSaleProduct, promotionProduct, vegetableProduct } = data);
  }

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
