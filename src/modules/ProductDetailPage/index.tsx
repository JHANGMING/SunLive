
import DetailBanner from '@/common/components/ProductDetailPage/DetailBanner';
import DetailSection from './DetailSection';
import IntroductSection from './IntroductSection';
import RelatedSection from './RelatedSection';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ProductDetailPage = () => {
  const { detailProduct } = useSelector((state: RootState) => state.product);
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
