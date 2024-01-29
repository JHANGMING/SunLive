import Image from 'next/image';
import { LogoImgPrors } from './data';

const LogoImg = ({ widthProps, heightProps, classProps }: LogoImgPrors) => {
  const classStyle = !!classProps ? `${classProps}` : '';
  return (
    <Image
      src="/images/logo.svg"
      alt="Logo"
      width={widthProps}
      height={heightProps}
      className={`w-${widthProps} h-${heightProps} ${classStyle}`}></Image>
  );
};

export default LogoImg;
