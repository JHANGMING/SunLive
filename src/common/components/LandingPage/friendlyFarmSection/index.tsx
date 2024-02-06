import Image from '@/common/components/CustomImage';
import { dataSet } from './data';
import LogoImg from '../../Logo/LogoImg';

const FriendlyFarmSection = () => {
  const { src, alt } = dataSet.image;
  return (
    <section className=" bg-friendlyFarmBG bg-repeat-x bg-center pt-80 lg:pt-112 lg:pb-41">
      <div className="container">
        <div className="flex gap-8 lg:gap-16 justify-center items-center mb-16 lg:mb-60">
          <h2 className="text-20 lg:text-40 text-primary-green">
            {dataSet.title}
          </h2>
          <LogoImg classProps="w-32 h-32 lg:h-50 lg:w-50" />
        </div>
        <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-12 lg:gap-24 ">
          <div className="lg:hidden">
            <Image src={src} alt={alt} className="w-[163px] h-[150px]" />
          </div>
          <ul className=" lg:col-start-2 lg:col-end-9">
            {dataSet.content.map((data) => {
              const {
                subTitle,
                desFirst,
                desSecond,
                image,
                desFirst_small,
                desSecond_small,
              } = data;
              return (
                <li className="mb-24 lg:mb-48" key={subTitle}>
                  <div className="flex gap-16 lg:gap-24 mb-8 lg:mb-16">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-24 h-24 lg:w-30 lg:h-30  lg:-ml-54"
                    />
                    <h3 className="text-16 lg:text-20 text-primary-green">
                      {subTitle}
                    </h3>
                  </div>
                  <p className="hidden lg:block lg:text-16">
                    {desFirst}
                    <br />
                    {desSecond}
                  </p>
                  <p className="ml-40 lg:hidden text-12 lg:text-16">
                    {desFirst_small}
                    <br />
                    {desSecond_small}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:block lg:col-start-9 lg:col-end-13">
            <Image src={src} alt={alt} className="w-full h-[308px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendlyFarmSection;
