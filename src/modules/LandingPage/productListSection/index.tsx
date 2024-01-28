import Image from 'next/image';
import { BsHandIndex } from 'react-icons/bs';
import LinkToProduct from '@/common/components/LandingPage/LinkToProduct';
import Button from '@/common/components/Button';
import ProductList from '@/common/components/product/ProductList';
const ProductListSection = () => {
  return (
    <section className="bg-white pt-24 pb-140">
      <div className="container">
        <LinkToProduct path="/productshop" text="商品一覽" />
        <ProductList category="landingPage" />
      </div>
    </section>
  );
};

export default ProductListSection;
