import { ButtonPropsType } from './data';

const SubmitButton = ({ classStyle, children }: ButtonPropsType) => {
  return (
    <button
      type="submit"
      className={`${classStyle} text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26`}>
      {children}
    </button>
  );
};

export default SubmitButton;
