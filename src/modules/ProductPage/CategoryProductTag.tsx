import LogoImg from '@/common/components/Logo/LogoImg';

type CategoryProductTagProps = {
  classStyle: string;
  text: string;
};
const CategoryProductTag = ({ classStyle, text }: CategoryProductTagProps) => {
  return (
    <div
      className={`w-220 h-74 rounded-20 bg-white flex gap-10 justify-center items-center   absolute z-10 ${classStyle}`}>
      <LogoImg widthProps={32} heightProps={32} />
      <h3>{text}</h3>
    </div>
  );
};

export default CategoryProductTag;
