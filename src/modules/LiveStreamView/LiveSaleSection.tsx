import Image from 'next/image';
import CategoryTitle from '../ProductPage/CategoryTitle';
import LogoImg from '@/common/components/Logo/LogoImg';
import Button from '@/common/components/Button';
import { liveCardData } from './data';

const LiveSaleSection = () => {
  return (
    <section className=" bg-lightWhite pt-60 pb-[113px]">
      <div className="container relative">
        <CategoryTitle title="直播商品" gapStyle="mb-40" />
        <Image
          src="/images/liveStream/limitTimeSale_view.svg"
          alt="limitTimeSale_view"
          width={133}
          height={134}
          className=" absolute right-8 top-8 z-10"
        />
        <ul className="grid grid-cols-12 gap-24">
          {liveCardData.map((data) => (
            <li key={data.title} className="flex flex-col col-span-3">
              <div className=" relative mb-24 border-4 rounded-20 border-primary-yellow">
                <Image
                  src={data.productImg.src}
                  alt={data.productImg.alt}
                  width={306}
                  height={284}
                  className="w-[306px] h-[284px] rounded-16"
                />
                <h4 className="absolute left-0 bottom-0 py-16 w-full opacity-80 flex justify-center items-center rounded-bl-16 rounded-br-16 bg-white/90 text-primary-green">
                  剩餘
                  <span className=" text-primary-red mx-8 shiny-scale-effect">
                    {data.qty}
                  </span>
                  組
                </h4>
              </div>

              <div className="flex gap-16 justify-center mb-16">
                <LogoImg
                  widthProps={32}
                  heightProps={32}
                  classProps="w-32 h-32"
                />
                <h3 className="text-primary-green">{data.title}</h3>
              </div>

              <div className="flex flex-col items-center gap-16 px-24">
                <div className="flex gap-8 items-center">
                  <p className="text-mediumGray py-6 px-20 rounded-8 border text-center font-bold">
                    價格
                  </p>
                  <h4 className=" text-primary-red">{data.salePrice}</h4>
                  <span className="text-18 line-through text-lightGray">
                    {data.originalPrice}
                  </span>
                </div>

                <Button
                  category="addCart"
                  btnStyle={`w-full flex justify-center  ${data.qty === 0 ? 'bg-darkGray' : 'bg-primary-red'} border-white`}
                  textStyle="text-white"
                  disabled={data.qty === 0 && true}>
                  {data.qty === 0 ? '已賣光光' : '加入購物車'}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LiveSaleSection;
