
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { BsHandIndex } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { setToast } from '@/redux/features/messageSlice';
import { cartTab } from '../lib/cartTab';
import { authTab } from '../lib/authTab';
import fetchNextApi, { apiParamsType } from '../helpers/fetchNextApi';
type GlobalLinkProps = {
  href: string;
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
  isDisabled?: boolean;
  productSpecId?: number;
  productId?: number;
  liveId?: number;
  category?: string;
};
const GlobalLink = ({
  href,
  className,
  openInNewTab,
  children,
  isDisabled = false,
  productSpecId,
  productId,
  liveId,
  category,
}: GlobalLinkProps) => {
  const dispatch = useDispatch();
  const handerAddtoCart = async (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
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
        dispatch(
          setToast({
            message: cartTab['add'],
          })
        );
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
  if (category === 'liveAddCart') {
    return (
      <div
        className={`flex justify-center gap-8 py-8 px-16  rounded-8 border border-dashed group transition duration-800 ease-in-out ${className}`}>
        <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4 " />
        <a
          className="font-bold tracking-widest rounded-8"
          href={href}
          target={openInNewTab ? '_blank' : ''}
          rel="noopener noreferrer"
          onClick={handerAddtoCart}>
          {children}
        </a>
      </div>
    );
  }
  return (
    <a
      className={className}
      href={href}
      target={openInNewTab ? '_blank' : ''}
      rel="noopener noreferrer"
      onClick={handerAddtoCart}>
      {children}
    </a>
  );
};

export default GlobalLink;
