
import SearchPage from '@/modules/ProductPage/SearchPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
import Layout from '@/common/components/Layout';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAllProductsData } from '@/redux/features/productSlice';
import { ProductSearchProps } from '@/modules/ProductPage/data';
const ProductSearch = ({ allproductsData }:ProductSearchProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        allproductsData,
      })
    );
  }, [allproductsData]);
  return (
    <Layout pageCategory="searchPage">
      <ProductsRefProvider>
        <SearchPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductSearch;

export async function getServerSideProps() {
  let allproductsData = [];
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
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      allproductsData,
    },
  };
}
