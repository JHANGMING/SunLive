
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import { LivestreamingProps } from './data';
import ChatAndProduct from './ChatAndProduct';
import YoutubeLiveIfram from '../LandingPage/LivingShowSection/YoutubeLiveLink';
const LiveViewer = ({ liveDetailData }: LivestreamingProps) => {
  const url=liveDetailData?.yturl;
  const liveId = liveDetailData?.liveId;
  const liveFarmerId=liveDetailData?.liveFarmerId;  
  return (
    <section className="container grid grid-cols-12 gap-24 -mt-[180px] pb-[144px]">
      <div className=" col-span-8">
        <YoutubeLiveIfram isViewPage={true} url={url} />
        <div className="pt-24 flex flex-col gap-16">
          <h2 className="text-24">
            {liveDetailData?.liveName}
            <span>- 特價直播</span>
          </h2>
          <div className="flex items-center gap-8">
            <Image
              src={
                liveDetailData?.liveFarmerPic
                  ? liveDetailData?.liveFarmerPic
                  : '/images/home/live/liveComingPerson1.png'
              }
              alt="liveComingPerson1"
              className="w-40 h-40"
              roundedStyle="rounded-full object-cover"
            />
            <h3 className=" text-16 font-normal">
              {liveDetailData?.liveFarmer}
            </h3>
          </div>
          <div className=" bg-primary-yellow py-24 pl-24 pr-60 rounded-20">
            <div className="flex items-center gap-16 mb-16">
              <LogoImg classProps="w-24 h-24" />
              <p className="font-bold">
                直播時間 :<span>{liveDetailData?.liveDate}</span>
              </p>
            </div>
            <p>{liveDetailData?.liveDescription}</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 border border-lightGray rounded-16 flex flex-col">
        <ChatAndProduct
          liveDetailData={liveDetailData}
          liveId={liveId}
          liveFarmerId={liveFarmerId}
        />
      </div>
    </section>
  );
};

export default LiveViewer;
