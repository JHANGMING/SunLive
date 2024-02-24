
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import YoutubeLiveIfram from '../LandingPage/LivingShowSection/YoutubeLiveLink';
import { LivestreamingProps } from './data';
import ChatAndProduct from './ChatAndProduct';
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
    // <div className="col-span-4 border border-lightGray rounded-16 flex flex-col">
    //   <h6 className="font-normal p-16 border-b border-lightGray">
    //     重點聊天室訊息
    //   </h6>
    //   {/* 聊天室 */}
    //   <div className="p-24 ">
    //     <div className=" bg-SoftGray rounded-20 p-16 flex gap-20 mb-16">
    //       <Image
    //         src={
    //           liveDetailData?.topProductPhoto
    //             ? liveDetailData?.topProductPhoto
    //             : '/images/home/live/liveComingImg1.png'
    //         }
    //         alt="liveComingImg"
    //         className="w-80 h-80"
    //         roundedStyle="rounded-20 object-cover"
    //       />
    //       <div className="text-darkGray flex flex-col gap-8 w-full">
    //         <div className=" flex gap-8 items-center">
    //           <h4 className="text-16">{liveDetailData?.topProductName}</h4>
    //           <h5 className=" text-mediumGray text-14 font-normal">
    //             <span>NT$</span>
    //             {liveDetailData?.topProductLivePrice}
    //           </h5>
    //         </div>
    //         <p className="">
    //           剩餘{' '}
    //           <span className=" text-primary-red text-24 font-bold shiny-scale-effect">
    //             {liveDetailData?.topProductStock}
    //           </span>{' '}
    //           組
    //         </p>
    //         <GlobalLink
    //           href="/cart"
    //           openInNewTab={
    //             liveDetailData?.topProductStock === 0 ? false : true
    //           }
    //           isDisabled={liveDetailData?.topProductStock === 0}
    //           className={` text-white w-full rounded-8 text-center  ${liveDetailData?.topProductStock === 0 ? 'bg-darkGray cursor-not-allowed' : 'bg-primary-red cursor-pointer hover:opacity-60'}`}
    //           productSpecId={liveDetailData?.topSpecId}
    //           productId={liveDetailData?.topProductId}
    //           liveId={liveDetailData?.liveId}>
    //           {liveDetailData?.topProductStock === 0
    //             ? '已賣光光'
    //             : '加入購物車'}
    //         </GlobalLink>
    //       </div>
    //     </div>
    //   </div>
    //   <LiveChat liveId={liveId} liveFarmerId={liveFarmerId} />
    // </div>

    // </section>
  );
};

export default LiveViewer;
