import { BsHandIndex } from 'react-icons/bs';
import { ButtonPropsType } from './data';
import { useRouter } from 'next/router';
import getAuthToken from '@/common/helpers/getAuthToken';
const AddToCartButton = ({
  children,
  btnStyle,
  textStyle,
  showIcon = true,
  disabled = false,
  // productId, // 新增 productId
}: ButtonPropsType) => {
  const router = useRouter();
  const handleCartAddition = () => {
    if (disabled) return;
    console.log('加入購物車11');
    const authToken = getAuthToken();
    if (!authToken) {
      router.push('/auth/login');
      return;
    }
    // if (onClick) onClick();
  };
  const buttonClassName = disabled
    ? `${btnStyle} flex gap-8 py-8 px-16 rounded-8 border-dashed border cursor-not-allowed`
    : `${btnStyle} flex gap-8 py-4 px-8 lg:py-8 lg:px-16 rounded-8 lg:border-dashed border cursor-pointer hover:opacity-60 transition duration-800 ease-in-out group`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleCartAddition}>
      {showIcon && (
        <BsHandIndex className="hidden lg:block w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4" />
      )}
      <p className={`${textStyle} text-12 lg:text-16 lg:font-bold tracking-widest`}>{children}</p>
    </button>
  );
};

export default AddToCartButton;
