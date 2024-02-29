import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from '@/common/components/CustomImage';
import GlobalLink from '@/common/components/GlobalLink';
import LiveChat from './LiveChat';
import { ChatAndProductPorps } from './data';

const LiveChatCountdownWithNoSSR = dynamic(
  () => import('./LiveChatCountdown'),
  { ssr: false }
);

const ChatAndProduct = ({
  liveDetailData,
  liveId,
  liveFarmerId,
  isFarmer = false,
}: ChatAndProductPorps) => {
  const endTime = liveDetailData?.endTime;
  const [viewerCount, setViewerCount] = useState(0);
  const [prevCount, setPrevCount] = useState(viewerCount);
  const prevCountString = String(prevCount);
  useEffect(() => {
    if (viewerCount !== prevCount) {
      setPrevCount(viewerCount);
    }
  }, [viewerCount, prevCount]);
  return (
    <>
      <div className="flex items-center justify-between border-b border-lightGray">
        <h6 className="font-normal p-16 ">重點聊天室訊息</h6>
        <div className="flex items-center p-16 gap-8">
          {String(viewerCount)
            .split('')
            .map((num, index) => {
              const flip = prevCountString[index] === num;
              return (
                <div
                  key={index}
                  className={`bg-SoftGray text-mediumGray font-bold px-4 ${flip ? 'flip-animation' : ''}`}>
                  {num}
                </div>
              );
            })}
          <div className="text-darkGray">人正在觀看</div>
        </div>
      </div>
      <LiveChatCountdownWithNoSSR endTime={endTime} />
      {/* 聊天室 */}
      <div className={`${isFarmer ? 'px-24 py-8' : 'px-24 py-16'}`}>
        <div
          className={` bg-SoftGray rounded-20  flex gap-20 ${isFarmer ? 'px-16 py-8' : 'p-16'}`}>
          <Image
            src={
              liveDetailData?.topProductPhoto
                ? liveDetailData?.topProductPhoto
                : '/images/home/live/liveComingImg1.png'
            }
            alt="liveComingImg"
            className="w-80 h-80"
            roundedStyle="rounded-20 object-cover"
          />

          <div className="text-darkGray flex flex-col gap-8 w-full">
            <div className=" flex gap-8 items-center">
              <h4 className="text-16">{liveDetailData?.topProductName}</h4>
              {isFarmer || (
                <h5 className=" text-mediumGray text-14 font-normal">
                  <span>NT$</span>
                  {liveDetailData?.topProductLivePrice}
                </h5>
              )}
            </div>
            <p className="">
              剩餘{' '}
              <span className=" text-primary-red text-24 font-bold shiny-scale-effect">
                {liveDetailData?.topProductStock}
              </span>{' '}
              組
            </p>
            {isFarmer && (
              <h5 className=" text-mediumGray text-14 font-normal">
                <span>NT$</span>
                {liveDetailData?.topProductLivePrice}
              </h5>
            )}
            {isFarmer || (
              <GlobalLink
                href="/cart"
                openInNewTab={
                  liveDetailData?.topProductStock === 0 ? false : true
                }
                isDisabled={liveDetailData?.topProductStock === 0}
                className={` text-white w-full rounded-8 text-center  ${liveDetailData?.topProductStock === 0 ? 'bg-darkGray cursor-not-allowed' : 'bg-primary-red cursor-pointer hover:opacity-60'}`}
                productSpecId={liveDetailData?.topSpecId}
                productId={liveDetailData?.topProductId}
                liveId={liveDetailData?.liveId}>
                {liveDetailData?.topProductStock === 0
                  ? '已賣光光'
                  : '加入購物車'}
              </GlobalLink>
            )}
          </div>
        </div>
      </div>
      <LiveChat
        liveId={liveId}
        liveFarmerId={liveFarmerId}
        setViewerCount={setViewerCount}
      />
    </>
  );
};

export default ChatAndProduct;
