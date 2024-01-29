import LogoImg from '@/common/components/Logo/LogoImg';
type CategoryTitleProps = {
  title: string;
  gapStyle?: string;
  backgroundStyle?: boolean;
};
const CategoryTitle = ({
  title,
  gapStyle,
  backgroundStyle = true,
}: CategoryTitleProps) => {
  const h3Style = backgroundStyle === true ? 'ellipse' : '';
  return (
    <div className={`flex gap-10 p-16 h-74 items-center ${gapStyle}`}>
      <LogoImg widthProps={32} heightProps={32} />
      <h3 className={h3Style}>{title}</h3>
    </div>
  );
};

export default CategoryTitle;
