import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BsFillGeoFill } from 'react-icons/bs';
import { RootState } from '@/redux/store';
import Button from '@/common/components/Button';
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import Loading from '@/common/components/Loading/Loading';
import { useProducts } from '@/common/hooks/ProductsRefContext';
import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';

const DiscountedSection = () => {
  const refs = useProducts();
  const { promotionProduct } = useSelector((state: RootState) => state.product);
  if (!refs) return null;
  const { discountedProductsRef } = refs;
  if (!promotionProduct || promotionProduct.length === 0) {
    return <Loading />;
  }
  const firstPromotionProduct = promotionProduct[0];
  const {
    farmerName,
    origin,
    productId,
    productImg,
    productSpecId,
    productTitle,
    smallOriginalPrice,
    smallPromotionPrice,
  } = firstPromotionProduct;
  return (
    <section className="bg-white py-60" ref={discountedProductsRef}>
      <div className="container">
        <CategoryTitle title="特價農產品" gapStyle="mb-24" />
        <ul className="grid grid-cols-12 gap-24 items-center mb-60">
          <li className=" col-span-8">
            <Link href={`/productshop/${productId}`} className=" relative">
              <Image
                src={
                  productImg.src === null
                    ? '/images/productShop/comingSoon.svg'
                    : productImg.src
                }
                alt={productImg.alt}
                roundedStyle="object-cover rounded-16"
                className="w-full h-[381px] hover:opacity-50 border-dashed border-2 border-primary-red rounded-20 transition duration-800 ease-in-out"
              />
              <div className="absolute left-0 top-0">
                <Image
                  src="/images/productShop/todaySale.svg"
                  alt="UpcomingIcon"
                  className="w-120 h-120"
                />
              </div>
              <h4 className="absolute left-0 bottom-0 w-full bg-primary-red h-60 opacity-80 flex justify-center items-center text-white rounded-bl-20 rounded-br-20">
                限時折扣
              </h4>
            </Link>
          </li>
          <li className=" col-span-4 px-16 flex flex-col gap-24">
            <Link href={`/productshop/${productId}`} className="flex gap-16 ">
              <LogoImg classProps="w-50 h-50" />
              <h2>{productTitle}</h2>
            </Link>
            <p className=" text-18 ">
              採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。
            </p>

            <ul className="flex flex-col gap-20">
              <li className="flex gap-8 items-center">
                <Image
                  src="/images/productDetail/farmer.png"
                  alt="farmerImg"
                  roundedStyle="object-cover rounded-full"
                  className="w-40 h-40 rounded-full border-2 border-primary-yellow"
                />
                <p>小農</p>
                <h6 className=" text-16 font-normal">{farmerName}</h6>
              </li>
              <li className="flex gap-8 items-center">
                <BsFillGeoFill
                  size={40}
                  className=" bg-primary-yellow rounded-full p-8"
                />
                <p>產地</p>
                <h6 className=" text-16 font-normal">{origin}</h6>
              </li>
            </ul>
            <div className=" flex justify-between">
              <div className="flex gap-8 items-center">
                <p className=" text-mediumGray py-6 px-20 rounded-8 border border-lightGray text-center font-bold">
                  價格
                </p>
                <h4 className=" text-primary-red">{smallPromotionPrice}</h4>
                <span className=" text-lightGray text-18 line-through">
                  {smallOriginalPrice}
                </span>
              </div>
              <Button
                category="addCart"
                btnStyle="bg-primary-red border-white"
                textStyle="text-white"
                productSpecId={productSpecId}>
                加入購物車
              </Button>
            </div>
          </li>
        </ul>
        <ProductList category="discounted" />
      </div>
    </section>
  );
};

export default DiscountedSection;
