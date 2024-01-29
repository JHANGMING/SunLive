import Image from 'next/image';
import { dataSet } from './data';
import LogoImg from '../../Logo/LogoImg';

const FriendlyFarmSection = () => {
  const { src, alt } = dataSet.image;
  return (
    <section className=" bg-friendlyFarmBG bg-repeat-x bg-center pt-112 pb-41">
      <div className="container">
        <div className="flex gap-16 justify-center items-center mb-60">
          <h2 className="text-40 text-primary-green">{dataSet.title}</h2>
          <LogoImg widthProps={50} heightProps={50} classProps="h-50" />
        </div>
        <div className="grid grid-cols-12 gap-24 ">
          <ul className=" col-start-2 col-end-9">
            {dataSet.content.map((data) => {
              const { subTitle, desFirst, desSecond, image } = data;
              return (
                <li className="mb-48" key={subTitle}>
                  <div className="flex gap-24 mb-16">
                    <LogoImg
                      widthProps={30}
                      heightProps={30}
                      classProps="-ml-54"
                    />
                    <h3 className="text-20 text-primary-green">{subTitle}</h3>
                  </div>
                  <p>
                    {desFirst}
                    <br />
                    {desSecond}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="col-start-9 col-end-13">
            <Image src={src} alt={alt} width={411} height={308} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendlyFarmSection;
