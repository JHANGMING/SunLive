import { v4 as uuidv4 } from 'uuid';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '@/common/components/CustomImage';
import { HomeSwiperPropsType, swiperData } from './data';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const HomeSwiper = ({ imgData, classStyle }: HomeSwiperPropsType) => {
  const data = swiperData[imgData];
  if (!data) return null;
  const { spaceBetween, imgDatas } = data;

  return (
    <div className={`homeSwiper ${classStyle}`}>
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        slidesOffsetBefore={0}
        modules={[Autoplay]}
        spaceBetween={spaceBetween} // 幻燈片間隔
        // loop={true}
        speed={15000}
        autoplay={{
          delay: 1, // 幻燈片切換延遲
          disableOnInteraction: false, // 操作swiper，是否禁止
        }}
      >
        {imgDatas.map((imgＤata) => (
          <SwiperSlide key={uuidv4()}>
            <Image
              src={imgＤata.src}
              alt={imgＤata.alt}
              className="w-[160px] h-[119px] lg:w-[378px] lg:h-[282px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
