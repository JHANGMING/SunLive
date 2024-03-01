import Image from '@/common/components/CustomImage';
import { LiveProductItemType } from '@/constants/types/live/live';

const UpcomingProduct = ({ ...data }: LiveProductItemType) => {
  const {
    liveId,
    livePic,
    liveTime,
    livePrice,
    classStyle,
    liveFarmerPic,
    liveProductName,
  } = data;

  return (
    <li className={`flex gap-24 ${classStyle}`}>
      <div className=" relative">
        <Image
          src={livePic === null ? '/images/product/product1.png' : livePic}
          alt={`liveProductName-${liveId}`}
          roundedStyle="object-cover rounded-20"
          className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px] w-[240px] opacity-60"
        />
        <div className=" absolute left-0 top-0">
          <Image
            src="/images/home/live/UpcomingIcon.svg"
            alt="UpcomingIcon"
            className="w-80 h-80"
          />
        </div>
      </div>
      <div className="flex flex-col gap-24">
        <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">
          $ {livePrice}
        </p>
        <h5 className="border-b border-black font-bold text-mediumGray">
          {liveProductName}
        </h5>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 items-center">
            <Image
              src={
                liveFarmerPic === null
                  ? '/images/home/live/liveComingPerson1.png'
                  : liveFarmerPic
              }
              alt={`liveFarmer-${liveId}`}
              roundedStyle="object-cover rounded-full"
              className="w-40 h-40"
            />
            <p className=" text-primary-green">{liveProductName}</p>
          </div>
          <time className="text-primary-green">{liveTime}</time>
        </div>
      </div>
    </li>
  );
};

export default UpcomingProduct;
