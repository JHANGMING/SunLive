import { ButtonPropsType } from './data';

const DefaultButton = ({
  onClick,
  children,
  disabled,
  classStyle,
}: ButtonPropsType) => {
  return (
    <button
      type="button"
      className={` text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26 ${classStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
