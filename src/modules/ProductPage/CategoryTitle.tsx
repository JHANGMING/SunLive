import LogoImg from '@/common/components/Logo/LogoImg';
import { CategoryTitleProps } from './data';

const CategoryTitle = ({
  title,
  gapStyle,
  backgroundStyle = true,
}: CategoryTitleProps) => {
  const h3Style = backgroundStyle === true ? 'bg-primary-yellow bg-opacity-50 text-center flex items-center justify-center rounded-[50%] w-[150px] h-32' : '';
  return (
    <div className={`flex gap-10 p-16 h-74 items-center ${gapStyle}`}>
      <LogoImg classProps="w-32 h-32" />
      <h3 className={h3Style}>{title}</h3>
    </div>
  );
};

export default CategoryTitle;
