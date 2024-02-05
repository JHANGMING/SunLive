import Image from '@/common/components/CustomImage';
import { icons, swiperSet } from './data';
import LogoImg from '../Logo/LogoImg';
import GlobalLink from '../GlobalLink';
import HomeSwiper from '../HomeSwiper';
import DashBoardFooter from './DashBoardFooter';
import { grassMotionSet } from '../LandingPage/banner/data';


type FooterProps = {
  gapClassSyle: string | undefined;
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
            <Image
              src={grassMotionLeft.src}
              alt={grassMotionLeft.alt}
              className=" self-end w-[489px] h-[136px]"
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
