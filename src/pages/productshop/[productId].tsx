import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout';
import fetchApi from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/api/apiPaths';
import { showLoading } from '@/redux/features/messageSlice';
import createApiParams from '@/common/helpers/createApiParams';
import { setAllProductsData } from '@/redux/features/productSlice';
import { ProductDetailProps } from '@/modules/ProductDetailPage/data';
import DetailSection from '@/modules/ProductDetailPage/DetailSection';
import RelatedSection from '@/modules/ProductDetailPage/RelatedSection';
import ProductDetailBanner from '@/components/Banner/ProductDetailBanner';
import IntroductSection from '@/modules/ProductDetailPage/IntroductSection';

const ProductDetail = ({ detailData }: ProductDetailProps) => {
  const { detailProduct, productInfoByUser } = detailData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllProductsData({
        productInfoByUser,
      }),
    );
    dispatch(showLoading());
  }, [productInfoByUser]);
  return (
    <Layout pageCategory="productDetailPage">
      <ProductDetailBanner />
      <DetailSection detailProduct={detailProduct} />
      <IntroductSection detailProduct={detailProduct} />
      <RelatedSection />
    </Layout>
  );
};

export default ProductDetail;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params } = context;
  const productId = params ? params.productId : null;
  let detailData = [];
  try {
    // 取得商品細節
    const detailParams = createApiParams(`${apiPaths.detail}/${productId}`, 'GET');
    const detailResponse = await fetchApi(detailParams);
    switch (detailResponse.statusCode) {
      case 200:
        detailData = detailResponse.data;
        break;
      case 401:
        return { notFound: true };
      default:
        return { notFound: true };
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
      detailData,
    },
  };
};
