import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import Button from '@/common/components/Button';
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import { ProductImgType } from '@/constants/types/product/allproducts';
import { DetailSectionProps } from './data';

const DetailSection = ({ detailProduct }: DetailSectionProps) => {
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSpec, setSelectedSpec] = useState(
    detailProduct.smallproductSpecId
  );
  useEffect(() => {
    if (detailProduct.productImages && detailProduct.productImages.length > 0) {
      setSelectedImage(detailProduct.productImages[0]?.src);
    }
  }, [detailProduct]);
  const updateCount = (isIncrement: boolean) => {
    setQty((prevCount) => (isIncrement ? prevCount + 1 : prevCount - 1));
  };
  const selectSpec = (spec: number) => {
    setSelectedSpec(spec);
  };
  const getButtonClass = (spec: number) => {
    let baseClass = 'w-[180px] h-48 px-32 border rounded-8 ';
    let selectedClass = 'border-primary-red font-bold text-primary-red';
    let defaultClass = 'border-mediumGray';

    return baseClass + (selectedSpec === spec ? selectedClass : defaultClass);
  };

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
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected Image"
              roundedStyle="object-cover rounded-16"
              className="w-[636px] h-[338px]  border-4 border-primary-yellow rounded-20 mb-24 "
            />
          )}
          <ul className="flex gap-8 ">
            {detailProduct.productImages
              ?.slice(0, 5)
              .map((data: ProductImgType) => (
                <li key={uuidv4()} onClick={() => handleImageSelect(data.src)}>
                  <Image
                    src={data.src}
                    alt={data.alt}
                    roundedStyle="object-cover rounded-8"
                    className={getThumbnailClass(data.src)}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-6 ml-16">
          <div className="flex items-center gap-16 mb-8">
            <LogoImg classProps="w-32 h-32" />
            <h2 className=" text-primary-green">
              {detailProduct.productTitle}
            </h2>
          </div>
          <p className=" text-18 mb-16">{detailProduct.productDescription}</p>
          <div className=" mb-16">
            <p className=" text-primary-green text-16 font-bold ">優惠價</p>
            <div className="flex items-center gap-8">
              <h4 className="text-primary-red">
                $
                {selectedSpec === detailProduct.smallproductSpecId
                  ? detailProduct.smallPromotionPrice
                  : detailProduct.largePromotionPrice}
              </h4>
              <span className=" text-lightGray font-bold text-14 line-through">
                {selectedSpec === detailProduct.smallproductSpecId
                  ? detailProduct.smallOriginalPrice
                  : detailProduct.largeOriginalPrice}
              </span>
            </div>
          </div>

          <div className="mb-16">
            <p className=" text-primary-green text-16 font-bold mb-4">規格</p>
            <div className="flex gap-24">
              <button
                type="button"
                className={getButtonClass(detailProduct.smallproductSpecId)}
                onClick={() => selectSpec(detailProduct.smallproductSpecId)}>
                小份 ({detailProduct.smallWeight}斤)
              </button>
              <button
                type="button"
                className={getButtonClass(detailProduct.largeproductSpecId)}
                onClick={() => selectSpec(detailProduct.largeproductSpecId)}>
                大份 ({detailProduct.largeWeight}斤)
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
              showIcon={false}
              btnStyle="bg-white border-primary-red w-full flex justify-center items-center h-48"
              textStyle="text-primary-red"
              productId={detailProduct.productId}
              productSpecId={selectedSpec}
              cartItemQty={qty}>
              加入購物車
            </Button>
            <Button
              category="addCart"
              btnStyle="bg-primary-red border-white w-full flex justify-center items-center h-48 "
              textStyle="text-white"
              productId={detailProduct.productId}
              productSpecId={selectedSpec}
              cartItemQty={qty}
              toCart={true}>
              立即購買
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
