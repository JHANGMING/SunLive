import Image from 'next/image';
import CategoryTitle from './CategoryTitle';
import LogoImg from '@/common/components/Logo/LogoImg';
import { BsFillGeoFill } from 'react-icons/bs';
import Button from '@/common/components/Button';
import ProductList from '@/common/components/product/ProductList';
import { useProducts } from '@/common/hooks/ProductsRefContext';

const DiscountedSection = () => {
  const refs = useProducts();

  if (!refs) return null;
  const { discountedProductsRef } = refs;

  return (
    <section className="bg-white py-60" ref={discountedProductsRef}>
      <div className="container">
        <CategoryTitle title="特價農產品" gapStyle="mb-24" />
        <ul className="grid grid-cols-12 gap-24 items-center mb-60">
          <li className=" col-span-8">
            <div className=" relative">
              <Image
                src="/images/productShop/discountedImg1.png"
                alt="discountedImg1"
                width={854}
                height={381}
                className="w-[854px] h-[381px] hover:opacity-50 border-dashed border-2 border-primary-red rounded-20 transition duration-800 ease-in-out"
              />
              <Image
                src="/images/home/live/UpcomingIcon.svg"
                alt="UpcomingIcon"
                width={120}
                height={120}
                className="absolute left-0 top-0"
              />
              <h4 className="absolute left-0 bottom-0 w-full bg-primary-red h-60 opacity-80 flex justify-center items-center text-white rounded-bl-20 rounded-br-20">
                限時折扣
              </h4>
            </div>
          </li>
          <li className=" col-span-4 px-16 flex flex-col gap-24">
            <div className="flex gap-16 ">
              <LogoImg widthProps={50} heightProps={50} />
              <h2>紫禧有機天使茄</h2>
            </div>
            <p className=" text-18 ">
              採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。
            </p>

            <ul className="flex flex-col gap-20">
              <li className="flex gap-8 items-center">
                <Image
                  src="/images/productDetail/farmerImg.svg"
                  alt="farmerImg"
                  width={40}
                  height={40}
                  className="w-40 h-40 rounded-full border-2 border-primary-yellow"
                />
                <p>小農</p>
                <h6 className=" text-16 font-normal">陳雅安</h6>
              </li>
              <li className="flex gap-8 items-center">
                <BsFillGeoFill
                  size={40}
                  className=" bg-primary-yellow rounded-full p-8"
                />
                <p>產地</p>
                <h6 className=" text-16 font-normal">苗栗市</h6>
              </li>
            </ul>
            <div className=" flex justify-between">
              <div className="flex gap-8 items-center">
                <p className=" text-mediumGray py-6 px-20 rounded-8 border border-lightGray text-center font-bold">
                  價格
                </p>
                <h4 className=" text-primary-red">199</h4>
                <span className=" text-lightGray text-18 line-through">
                  399
                </span>
              </div>
              <Button
                category="addCart"
                btnStyle="bg-primary-red border-white"
                textStyle="text-white">
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
