import Image from 'next/image';
import CategoryTitle from '../ProductPage/CategoryTitle';
import { liveCardData } from './data';

const LiveProductSection = () => {
  return (
    <section className="pt-120 pb-85 mb-135 bg-liveStreamBG bg-repeat-x bg-bottom">
      <div className="container">
        <CategoryTitle title="當月直播" gapStyle="mb-40" />
        <ul className="grid grid-cols-12 gap-x-24 gap-y-80">
          {liveCardData.map((data) => (
            <li
              key={data.productImg.alt}
              className=" col-span-4 border-4 border-mediumGray rounded-20">
              <div className=" relative">
                <Image
                  src={data.productImg.src}
                  alt={data.productImg.alt}
                  width={416}
                  height={480}
                  className="w-[416px] h-[480px] rounded-16"
                />
                <Image
                  src="/images/home/live/UpcomingIcon.svg"
                  alt="UpcomingIcon"
                  width={120}
                  height={120}
                  className="absolute left-0 top-0"
                />
                <div className="bg-black/20 absolute left-0 top-0 w-full h-full rounded-16"></div>
                <div className="absolute left-0 bottom-0 w-full py-16 gap-8  opacity-80 flex flex-col items-center rounded-bl-20 rounded-br-20 bg-white/90">
                  <h4 className=" text-primary-green">{data.title}</h4>
                  <h6 className=" font-normal">
                    <span>小農</span>
                    {data.farmerName}
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
