import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
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
        slidesPerView={'auto'}
        centeredSlides={false}
        slidesOffsetBefore={0}
        modules={[Autoplay]}
        spaceBetween={spaceBetween} // 幻燈片間隔
        // slidesPerView={4} // 在Swiper中一次顯示幻燈片數量
        loop={true}
        speed={10000}
        autoplay={{
          delay: 1, //幻燈片切換延遲
          disableOnInteraction: false, // 操作swiper，是否禁止
        }}>
        {imgDatas.map((data) => (
          <SwiperSlide key={data.alt}>
            <Image
              src={data.src}
              alt={data.alt}
              width={378}
              height={282}
              className=" object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
