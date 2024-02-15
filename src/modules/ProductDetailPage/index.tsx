import DetailBanner from '@/common/components/ProductDetailPage/DetailBanner';
import DetailSection from './DetailSection';
import IntroductSection from './IntroductSection';
import RelatedSection from './RelatedSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Loading from '@/common/components/Loading/Loading';
import { useEffect } from 'react';
import { showLoading } from '@/redux/features/messageSlice';

const ProductDetailPage = () => {
  const { detailProduct } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
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
