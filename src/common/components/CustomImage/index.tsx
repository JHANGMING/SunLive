import Image from "next/image";
import { CustomImageProps } from "./data";

const CustomImage = ({
  src,
  alt,
  className,
  priority = false,
  roundedStyle,
}: CustomImageProps) => {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
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