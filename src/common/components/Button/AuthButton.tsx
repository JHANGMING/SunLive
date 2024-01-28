import { BsHandIndex } from 'react-icons/bs';
import { ButtonPropsType } from './data';
const AuthButton = ({ type, onClick, children, btnStyle }: ButtonPropsType) => {
  return (
    <button
      type={type}
      className={` flex justify-center gap-8 py-12 rounded-8 border-dashed border border-white cursor-pointer hover:opacity-60 transition duration-800 ease-in-out group ${btnStyle}`}
      onClick={onClick}>
      <BsHandIndex className="w-24 h-24 rotate-90" />
      <p className=" font-bold tracking-widest">{children}</p>
    </button>
  );
};

export default AuthButton;
