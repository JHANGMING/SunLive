import Button from '@/common/components/Button';
import LogoImg from '@/common/components/Logo/LogoImg';
import Image from 'next/image';
import { useState } from 'react';
import { BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { productData } from './data';

const DetailSection = () => {
  const [qty, setQty] = useState(1);
  const [selectedSpec, setSelectedSpec] = useState('small');
  const updateCount = (isIncrement: boolean) => {
    setQty((prevCount) => (isIncrement ? prevCount + 1 : prevCount - 1));
  };
  const selectSpec = (spec: string) => {
    setSelectedSpec(spec);
  };
  // const handlerAddCart = () => {
  //   console.log(spec);
  // };
  const handlerToBuy = () => {
    console.log('handlerToBuy');
  };
  const getButtonClass = (spec: string) => {
    let baseClass = 'w-[160px] h-48 px-32 border rounded-8 ';
    let selectedClass = 'border-primary-red font-bold text-primary-red';
    let defaultClass = 'border-mediumGray';

    return baseClass + (selectedSpec === spec ? selectedClass : defaultClass);
  };
  const [selectedImage, setSelectedImage] = useState(
    '/images/productDetail/detailImg1.svg'
  );

  const handleImageSelect = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const getThumbnailClass = (imageSrc: string) => {
    return imageSrc === selectedImage
      ? 'w-[120px] h-[100px] object-cover rounded-8 cursor-pointer'
      : 'w-[120px] h-[100px] object-cover rounded-8 opacity-60 cursor-pointer';
  };
  return (
    <section className="container py-60">
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-6">
          <Image
            src={selectedImage}
            alt="Selected Image"
            width={636}
            height={338}
            className="h-[338px] object-cover  border-4 border-primary-yellow rounded-20 mb-24 "
          />
          <ul className="flex gap-8 ">
            {productData.map((data) => (
              <li key={data.alt} onClick={() => handleImageSelect(data.src)}>
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={120}
                  height={100}
                  className={getThumbnailClass(data.src)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 ml-16">
          <div className="flex items-center gap-16 mb-8">
            <LogoImg widthProps={32} heightProps={32} />
            <h2 className=" text-primary-green">甜蜜時光有機草莓</h2>
          </div>
          <p className=" text-18 mb-16">
            在我們溫網室內，透過完全無農藥的種植方式，獲得了友善驗證。
            我們精心自製液肥，並以生物防治維持作物健康。
          </p>
          <div className=" mb-16">
            <p className=" text-primary-green text-16 font-bold ">優惠價</p>
            <div className="flex items-center gap-8">
              <h4 className="text-primary-red">$250</h4>
              <span className=" text-lightGray font-bold text-14 line-through">
                500
              </span>
            </div>
          </div>

          <div className="mb-16">
            <p className=" text-primary-green text-16 font-bold mb-4">規格</p>
            <div className="flex gap-24">
              <button
                type="button"
                className={getButtonClass('small')}
                onClick={() => selectSpec('small')}>
                小份 (200g)
              </button>
              <button
                type="button"
                className={getButtonClass('large')}
                onClick={() => selectSpec('large')}>
                大份 (400g)
              </button>
            </div>
          </div>
          <div className="mb-50">
            <p className=" text-primary-green text-16 font-bold mb-4">數量</p>
            <div className="flex items-center gap-16">
              <BsDashCircleFill
                size={24}
                className=" text-mediumGray cursor-pointer"
                onClick={() => updateCount(false)}
              />
              <input
                type="text"
                className="w-[264px] h-48 border border-darkGray rounded-8 text-center font-bold focus-visible:outline-none"
                value={qty}
                readOnly
              />
              <BsPlusCircleFill
                size={24}
                className=" text-mediumGray cursor-pointer"
                onClick={() => updateCount(true)}
              />
            </div>
          </div>
          <div className="flex gap-24">
            <Button
              category="addCart"
              // onClick={handlerAddCart}
              showIcon={false}
              btnStyle="bg-white border-primary-red w-full flex justify-center items-center h-48"
              textStyle="text-primary-red">
              加入購物車
            </Button>
            <Button
              category="addCart"
              onClick={handlerToBuy}
              btnStyle="bg-primary-red border-white w-full flex justify-center items-center h-48 "
              textStyle="text-white">
              立即購買
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
