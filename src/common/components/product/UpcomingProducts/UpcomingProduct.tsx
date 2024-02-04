import Image from '@/common/components/CustomImage';
import { ProductDataProps } from './data';

const UpcomingProduct = ({ ...data }: ProductDataProps) => {
  const {
    price,
    title,
    personName,
    date,
    productImage,
    personImage,
    classStyle,
  } = data;

  return (
    <li className={`flex gap-24 ${classStyle}`}>
      <div className=" relative">
        <Image
          src={productImage.src}
          alt={productImage.alt}
          className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px] w-[240px] opacity-60"
        />
        <div className=" absolute left-0 top-0">
          <Image
            src="/images/home/live/UpcomingIcon.svg"
            alt="UpcomingIcon"
            className="w-80 h-80"
          />
        </div>
      </div>
      <div className="flex flex-col gap-24">
        <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">
          $ {price}
        </p>
        <h5 className="border-b border-black font-bold text-mediumGray">
          {title}
        </h5>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 items-center">
            <Image
              src={personImage.src}
              alt={personImage.alt}
              className="w-40 h-40"
            />
            <p className=" text-primary-green">{personName}</p>
          </div>
          <time className="text-primary-green">{date}</time>
        </div>
      </div>
    </li>
  );
};

export default UpcomingProduct;
