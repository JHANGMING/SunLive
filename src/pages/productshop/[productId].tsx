import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import ProductDetailPage from '@/modules/ProductDetailPage';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAllProductsData } from '@/redux/features/productSlice';
import { ProductDetailProps } from '@/modules/ProductDetailPage/data';

const ProductDetail = ({ detailData }:ProductDetailProps) => {
  const { detailProduct, productInfoByUser } = detailData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        detailProduct,
        productInfoByUser,
      })
    );
  }, [detailProduct, productInfoByUser]);
  return (
    <Layout pageCategory="productDetailPage">
      <ProductDetailPage />
    </Layout>
  );
};

export default ProductDetail;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const params = context.params;
  const productId = params ? params['productId'] : null;
  let detailData=[];
  try {
    // 取得商品細節
    const detailParams: ApiParamsType = {
      apiPath: `${apiPaths['detail']}/${productId}`,
      method: 'GET',
    };

    const detailResponse = await fetchApi(detailParams);
    if (detailResponse.statusCode === 200) {
      detailData = detailResponse.data;
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      detailData,
    },
  };
};
