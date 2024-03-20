import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BsHandIndex } from 'react-icons/bs';
import { RootState } from '@/redux/store';
import Image from '@/components/CustomImage';
import LivingProduct from './LivingProduct';
import { LivingShowSectionProps } from './data';
import YoutubeLiveIfram from './YoutubeLiveLink';

const LivingShowSection = ({ isLivePage = false }: LivingShowSectionProps) => {
  const { liveData } = useSelector((state: RootState) => state.product);
  const living = liveData?.message !== '沒有直播';
  const sectionStyle = isLivePage && '-mt-[180px] bg-white';

  return (
    <>
      <section className="lg:hidden">
        <ul className="container flex flex-col items-center">
          <li className="mb-42">
            <LivingProduct living={living} liveData={liveData} />
          </li>
          <li className="mb-24">
            <YoutubeLiveIfram isLivePage={isLivePage} />
          </li>
        </ul>
        <div className="bg-liveBG_small bg-repeat-x bg-bottom py-24">
          <div className="px-27 relative flex flex-col items-center">
            <p className="text-12 lg:text-16 text-white w-[257px] lg:w-full mb-24">
              「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」
            </p>
            <Link
              href="/livestream/view"
              className="shiny-button text-primary-red bg-white py-8 px-16 lg:py-16 lg:px-24 flex rounded-20 items-center gap-8 lg:gap-16 border border-dashed border-primary-red hover:outline hover:outline-8 hover:outline-white group"
            >
              <BsHandIndex className=" rotate-90 w-20 h-20 lg:w-24 lg:h-24 transition-transform group-hover:translate-x-4 group-hover:text-mediumGray" />
              <h4 className="text-14 lg:text-24 group-hover:text-mediumGray">
                {living ? '立刻加入直播' : '查看更多'}
              </h4>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={`hidden bg-liveBG bg-repeat-x bg-bottom lg:flex h-[528px] ${sectionStyle} `}
      >
        <ul className="hidden container lg:grid grid-cols-12 gap-24 mb-46">
          <li className=" col-span-6">
            <YoutubeLiveIfram isLivePage={isLivePage} />
          </li>
          <li className=" col-span-6">
            <div className="grid grid-cols-6 gap-y-116 gap-x-24">
              <LivingProduct living={living} liveData={liveData} />
              <div className="col-span-6 px-27 relative flex flex-col items-center">
                <div className="absolute -top-155 right-0">
                  <Image
                    src="/images/home/live/limitTimeSale.svg"
                    alt="limitTimeSale"
                    className="w-[138px] h-[138px] "
                  />
                </div>
                <p className="text-white mb-24">
                  「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」
                </p>
                <Link
                  href={
                    living
                      ? `/livestream/${liveData?.data?.liveId}`
                      : '/productshop'
                  }
                  className="outline-offset shiny-button text-primary-red bg-white py-16 px-24 flex rounded-20 items-center gap-16 border border-dashed border-primary-red hover:outline hover:outline-8 hover:outline-white group"
                >
                  <BsHandIndex className=" rotate-90 w-24 h-24 transition-transform group-hover:translate-x-4 group-hover:text-mediumGray" />
                  <h4 className="group-hover:text-mediumGray">
                    {living ? '立刻加入直播' : '查看更多'}
                  </h4>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LivingShowSection;
