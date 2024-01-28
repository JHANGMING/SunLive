import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { grassMotionSet } from '@/constants/globaIIcon';
import { bannerImgData } from './data';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import BannerTitle from './BannerTitle';
import SearchInput from '../../Input/SearchInput';
const Banner = () => {
  const { grassMotionLeft, grassMotionRight } = grassMotionSet;
  return (
    <section className="relative mb-120">
      <div className="absolute top-1/2 left-1/2 z-10 text-center transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16">
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
        className="bannerSwiper">
        {bannerImgData.map((data) => (
          <SwiperSlide key={data.alt}>
            {({ isVisible }) => (
              <Image
                src={data.src}
                alt={data.alt}
                width={1440}
                height={600}
                priority
                className={`h-[600px] w-full object-cover transition-transform duration-[25000ms] ease-in-out ${isVisible ? 'scale-125' : 'scale-100'}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={grassMotionLeft.src}
        alt={grassMotionLeft.alt}
        width={546}
        height={136}
        className=" absolute -bottom-1 left-0 z-20"
      />
      <Image
        src={grassMotionRight.src}
        alt={grassMotionRight.alt}
        width={489}
        height={136}
        className=" absolute -bottom-1 right-0 z-20"
      />
    </section>
  );
};

export default Banner;
