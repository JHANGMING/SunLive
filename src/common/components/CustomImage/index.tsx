import Image from 'next/image';
import { CustomImageProps } from './data';

const CustomImage = ({
  src,
  alt,
  onClick,
  className,
  roundedStyle,
  priority = false,
}: CustomImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`relative flex-shrink-0 ${className}`}
      onClick={onClick || undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className={`object-contain align-middle ${roundedStyle}`}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
