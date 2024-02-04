import Image from 'next/image';
import { icons, swiperSet } from './data';
import LogoImg from '../Logo/LogoImg';
import GlobalLink from '../GlobalLink';
import HomeSwiper from '../HomeSwiper';
import DashBoardFooter from './DashBoardFooter';
import { grassMotionSet } from '../LandingPage/banner/data';
import CustomImage from '../CustomImage';

type FooterProps = {
  gapClassSyle: string;
  pageCategory: string;
};
const Footer = ({ gapClassSyle, pageCategory }: FooterProps) => {
  const { grassMotionLeft, grassMotionRight } = grassMotionSet;
  const swierShow = swiperSet[pageCategory] ? '' : 'hidden';
  if (pageCategory === 'dashboardPage' || pageCategory === 'personInfoPage') {
    return <DashBoardFooter />;
  }
  return (
    <>
      <HomeSwiper imgData="farmerDatas" classStyle={swierShow} />
      <footer className={`bg-white ${gapClassSyle} flex-shrink-0`}>
        <ul className="flex  items-end justify-between">
          <li>
            <CustomImage
              src={grassMotionLeft.src}
              alt={grassMotionLeft.alt}
              width={489}
              height={136}
              className=" self-end w-full"
            />
          </li>
          <li className="text-primary-green flex flex-col items-center mb-40">
            <LogoImg widthProps={32} heightProps={32} classProps="mb-8" />
            <h3>搶鮮購</h3>
            <p className=" text-14 py-8">freshgrab@contact.com</p>
            <ul className="flex gap-16">
              {icons.map((icon) => (
                <li key={icon.alt}>
                  <GlobalLink href={icon.path} openInNewTab={true}>
                    <CustomImage
                      src={icon.src}
                      alt={`Follow us on ${icon.alt}`}
                      width={40}
                      height={40}
                      className=" hover:opacity-80 w-40 h-40"
                    />
                  </GlobalLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <CustomImage
              src={grassMotionRight.src}
              alt={grassMotionRight.alt}
              width={489}
              height={136}
              className="w-[489px] "
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
