import { mutate } from 'swr';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { BsHandIndex } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { setToast } from '@/redux/features/messageSlice';
import { cartTab } from '../lib/cartTab';
import { authTab } from '../lib/authTab';
import { useDebounceFn } from '../hooks/useDebounceFn';
import fetchNextApi, { apiParamsType } from '../helpers/fetchNextApi';
type GlobalLinkProps = {
  href: string;
  liveId?: number;
  category?: string;
  className?: string;
  productId?: number;
  children: ReactNode;
  isDisabled?: boolean;
  openInNewTab?: boolean;
  productSpecId?: number;
};
const GlobalLink = ({
  href,
  liveId,
  children,
  category,
  productId,
  className,
  openInNewTab,
  productSpecId,
  isDisabled = false,
}: GlobalLinkProps) => {
  const dispatch = useDispatch();
  const handerAddtoCart = async (e: React.MouseEvent) => {
    e.preventDefault(); 

    if (isDisabled) return;
    const dataObj = {
      productId,
      productSpecId,
      liveId,
      cartItemQty: 1,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['addcart'],
      method: 'POST',
      data: dataObj,
    };

    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
        dispatch(
          setToast({
            message: cartTab['add'],
          })
        );
        if (openInNewTab) {
          window.open(href, '_blank');
        }
      } else if (result.statusCode === 409) {
        dispatch(
          setToast({
            message: authTab['noToken'],
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedAddCart = useDebounceFn(handerAddtoCart, 500);
  if (category === 'liveAddCart') {
    return (
      <div
        className={`py-8 px-16  rounded-8 border border-dashed group transition duration-800 ease-in-out ${className}`}
        onClick={debouncedAddCart}>
        <span
          className="font-bold tracking-widest rounded-8 w-full flex justify-center gap-8"
        >
          <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4 " />
          {children}
        </span>
      </div>
    );
  }
  return (
    <span
      className={className}
      onClick={debouncedAddCart}
      >
      {children}
    </span>
  );
};

export default GlobalLink;
