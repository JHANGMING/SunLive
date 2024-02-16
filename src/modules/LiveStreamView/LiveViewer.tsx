
import Image from '@/common/components/CustomImage';
import GlobalLink from '@/common/components/GlobalLink';
import LogoImg from '@/common/components/Logo/LogoImg';
import YoutubeLiveIfram from '../LandingPage/LivingShowSection/YoutubeLiveLink';
import LiveChat from './LiveChat';
const LiveViewer = () => {
  return (
    <section className="container grid grid-cols-12 gap-24 -mt-[180px] pb-[144px]">
      <div className=" col-span-8">
        <YoutubeLiveIfram isViewPage={true} />
        <div className="pt-24 flex flex-col gap-16">
          <h2 className="text-24">
            陽光甘醇有機蕃茄<span>- 特價直播</span>
          </h2>
          <div className="flex items-center gap-8">
            <Image
              src="/images/home/live/liveComingPerson1.png"
              alt="liveComingPerson1"
              className="w-40 h-40"
            />
            <h3 className=" text-16 font-normal">黃小翰</h3>
          </div>
          <div className=" bg-primary-yellow py-24 pl-24 pr-60 rounded-20">
            <div className="flex items-center gap-16 mb-16">
              <LogoImg classProps="w-24 h-24" />
              <p className="font-bold">
                直播時間 :<span>2024.1.16 (二)</span>
              </p>
            </div>
            <p>
              「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-4 border border-lightGray rounded-16 flex flex-col">
        <h6 className="font-normal p-16 border-b border-lightGray">
          重點聊天室訊息
        </h6>
        {/* 聊天室 */}
        <div className="p-24 ">
          <div className=" bg-SoftGray rounded-20 p-16 flex gap-20 mb-16">
            <Image
              src="/images/home/live/liveComingImg1.png"
              alt="liveComingImg"
              className="w-80 h-80"
            />
            <div className="text-darkGray flex flex-col gap-8 w-full">
              <div className=" flex gap-8 items-center">
                <h4 className="text-16">夢幻柳橙夏悠</h4>
                <h5 className=" text-mediumGray text-14 font-normal">
                  <span>NT$</span>250
                </h5>
              </div>
              <p className="">
                剩餘{' '}
                <span className=" text-primary-red text-24 font-bold shiny-scale-effect">
                  50
                </span>{' '}
                組
              </p>
              <GlobalLink
                href="/cart"
                openInNewTab={true}
                className="cursor-pointer bg-primary-red text-white w-full rounded-8 text-center hover:opacity-60 ">
                加入購物車
              </GlobalLink>
            </div>
          </div>
        </div>
        <LiveChat/>
      </div>
    </section>
  );
};

export default LiveViewer;
