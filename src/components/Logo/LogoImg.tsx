import Image from 'next/image';
import { LogoImgPrors } from './data';

const LogoImg = ({ classProps }: LogoImgPrors) => {
  const classStyle = classProps ? `${classProps}` : '';
  return (
    <div className={`relative flex-shrink-0 ${classStyle}`}>
      <Image
        src="/images/logo.svg"
        alt="Logo"
        fill
        sizes="100%"
        className="object-contain align-middle"
      />
    </div>
  );
};

export default LogoImg;
