import Image from 'next/image';
import CategoryTitle from '../ProductPage/CategoryTitle';
import LogoImg from '@/common/components/Logo/LogoImg';
import { useRef, useState } from 'react';
import useScrollToElement from '@/common/hooks/useScrollToRef';

const IntroductSection = () => {
  const [selected, setSelected] = useState('farmer');
  const [farmerRef, scrollToFarmer] = useScrollToElement();
  const [productRef, scrollToProduct] = useScrollToElement();
  const [specificationRef, scrollToSpecification] = useScrollToElement();

  const isSelected = (name: string) => selected === name;
  return (
    <section className=" bg-detailBG pt-100 bg-repeat-x  ">
      <div className="bg-lightWhite  ">
        <ul className="container pb-60 relative">
          <li>
            <ul className=" absolute top-0 right-[130px] flex flex-col gap-24 text-darkGray font-bold">
              <li
                className={`pl-16 border-l-4 cursor-pointer hover:opacity-60 ${isSelected('farmer') ? 'border-primary-yellow' : 'border-transparent'}`}
                onClick={() => {
                  scrollToFarmer();
                  setSelected('farmer');
                }}>
                <h5>小農介紹</h5>
              </li>
              <li
                className={`pl-16 border-l-4 cursor-pointer hover:opacity-60 ${isSelected('product') ? 'border-primary-yellow' : 'border-transparent'}`}
                onClick={() => {
                  scrollToProduct();
                  setSelected('product');
                }}>
                <h5>商品介紹</h5>
              </li>
              <li
                className={`pl-16 border-l-4 cursor-pointer hover:opacity-60 ${isSelected('specification') ? 'border-primary-yellow' : 'border-transparent'}`}
                onClick={() => {
                  scrollToSpecification();
                  setSelected('specification');
                }}>
                <h5>規格說明</h5>
              </li>
            </ul>
          </li>
          <li ref={farmerRef} className="mb-26">
            <CategoryTitle title="小農介紹" gapStyle="mb-24" />
            <div className="grid grid-cols-12 gap-24">
              <Image
                src="/images/productDetail/farmer.png"
                alt="farmer"
                width={200}
                height={200}
                className=" h-[200px] rounded-full col-start-2 col-end-5 "
              />
              <div className="col-start-5 col-end-11 -ml-[70px]">
                <div className="flex gap-16 items-center mb-16">
                  <h4>陳雅安</h4>
                  <div className=" bg-primary-green flex gap-8 h-[37px] px-8 items-center rounded-8 hover:opacity-60 cursor-pointer">
                    <Image
                      src="/images/productDetail/chatIcon.svg"
                      alt="chatIcon"
                      width={20}
                      height={19}
                    />
                    <p className="text-14 text-white">我想跟小農聊聊</p>
                  </div>
                </div>
                <div className=" text-primary-green bg-primary-yellow flex justify-center items-center gap-8 py-16 rounded-20 w-[421px]  mb-16">
                  <LogoImg widthProps={32} heightProps={32} />
                  <p className="font-bold">
                    我希望自己的種植對環境好，對人的健康也好
                  </p>
                </div>
                <p className="text-18">
                  我種植的草莓真的很好吃，品種繁多，包括了甜蜜時光、金莓、霓虹草莓等友善種植作品。我的草莓園地位於美麗的苗栗，充滿愛和專業的栽培，每一顆草莓都是經過細心呵護的結晶。
                </p>
              </div>
            </div>
          </li>
          <li ref={productRef} className="mb-40">
            <CategoryTitle title="商品介紹" gapStyle="mb-24" />
            <div className="grid grid-cols-12 gap-24">
              <div className="col-start-2 col-end-12 flex flex-col gap-y-24">
                <Image
                  src="/images/productDetail/introductImg_1.png"
                  alt="introductImg_1"
                  width={966}
                  height={988}
                  className="h-[988px] "
                />
                <Image
                  src="/images/productDetail/introductImg_2.png"
                  alt="introductImg_2"
                  width={966}
                  height={988}
                  className="h-[988px] "
                />
              </div>
            </div>
          </li>
          <li ref={specificationRef}>
            <CategoryTitle title="規格說明" gapStyle="mb-24" />
            <div className="grid grid-cols-12 gap-24">
              <ul className=" col-start-2 col-end-11 flex flex-col gap-24">
                <li>
                  <p className="text-18 text-primary-green">規格</p>
                  <span>苗栗市</span>
                </li>
                <li>
                  <p className="text-18 text-primary-green">產地</p>
                  <span>小份：200g / 大份：400g</span>
                </li>
                <li>
                  <p className="text-18 text-primary-green">保存方式</p>
                  <span>冷藏保存</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroductSection;
