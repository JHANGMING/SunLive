import { BsStars } from 'react-icons/bs';
import LiveIcon from '@/components/Header/LIveIcon';
import { LivingProductProps } from './data';

const LivingProduct = ({ living, liveData }: LivingProductProps) => {
  const upcomingLive = liveData?.data?.upcomingLive[0];
  return (
    <div className="col-span-5 flex flex-col gap-y-8 lg:gap-y-16 items-center relative">
      <div className=" absolute -top-50 -right-20 animate-scale-bounce z-20">
        <LiveIcon size={100} isLivingSection />
      </div>
      <div className="animate-scale-bounce absolute -top-16 -right-80 text-primary-yellow">
        <BsStars size={50} />
      </div>
      <div className="animate-scale-bounce absolute -top-50 right-80 text-primary-yellow">
        <BsStars size={50} />
      </div>
      <h2 className="text-20 lg:text-32 text-primary-red">
        {living ? '正在進行的小農直播' : '即將到來的小農直播'}
      </h2>
      <h3 className="text-14 lg:text-28 text-primary-green ">
        {living
          ? liveData?.data?.liveProductName
          : upcomingLive?.liveProductName}
      </h3>
      <div className="flex gap-x-8 lg:gap-x-16 items-center">
        {living ? (
          <>
            <p className="text-12 lg:text-16 lg:font-bold bg-primary-red text-white px-16 rounded-[8px] h-32 flex justify-center items-center">
              直播優惠價
            </p>
            <h4 className="text-14 lg:text-28 text-primary-red">
              <span>$</span>
              {' '}
              {liveData?.data?.livePrice}
            </h4>
          </>
        ) : (
          <h4 className="text-14 lg:text-28 text-primary-red">
            {upcomingLive?.liveTime}
          </h4>
        )}
      </div>
    </div>
  );
};

export default LivingProduct;
