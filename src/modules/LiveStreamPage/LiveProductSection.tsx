import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from '@/common/components/CustomImage';
import CategoryTitle from '../ProductPage/CategoryTitle';

const LiveProductSection = () => {
  const { liveData } = useSelector((state: RootState) => state.product);
  const upcomingLive = liveData?.data?.upcomingLive;
  return (
    <section className="pt-120 pb-85 mb-135 bg-liveStreamBG bg-repeat-x bg-bottom">
      <div className="container">
        <CategoryTitle title="近期直播" gapStyle="mb-40" />
        <ul className="grid grid-cols-12 gap-x-24 gap-y-80">
          {upcomingLive?.slice(0, 6).map((data) => (
            <li
              key={data.liveId}
              className=" col-span-4 border-4 border-mediumGray rounded-20">
              <div className=" relative">
                <Image
                  src={
                    data.livePic === null
                      ? '/images/productShop/discountedImg3.png'
                      : data.livePic
                  }
                  alt={`data.liveProductId-${data.liveId}`}
                  roundedStyle="rounded-16 h-full w-full object-cover"
                  className="w-full h-[480px]"
                />

                <div className="absolute left-0 top-0">
                  <Image
                    src="/images/home/live/UpcomingIcon.svg"
                    alt="UpcomingIcon"
                    className="w-120 h-120 "
                  />
                </div>
                <div className="bg-black/20 absolute left-0 top-0 w-full h-full rounded-16"></div>
                <div className="absolute left-0 bottom-0 w-full py-16 gap-8  opacity-80 flex flex-col items-center rounded-bl-20 rounded-br-20 bg-white/90">
                  <h4 className=" text-primary-green">
                    {data.liveProductName}
                  </h4>
                  <h6 className=" font-normal">
                    <span>小農</span>
                    {data.liveFarmer}
                  </h6>
                  <p>{data.liveTime}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LiveProductSection;
