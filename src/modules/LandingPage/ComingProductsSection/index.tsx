import LinkToProduct from '@/common/components/LandingPage/LinkToProduct';
import Image from 'next/image';
import UpcomingProductsList from '../../../common/components/product/UpcomingProducts/UpcomingProductsList';
const ComingProductsSection = () => {
  return (
    <section className="container pt-80 pb-120">
      <div className="grid grid-cols-12 gap-24">
        <div className=" col-start-2 col-end-4">
          <div className=" writing-mode-vertical-lr mb-36">
            <h2 className=" text-primary-red mr-24">即 將 到 來</h2>
            <p className="text-32 leading-[60px]">
              特 別 為 您 準 備<br />最 優 惠 的 直 播 驚 喜
            </p>
            <p></p>
          </div>
          <Image
            src="/images/home/live/liveComingLogo.png"
            alt="liveComingLogo"
            width={276}
            height={276}
            className="w-[276px] h-[276px] object-cover"
          />
        </div>
        <UpcomingProductsList />
        <LinkToProduct path="/livestream" text="直播一覽" />
      </div>
    </section>
  );
};

export default ComingProductsSection;
