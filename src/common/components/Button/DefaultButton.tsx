import { ButtonPropsType } from "./data";

const DefaultButton = ({ classStyle, children }: ButtonPropsType) => {
  return (
    <button
      type="button"
      className={`${classStyle} text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26`}>
      {children}
    </button>
  );
};
 
export default DefaultButton;