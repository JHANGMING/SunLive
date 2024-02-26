import { ButtonPropsType } from "./data";

const DefaultButton = ({ classStyle, children, onClick }: ButtonPropsType) => {
  return (
    <button
      type="button"
      className={` text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26 ${classStyle}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
 
export default DefaultButton;