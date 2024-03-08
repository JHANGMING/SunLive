import { v4 as uuidv4 } from 'uuid';
import Image from '@/common/components/CustomImage';
import LogoImg from '../Logo/LogoImg';
import GlobalLink from '../GlobalLink';
import HomeSwiper from '../HomeSwiper';
import DashBoardFooter from './DashBoardFooter';
import { FooterProps, icons, swiperSet } from './data';
import { grassMotionSet } from '../LandingPage/banner/data';

const Footer = ({ gapClassSyle, pageCategory }: FooterProps) => {
  const swierShow = swiperSet[pageCategory] ? '' : 'hidden';
  const { grassMotionLeft, grassMotionRight } = grassMotionSet;
  if (pageCategory === 'dashboardPage' || pageCategory === 'personInfoPage') {
    return <DashBoardFooter />;
  }
  return (
    <>
      <HomeSwiper imgData="farmerDatas" classStyle={swierShow} />
      <footer className={`bg-white ${gapClassSyle} flex-shrink-0`}>
        <ul className="flex  items-end justify-between">
          <li>
            <Image
              src={grassMotionLeft.src}
              alt={grassMotionLeft.alt}
              className=" self-end w-[489px] h-[136px]"
            />
          </li>
          <li className="text-primary-green flex flex-col items-center mb-40">
            <div className="flex items-center justify-center gap-4 lg:block lg:text-center">
              <LogoImg classProps="w-24 h-24 lg:w-[32px] lg:h-[32px] lg:mx-auto lg:mb-8" />
              <Image
                src="/images/sunlive_logo.svg"
                alt="sunLive-logo"
                className="w-100 h-[42px]"
              />
            </div>
            <p className=" text-14 py-8 hidden lg:block">
              freshgrab@contact.com
            </p>
            <ul className="flex gap-16">
              {icons.map((icon) => (
                <li key={uuidv4()}>
                  <GlobalLink
                    href={icon.path}
                    openInNewTab={true}
                    category="footer">
                    <Image
                      src={icon.src}
                      alt={`Follow us on ${icon.alt}`}
                      className=" hover:opacity-80 w-40 h-40"
                    />
                  </GlobalLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Image
              src={grassMotionRight.src}
              alt={grassMotionRight.alt}
              className="w-[489px] h-[136px]"
            />
          </li>
        </ul>
        <p className=" bg-lightWhite text-center py-24">
          © 搶鮮購 - 線上直播搶購當季新鮮農產品
        </p>
      </footer>
    </>
  );
};

export default Footer;
