import Image from '@/common/components/CustomImage';
import { dataSet } from './data';
import LogoImg from '../../Logo/LogoImg';

const FriendlyFarmSection = () => {
  const { src, alt } = dataSet.image;
  return (
    <section className=" bg-friendlyFarmBG bg-repeat-x bg-center pt-112 pb-41">
      <div className="container">
        <div className="flex gap-8 lg:gap-16 justify-center items-center mb-16 lg:mb-60">
          <h2 className="text-20 lg:text-40 text-primary-green">
            {dataSet.title}
          </h2>
          <LogoImg
            classProps="w-32 h-32 lg:h-50 lg:w-50"
          />
        </div>
        <div className="grid grid-cols-4 gap-24 lg:grid-cols-12 lg:gap-24 ">
          <div className="col-span-4 lg:hidden">
            <Image src={src} alt={alt} className="w-full h-[150px]" />
          </div>
          <ul className="col-start-2 col-end-5 lg:col-start-2 lg:col-end-9">
            {dataSet.content.map((data) => {
              const { subTitle, desFirst, desSecond, image } = data;
              return (
                <li className="mb-48" key={subTitle}>
                  <div className="flex gap-16 lg:gap-24 mb-16">
                    <LogoImg
                      // widthProps={30}
                      // heightProps={30}
                      classProps="-ml-54 w-24 h-24 lg:w-30 lg:h-30"
                    />
                    <h3 className="text-16 lg:text-20 text-primary-green">
                      {subTitle}
                    </h3>
                  </div>
                  <p className="text-12 lg:text-16">
                    {desFirst}
                    <br />
                    {desSecond}
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
