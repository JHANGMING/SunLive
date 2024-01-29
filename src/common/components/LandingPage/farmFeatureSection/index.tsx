import Image from 'next/image';
import { featureData, featureIcon } from './data';

const FarmFeatureSection = () => {
  return (
    <section className=" bg-farmFeatureBG bg-repeat-x bg-center pt-114 pb-130 mb-120">
      <ul className="container grid grid-cols-12 gap-24">
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
              <div className="flex gap-16 mb-16">
                <Image
                  src={IconLeft.src}
                  alt={IconLeft.alt}
                  width={IconLeft.width}
                  height={IconLeft.height}
                />
                <h4 className=" text-primary-red">{title}</h4>
                <Image
                  src={IconRight.src}
                  alt={IconRight.alt}
                  width={IconRight.width}
                  height={IconRight.height}
                />
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mb-16 h-276 object-cover"
              />
              <h5 className=" text-primary-red mb-8">{subTitle}</h5>
              <p className="text-center">
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
