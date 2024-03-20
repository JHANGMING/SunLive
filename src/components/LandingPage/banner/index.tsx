import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from '@/components/CustomImage';
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
        centeredSlides
        speed={4000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="bannerSwiper flex items-center justify-center"
      >
        {bannerImgData.map((data) => (
          <SwiperSlide key={uuidv4()}>
            {({ isVisible }) => (
              <Image
                src={data.src}
                alt={data.alt}
                roundedStyle="w-full object-cover"
                priority
                className={`h-[335px] lg:h-[600px] object-cover transition-transform duration-[25000ms] ease-in-out ${isVisible ? 'scale-125' : 'scale-110'}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-[12px] lg:-bottom-1 left-0 z-10">
        <Image
          src={grassMotionLeft.src}
          alt={grassMotionLeft.alt}
          className="w-[174px] h-[66px] lg:w-[546px] lg:h-[136px] "
        />
      </div>
      <div className="absolute -bottom-[10px] lg:-bottom-1 right-0 z-10">
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
