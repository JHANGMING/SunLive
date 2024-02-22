import Image from '@/common/components/CustomImage';
import GlobalLink from '@/common/components/GlobalLink';
import LiveChat from './LiveChat';
import { ChatAndProductPorps } from './data';

const ChatAndProduct = ({ liveDetailData, liveId, liveFarmerId,isFarmer=false  }:ChatAndProductPorps) => {
  return (
    <>
      <h6 className="font-normal p-16 border-b border-lightGray">
        重點聊天室訊息
      </h6>
      {/* 聊天室 */}
      <div className={`${isFarmer ? 'px-24 py-8' : 'p-24'}`}>
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
      <LiveChat liveId={liveId} liveFarmerId={liveFarmerId} />
    </>
  );
};

export default ChatAndProduct;
