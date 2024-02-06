import Image from '@/common/components/CustomImage';
import { featureData, featureIcon } from './data';

const FarmFeatureSection = () => {
  return (
    <section className=" bg-farmFeatureBG bg-cover lg:bg-contain bg-repeat-x bg-center mb-60 lg:mb-120  lg:h-[673px] flex items-center pt-48 pb-60 lg:pt-0">
      <ul className="container  flex flex-col gap-40 mb-24 lg:mb-0 lg:grid lg:grid-cols-12 lg:gap-24 bg-white">
        {featureData.map((data) => {
          const {
            image,
            title,
            subTitle,
            descFirst,
            descSecond,
            featureIconLeft,
            featureIconRight,
          } = data;
          const IconLeft = featureIcon[featureIconLeft];
          const IconRight = featureIcon[featureIconRight];
          return (
            <li
              className=" col-span-4 flex flex-col justify-center items-center"
              key={title}>
              <div className="flex gap-8 lg:gap-16 lg:mb-16 items-center">
                <Image
                  src={IconLeft.src}
                  alt={IconLeft.alt}
                  className="w-[20px] h-[45px] lg:w-[30px] lg:h-[60px]"
                />
                <h4 className="text-16 lg:text-24 text-primary-red">{title}</h4>
                <Image
                  src={IconRight.src}
                  alt={IconRight.alt}
                  className="w-[20px] h-[45px] lg:w-[30px] lg:h-[60px]"
                />
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                className=" h-[163px] lg:mb-16 lg:h-276 w-full"
              />
              <h5 className="text-12 lg:text-16 text-primary-red mb-8">
                {subTitle}
              </h5>
              <p className="text-12 lg:text-16 text-center">
                {descFirst}
                <br />
                {descSecond}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FarmFeatureSection;
