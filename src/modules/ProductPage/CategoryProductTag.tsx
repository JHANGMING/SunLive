import LogoImg from '@/components/Logo/LogoImg';
import { CategoryProductTagProps } from './data';

const CategoryProductTag = ({ classStyle, text }: CategoryProductTagProps) => {
  return (
    <div
      className={`w-220 h-74 rounded-20 bg-white flex gap-10 justify-center items-center   absolute z-10 ${classStyle}`}
    >
      <LogoImg classProps="w-32 h-32" />
      <h3>{text}</h3>
    </div>
  );
};

export default CategoryProductTag;
