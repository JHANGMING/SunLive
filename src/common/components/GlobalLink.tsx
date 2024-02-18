
import { ReactNode } from 'react';
import fetchNextApi, { apiParamsType } from '../helpers/fetchNextApi';
import { apiPaths, nextRoutes } from '@/constants/apiPaths';
import { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
import { cartTab } from '../lib/cartTab';
type GlobalLinkProps = {
  href: string;
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
  isDisabled?: boolean;
  productSpecId?: number;
  productId?: number;
  liveId?: number;
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
}: GlobalLinkProps) => {
  const dispatch = useDispatch();
  const handerAddtoCart = async(e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
      return; 
    }
    console.log('嫁入購物車');
    const dataObj = {
      productId,
      productSpecId,
      liveId,
      cartItemQty: 1,
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
        dispatch(
          setToast({
            message: cartTab['add'],
          })
        );
        // router.push('/auth/login');
      } else if (result.statusCode === 409) {
        // router.push('/auth/login');
        // setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
      }
    } catch (error) {
      console.log(error);
    }
    
  };
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
