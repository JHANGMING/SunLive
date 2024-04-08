import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import ProductBanner from '@/components/Banner/ProductBanner';
import { allproductsParams } from '@/constants/api/apiParams';
import { ProductSearchProps } from '@/modules/ProductPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import AllProductSection from '@/modules/ProductPage/AllProductSection';
import SearchSection from '@/modules/ProductPage/SearchSection';
import { ProductsRefProvider } from '@/components/Product/ProductsRefContext';

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
        <ProductBanner />
        <SearchSection />
        <AllProductSection />
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
    return {
      props: {},
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }

  return {
    props: {
      allproductsData,
    },
  };
}
