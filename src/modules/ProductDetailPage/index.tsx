
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Loading from '@/components/Loading/Loading';
import { showLoading } from '@/redux/features/messageSlice';
import ProductDetailBanner from '@/components/Banner/ProductDetailBanner';
import DetailSection from './DetailSection';
import RelatedSection from './RelatedSection';
import IntroductSection from './IntroductSection';

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
      <ProductDetailBanner />
      <DetailSection detailProduct={detailProduct} />
      <IntroductSection detailProduct={detailProduct} />
      <RelatedSection />
    </>
  );
};

export default ProductDetailPage;
