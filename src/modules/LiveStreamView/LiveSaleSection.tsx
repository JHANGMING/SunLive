import Link from 'next/link';
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import GlobalLink from '@/common/components/GlobalLink';
import { LivestreamingProps } from './data';
import CategoryTitle from '../ProductPage/CategoryTitle';

const LiveSaleSection = ({ liveDetailData }: LivestreamingProps) => {
  const liveData = liveDetailData?.liveProductList;
  return (
    <section className=" bg-lightWhite pt-60 pb-[113px]">
      <div className="container relative">
        <CategoryTitle title="直播商品" gapStyle="mb-40" />
        <ul className="grid grid-cols-12 gap-24">
          {liveData?.map((data, index) => (
            <li
              key={data.productId}
              className="flex flex-col col-span-3 relative">
              <Link
                href={`/productshop/${data.productId}`}
                className=" relative mb-24 border-4 rounded-20 border-primary-yellow">
                <Image
                  src={data.productPhoto}
                  alt={data.productName}
                  roundedStyle="rounded-16 object-cover w-full h-full"
                  className=" h-[284px] rounded-16 hover:opacity-60"
                />
                <h4
                  className={`absolute left-0 bottom-0  w-full opacity-80 flex justify-center items-center rounded-bl-16 rounded-br-16  text-primary-green bg-white/90 ${data?.productStock === 0 ? 'h-full rounded-16' : 'py-16'}`}>
                  剩餘
                  <span className=" text-primary-red mx-8 shiny-scale-effect">
                    {data.productStock}
                  </span>
                  組
                </h4>
              </Link>
              <Link
                href={`/productshop/${data.productId}`}
                className="flex gap-16 justify-center mb-16">
                <LogoImg classProps="w-32 h-32 group-shake" />
                <h3 className="text-primary-green hover:opacity-80">
                  {data.productName}
                </h3>
              </Link>
              <div className="flex flex-col items-center gap-16 ">
                <div className="flex gap-8 items-center">
                  <p className="text-mediumGray py-6 px-20 rounded-8 border text-center font-bold">
                    價格
                  </p>
                  <h4 className=" text-primary-red">{data.productLivePrice}</h4>
                  <span className="text-18 line-through text-lightGray">
                    {data.productOriginPrice}
                  </span>
                </div>
                <GlobalLink
                  href="/cart"
                  category="liveAddCart"
                  openInNewTab={data?.productStock === 0 ? false : true}
                  isDisabled={data?.productStock === 0}
                  className={` text-white w-full rounded-8 text-center  ${
                    data?.productStock === 0
                      ? 'bg-darkGray cursor-not-allowed'
                      : 'bg-primary-red cursor-pointer hover:opacity-60'
                  }`}
                  productSpecId={data?.specId}
                  productId={data?.productId}
                  liveId={liveDetailData?.liveId}>
                  {data?.productStock === 0 ? '已賣光光' : '加入購物車'}
                </GlobalLink>
              </div>
              {index === liveData.length - 1 && (
                <div className="absolute right-[28px] top-40 z-10 transform translate-x-full -translate-y-full">
                  <Image
                    src="/images/liveStream/limitTimeSale_view.svg"
                    alt="limitTimeSale_view"
                    className="w-[133px] h-[134px]"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LiveSaleSection;
