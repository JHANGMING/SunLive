
import Layout from '@/common/components/Layout';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import LandingPage from '@/modules/LandingPage';
import { HomePropsType } from '@/modules/LandingPage/data';
import { setAllProductsData } from '@/redux/features/productSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Home({ liveData, topSaleProduct }: HomePropsType) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        liveData,
        topSaleProduct,
      })
    );
  }, [liveData, topSaleProduct]);

  return (
    <Layout pageCategory="landingPage">
      <LandingPage />
    </Layout>
  );
}

export async function getServerSideProps() {
  let liveData= [];
  let topSaleProduct = [];
  try {
    // 取得近期直播商品
    const liveParams: ApiParamsType = {
      apiPath: apiPaths['live'],
      method: 'GET',
    };

    const liveResponse = await fetchApi(liveParams);
    if (liveResponse.statusCode === 200) {
      liveData = liveResponse;
    }
    // 取得熱門商品
    const otherCategoryParams: ApiParamsType = {
      apiPath: apiPaths['otherCategory'],
      method: 'GET',
    };
    const otherCategoryResponse = await fetchApi(otherCategoryParams);
    if (otherCategoryResponse.statusCode === 200) {
      const { data } = otherCategoryResponse;
      topSaleProduct = data.topSaleProduct;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      liveData,
      topSaleProduct,
    },
  };
}