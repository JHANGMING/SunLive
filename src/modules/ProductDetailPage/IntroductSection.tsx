import Image from 'next/image';
import * as DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import CategoryTitle from '../ProductPage/CategoryTitle';
import LogoImg from '@/common/components/Logo/LogoImg';
import useScrollToElement from '@/common/hooks/useScrollToRef';
import { DetailSectionProps } from './data';

const IntroductSection = ({ detailProduct }:DetailSectionProps) => {
    console.log('detailProduct', detailProduct);
  const [selected, setSelected] = useState('farmer');
  const [farmerRef, scrollToFarmer] = useScrollToElement();
  const [productRef, scrollToProduct] = useScrollToElement();
  const [specificationRef, scrollToSpecification] = useScrollToElement();
  const [cleanHtml, setCleanHtml] = useState('');
  useEffect(() => {
    setCleanHtml(DOMPurify.sanitize(detailProduct.introduction));
  }, [detailProduct.introduction]);
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
                src={
                  detailProduct.farmerImg.src !== null
                    ? detailProduct.farmerImg.src
                    : '/images/productDetail/farmer.png'
                }
                alt="farmer"
                width={200}
                height={200}
                className=" h-[200px] rounded-full col-start-2 col-end-5 "
              />
              <div className="col-start-5 col-end-11 -ml-[70px]">
                <div className="flex gap-16 items-center mb-16">
                  <h4>{detailProduct.farmerName}</h4>
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
                <div className=" text-primary-green bg-primary-yellow flex  items-center gap-8 py-16 rounded-20 px-16  mb-16">
                  <LogoImg classProps="w-32 h-32" />
                  <p className="font-bold">{detailProduct.farmerVision}</p>
                </div>
                <p className="text-18">{detailProduct.farmerDescription}</p>
              </div>
            </div>
          </li>
          <li ref={productRef} className="mb-40">
            <CategoryTitle title="商品介紹" gapStyle="mb-24" />
            <div className="grid grid-cols-12 gap-24">
              <div
                className="col-start-2 col-end-12 flex flex-col gap-y-24"
                dangerouslySetInnerHTML={{ __html: cleanHtml }}>
                {/* <Image
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
                /> */}
              </div>
            </div>
          </li>
          <li ref={specificationRef}>
            <CategoryTitle title="規格說明" gapStyle="mb-24" />
            <div className="grid grid-cols-12 gap-24">
              <ul className=" col-start-2 col-end-11 flex flex-col gap-24">
                <li>
                  <p className="text-18 text-primary-green">產地</p>
                  <span>{detailProduct.origin}</span>
                </li>
                <li>
                  <p className="text-18 text-primary-green">規格</p>
                  <span>
                    小份：{detailProduct.smallWeight}斤 / 大份：
                    {detailProduct.largeWeight}斤
                  </span>
                </li>
                <li>
                  <p className="text-18 text-primary-green">保存方式</p>
                  <span>{detailProduct.storage}</span>
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
