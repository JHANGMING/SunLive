import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import SearchPage from '@/modules/ProductPage/SearchPage';
import { allproductsParams } from '@/constants/api/apiParams';
import { ProductSearchProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import { ProductsRefProvider } from '@/components/product/ProductsRefContext';

const ProductSearch = ({ allproductsData }: ProductSearchProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        allproductsData,
      }),
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
    const allproductsResponse = await fetchApi(allproductsParams);
    switch (allproductsResponse.statusCode) {
      case 200:
        allproductsData = allproductsResponse.data;
        break;
      default:
        break;
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
