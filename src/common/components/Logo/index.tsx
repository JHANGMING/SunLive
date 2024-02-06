import Link from 'next/link';
import LogoImg from './LogoImg';
import { classStyleProps } from './data';

const Logo = ({
  classStyle,
  classProps,
  textSytle = 'text-28',
}: classStyleProps) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-16 group ${classStyle}`}>
      <LogoImg classProps={`group-shake ${classProps}`} />
      <p className={`${textSytle} font-bold text-primary-green`}>搶鮮購</p>
    </Link>
  );
};

export default Logo;
