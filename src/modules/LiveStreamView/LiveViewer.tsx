import Image from 'next/image';
import YoutubeLiveIfram from '../LandingPage/LivingShowSection/YoutubeLiveLink';
import GlobalLink from '@/common/components/GlobalLink';
import LogoImg from '@/common/components/Logo/LogoImg';
import { BsCursorFill } from 'react-icons/bs';
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
              width={40}
              height={40}
            />
            <h3 className=" text-16 font-normal">黃小翰</h3>
          </div>
          <div className=" bg-primary-yellow py-24 pl-24 pr-60 rounded-20">
            <div className="flex items-center gap-16 mb-16">
              <LogoImg widthProps={24} heightProps={24} />
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
      <div className="col-span-4 border border-lightGray rounded-16">
        <h6 className="font-normal p-16 border-b border-lightGray">
          重點聊天室訊息
        </h6>
        {/* 聊天室 */}
        <div className="p-24 h-[640px]">
          <div className=" bg-SoftGray rounded-20 p-16 flex gap-20 mb-16">
            <Image
              src="/images/home/live/liveComingImg1.png"
              alt="liveComingImg"
              width={80}
              height={80}
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
          <ul className="flex flex-col gap-16">
            <li className="flex items-center gap-16">
              <Image
                src="/images/liveStream/viewPerson2.png"
                alt="viewPerson2"
                width={24}
                height={24}
                className="w-24 h-24"
              />
              <h6 className="text-14 font-normal">Ann</h6>
              <p className="text-14">哈囉哈囉</p>
            </li>
            <li className="flex items-center gap-16">
              <Image
                src="/images/liveStream/viewPerson2.png"
                alt="viewPerson2"
                width={24}
                height={24}
                className="w-24 h-24"
              />
              <h6 className="text-14 font-normal">Ann</h6>
              <p className="text-14">哈囉哈囉</p>
            </li>
          </ul>
        </div>
        <div className="border-t border-lightGray p-24 gap-16 flex items-center justify-between">
          <Image
            src="/images/liveStream/viewPerson1.png"
            alt="viewPerson1"
            width={24}
            height={24}
            className="w-24 h-24"
          />
          <input
            type="text"
            placeholder="輸入聊天訊息 ..."
            className=" text-darkGray bg-SoftGray py-8 pl-16 rounded-8 w-[287px] focus-visible:outline-none "
          />
          <BsCursorFill
            size={24}
            className=" text-primary-red cursor-pointer hover:opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveViewer;
