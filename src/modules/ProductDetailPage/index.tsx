import DetailBanner from '@/common/components/ProductDetailPage/DetailBanner';
import DetailSection from './DetailSection';
import IntroductSection from './IntroductSection';
import RelatedSection from './RelatedSection';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Loading from '@/common/components/Loading/Loading';

const ProductDetailPage = () => {
  const { detailProduct } = useSelector((state: RootState) => state.product);
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
