import { BsPersonCircle } from 'react-icons/bs';
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import { AvatarProps, NameTagProps } from './data';

const Avatar = ({ photo, alt }:AvatarProps) => {
  return photo ? (
    <Image
      src={photo}
      alt={alt}
      className="w-24 h-24"
      roundedStyle="rounded-full object-cover"
    />
  ) : (
    <div>
      <BsPersonCircle size={24} className="text-darkGray " />
    </div>
  );
};

// NameTag.jsx
const NameTag = ({ nickName, isLiveFarmer }:NameTagProps) => {
  return (
    <span
      className={`whitespace-nowrap ${isLiveFarmer ? 'bg-primary-yellow p-4 flex items-center gap-2 rounded-6' : 'text-darkGray'}`}
    >
      {nickName}
      {isLiveFarmer && <LogoImg classProps="w-16 h-16 logo-shake" />}
    </span>
  );
};

export { Avatar, NameTag };
