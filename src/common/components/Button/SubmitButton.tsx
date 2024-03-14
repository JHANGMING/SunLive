import { ButtonPropsType } from './data';

const SubmitButton = ({ classStyle, children, disabled }: ButtonPropsType) => {
  return (
    <button
      type="submit"
      className={` text-white rounded-8 text-14 leading-[30px] py-[5px] px-26 ${classStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
