import DetailBanner from '@/common/components/ProductDetailPage/DetailBanner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Loading from '@/common/components/Loading/Loading';
import { useEffect } from 'react';
import { showLoading } from '@/redux/features/messageSlice';
import RelatedSection from './RelatedSection';
import IntroductSection from './IntroductSection';
import DetailSection from './DetailSection';

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    dispatch(showLoading());
  }, []);
  if (!detailProduct) {
    return <Loading />;
  }
  return (
    <>
      <DetailBanner />
      <DetailSection detailProduct={detailProduct} />
      <IntroductSection detailProduct={detailProduct} />
      <RelatedSection />
    </>
  );
};

export default ProductDetailPage;
