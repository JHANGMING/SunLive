import Image from '@/common/components/CustomImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { bannerImgData, grassMotionSet } from './data';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import BannerTitle from './BannerTitle';
import SearchInput from '../../Input/SearchInput';
const Banner = () => {
  const { grassMotionLeft, grassMotionRight } = grassMotionSet;
  return (
    <section className="relative mb-24 lg:mb-120">
      <div className="hidden  absolute top-1/2 left-1/2 z-10 text-center transform -translate-x-1/2 -translate-y-1/2 lg:flex flex-col gap-16">
        <BannerTitle />
        <SearchInput />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={4000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="bannerSwiper flex items-center justify-center">
        {bannerImgData.map((data) => (
          <SwiperSlide key={data.alt}>
            {({ isVisible }) => (
              <Image
                src={data.src}
                alt={data.alt}
                roundedStyle="w-full object-cover"
                priority={true}
                className={`h-[335px] lg:h-[600px] object-cover transition-transform duration-[25000ms] ease-in-out ${isVisible ? 'scale-125' : 'scale-110'}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-[11px] lg:-bottom-1 left-0 z-10">
        <Image
          src={grassMotionLeft.src}
          alt={grassMotionLeft.alt}
          className="w-[174px] h-[66px] lg:w-[546px] lg:h-[136px] "
        />
      </div>
      <div className="absolute -bottom-[11px] right-0 z-10">
        <Image
          src={grassMotionRight.src}
          alt={grassMotionRight.alt}
          className="w-[174px] h-[66px] lg:w-[489px] lg:h-[136px] "
        />
      </div>
    </section>
  );
};

export default Banner;
