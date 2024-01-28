import { BsHandIndex } from 'react-icons/bs';
import { ButtonPropsType } from './data';
const AddToCartButton = ({
  children,
  btnStyle,
  textStyle,
  showIcon = true,
  disabled = false,
}: ButtonPropsType) => {
  const handleCartAddition = () => {
    if (disabled) return;
    console.log('加入購物車11');

    // if (onClick) onClick();
  };
  const buttonClassName = disabled
    ? `${btnStyle} flex gap-8 py-8 px-16 rounded-8 border-dashed border cursor-not-allowed`
    : `${btnStyle} flex gap-8 py-8 px-16 rounded-8 border-dashed border cursor-pointer hover:opacity-60 transition duration-800 ease-in-out group`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleCartAddition}>
      {showIcon && (
        <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4" />
      )}
      <p className={`${textStyle} font-bold tracking-widest`}>{children}</p>
    </button>
  );
};

export default AddToCartButton;
