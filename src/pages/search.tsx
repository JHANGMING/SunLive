import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import SearchPage from '@/modules/ProductPage/SearchPage';
import { ProductSearchProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
const ProductSearch = ({ allproductsData }: ProductSearchProps) => {
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
