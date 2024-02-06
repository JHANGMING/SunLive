import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from '@/common/components/CustomImage';
import Button from '../Button';
import { ProductCardProps } from './data';
import LogoImg from '@/common/components/Logo/LogoImg';

const ProductCard = ({
  productImg,
  title,
  des,
  originalPrice,
  salePrice,
  label,
  labelStyle,
  imgBorderStyle,
  priceBorderStyle,
  originalPriceStyle,
  cardGapThreeCol = true,
  buttonAtBottom = false,
}: ProductCardProps) => {
  const priceBorderClass =
    priceBorderStyle === 'white' ? 'border-white' : 'border-lightGray';
  const originalPriceClass =
    originalPriceStyle === 'white' ? 'text-white' : 'text-lightGray';
  const cardGapStyle = cardGapThreeCol
    ? 'col-span-2 lg:col-span-4'
    : 'col-span-3';
  const cardTitleStyle = cardGapThreeCol || 'text-24';
  const [animation, setAnimation] = useState('product-card-enter');

  useEffect(() => {
    setAnimation('product-card-enter-active');

    return () => {
      setAnimation('product-card-exit-active');
    };
  }, []);
  return (
    <li className={`${cardGapStyle} flex flex-col ${animation}`}>
      <div className="group flex flex-col gap-4 lg:gap-16">
        <Link href="/productshop/11" className=" relative">
          <div className="flex justify-center">
          <Image
            src={productImg.src}
            alt={productImg.alt}
            roundedStyle='rounded-20 h-full'
            className={`w-[148px] h-[136px] lg:w-[416px] lg:h-[381px]  hover:opacity-60 border-dashed border-2 rounded-20 transition duration-800 ease-in-out ${imgBorderStyle}`}
          />
          </div>
          {label && (
            <h4
              className={`absolute left-0 bottom-0 w-full  h-60 opacity-80 flex justify-center items-center rounded-bl-20 rounded-br-20 ${labelStyle}`}>
              {label}
            </h4>
          )}
        </Link>

        <Link
          href="/productshop/11"
          className="flex gap-8 lg:gap-16 justify-center mb-4 lg:mb-8">
          <LogoImg classProps="w-20 h-20 lg:w-32 lg:h-32 group-shake" />
          <h3
            className={`text-14 lg:text-28 text-primary-green hover:opacity-80 ${cardTitleStyle}`}>
            {title}
          </h3>
        </Link>
      </div>

      {!buttonAtBottom && <p className="text-[10px] lg:text-16 lg:px-24 flex-grow mb-8 lg:mb-16">{des}</p>}

      <div
        className={`${buttonAtBottom ? 'flex flex-col items-center gap-16' : 'flex justify-between'} lg:px-24`}>
        <div className="flex gap-6 lg:gap-8 items-center">
          <p
            className={`hidden lg:block text-mediumGray py-6 px-20 rounded-8 border text-center font-bold ${priceBorderClass}`}>
            價格
          </p>
          <h4 className=" text-primary-red text-12 lg:text-24"><span className='lg:hidden'>$</span>{salePrice}</h4>
          <span className={`text-[10px] lg:text-18 line-through ${originalPriceClass}`}>
            {originalPrice}
          </span>
        </div>

        <Button
          category="addCart"
          btnStyle={`${buttonAtBottom ? 'w-full flex justify-center bg-primary-red border-white' : 'bg-primary-red border-white'}`}
          textStyle="text-white">
          加入購物車
        </Button>
      </div>
    </li>
  );
};

export default ProductCard;
