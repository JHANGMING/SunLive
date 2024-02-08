
import ProductPage from '@/modules/ProductPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
import Layout from '@/common/components/Layout';
import { apiPaths } from '@/constants/apiPaths';
import { apiParamsType } from '@/common/helpers/fetchNextApi';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { AllproductsDataType } from '@/constants/types/product/allproducts';
import { ProductShopProps } from '@/modules/ProductPage/data';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAllProductsData } from '@/redux/features/productSlice';
const ProductShop = ({ allproductsData}:ProductShopProps) => {
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(setAllProductsData(allproductsData));
   }, [ allproductsData]);

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
  try {
    // 取得所有商品
    const apiParams: ApiParamsType = {
      apiPath: apiPaths['allproducts'],
      method: 'GET',
    };
    allproductsData = await fetchApi(apiParams);
    
  } catch (error) {
    console.error(error);
  }
  

  return { props: { allproductsData } };
}