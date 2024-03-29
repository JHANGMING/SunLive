import Link from 'next/link';
import Image from '@/components/CustomImage';
import LogoImg from './LogoImg';
import { ClassStyleProps } from './data';

const Logo = ({ classStyle, classProps }: ClassStyleProps) => {
  return (
    <Link href="/" className={`flex items-center gap-16 group ${classStyle}`}>
      <LogoImg classProps={`group-shake ${classProps}`} />
      <Image
        src="/images/sunlive_logo.svg"
        alt="sunLive-logo"
        className="w-100 h-[42px]"
      />
    </Link>
  );
};

export default Logo;
