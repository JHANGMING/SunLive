import Link from 'next/link';
import LogoImg from './LogoImg';
import { classStyleProps } from './data';

const Logo = ({
  classStyle,
  widthProps = 50,
  heightProps = 50,
  textSytle = 'text-28',
}: classStyleProps) => {
  return (
    <Link href="/" className={`flex items-center gap-16 group ${classStyle}`}>
      <LogoImg
        widthProps={widthProps}
        heightProps={heightProps}
        classProps={`group-shake`}
      />
      <p className={`${textSytle} font-bold text-primary-green`}>搶鮮購</p>
    </Link>
  );
};

export default Logo;
