import Image from "next/image";
import { CustomImageProps } from "./data";

const CustomImage = ({
  src,
  alt,
  width,
  height,
  className,
}: CustomImageProps) => {
  return (
    <div className={`${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="w-auto h-auto object-cover"
      />
    </div>
  );
};
 
export default CustomImage;