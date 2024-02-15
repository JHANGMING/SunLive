import { BsHandIndex } from 'react-icons/bs';
import { ButtonPropsType } from './data';
import { useRouter } from 'next/router';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
import { cartTab } from '@/common/lib/cartTab';
const AddToCartButton = ({
  children,
  btnStyle,
  textStyle,
  showIcon = true,
  disabled = false,
  productSpecId,
  productId,
  cartItemQty=1,
  toCart=false,
  onClick,
}: ButtonPropsType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();

  const handleCartAddition = async () => {
    if (disabled) return;
    if (!authStatus) {
      router.push('/auth/login');
      return;
    }
    
    const dataObj = {
      productId,
      productSpecId,
      cartItemQty,
    };
    console.log('dataObj', dataObj);
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['addcart'],
      method: 'POST',
      data: dataObj,
    };
    
    try {
      const result = await fetchNextApi(apiParams);
      console.log('addcart', result);
      
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
        if (toCart) router.push('/cart');
        dispatch(
          setToast({
            message: cartTab['add'],
          })
        );
        // router.push('/auth/login');
      } else if (result.statusCode === 409) {
        router.push('/auth/login');
        // setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
      }
    } catch (error) {
      console.log(error);
    }

  };
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      handleCartAddition();
    }
  };
  const buttonClassName = disabled
    ? `${btnStyle} flex gap-8 py-8 px-16 rounded-8 border-dashed border cursor-not-allowed`
    : `${btnStyle} flex gap-8 py-4 px-8 lg:py-8 lg:px-16 rounded-8 lg:border-dashed border cursor-pointer hover:opacity-60 transition duration-800 ease-in-out group`;

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
      {showIcon && (
        <BsHandIndex className="hidden lg:block w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4" />
      )}
      <p
        className={`${textStyle} text-12 lg:text-16 lg:font-bold tracking-widest`}>
        {children}
      </p>
    </button>
  );
};

export default AddToCartButton;
