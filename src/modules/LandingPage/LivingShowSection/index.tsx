import Image from 'next/image';
import Link from 'next/link';
import { BsHandIndex } from 'react-icons/bs';
import LivingProduct from './LivingProduct';
import YoutubeLiveIfram from './YoutubeLiveLink';

type LivingShowSectionProps = {
  isLivePage?: boolean;
};
const LivingShowSection = ({ isLivePage = false }: LivingShowSectionProps) => {
  const sectionStyle = isLivePage && '-mt-[180px] bg-white';
  return (
    <section
      className={`bg-liveBG bg-repeat-x bg-bottom flex h-[528px] ${sectionStyle} `}>
      <ul className="container grid grid-cols-12 gap-24 mb-46">
        <li className=" col-span-6">
          {/* <Image
            src="/images/home/live/liveShow.png"
            alt="liveShow"
            width={636}
            height={482}
            className="h-[482px]"
          /> */}
          <YoutubeLiveIfram isLivePage={isLivePage} />
          {/* <LogoImg
            widthProps={50}
            heightProps={50}
            classProps="absolute left-1/2 -top-35 logo-shake"
          /> */}
        </li>
        <li className=" col-span-6">
          <div className="grid grid-cols-6 gap-y-116 gap-x-24">
            <LivingProduct />
            <div className="col-span-6 px-27 relative flex flex-col items-center">
              <Image
                src="/images/home/live/limitTimeSale.svg"
                alt="limitTimeSale"
                width={138}
                height={138}
                className=" absolute -top-155 right-0"
              />
              <p className="text-white mb-24">
                「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」
              </p>
              <Link
                href="/livestream/view"
                className="shiny-button text-primary-red bg-white py-16 px-24 flex rounded-[20px] items-center gap-16 border border-dashed border-primary-red hover:outline hover:outline-8 hover:outline-white group">
                <BsHandIndex className=" rotate-90 w-24 h-24 transition-transform group-hover:translate-x-4 group-hover:text-mediumGray" />
                <h4 className="group-hover:text-mediumGray">立刻加入直播</h4>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default LivingShowSection;
