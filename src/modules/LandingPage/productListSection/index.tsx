import ProductList from '@/common/components/product/ProductList';
import LinkToProduct from '@/common/components/LandingPage/LinkToProduct';

const ProductListSection = () => {
  return (
    <section className="bg-white lg:pt-24 pb-48 lg:pb-140">
      <div className="container flex flex-col">
        <div className=" self-end">
          <LinkToProduct path="/productshop" text="商品一覽" />
        </div>
        <ProductList category="landingPage" />
      </div>
    </section>
  );
};

export default ProductListSection;
