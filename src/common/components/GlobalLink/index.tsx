import { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import { BsHandIndex } from 'react-icons/bs';
import { nextRoutes } from '@/constants/api/apiPaths';
import { setToast } from '@/redux/features/messageSlice';
import { GlobalLinkProps } from './data';
import cartTabData from '../../lib/cartTab';
import authTabData from '../../lib/authTab';
import useDebounceFn from '../../hooks/useDebounceFn';
import fetchNextApi, { NextapiParamsType } from '../../helpers/fetchNextApi';

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
  const handleAddToCart = useDebounceFn(async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isDisabled) return;
    const dataObj = {
      productId,
      productSpecId,
      liveId,
      cartItemQty: 1,
    };
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.addcart,
      method: 'POST',
      data: dataObj,
    };

    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
        dispatch(
          setToast({
            message: cartTabData.add,
          }),
        );
        if (openInNewTab) {
          window.open(href, '_blank');
        }
      } else if (result.statusCode === 409) {
        dispatch(
          setToast({
            message: authTabData.noToken,
          }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, 500);
  if (category === 'footer') {
    return (
      <a
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        className={className}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  const isLiveAddCart = category === 'liveAddCart';
  const onClickHandler = isLiveAddCart || !isDisabled ? handleAddToCart : undefined;

  return (
    <button
      type="button"
      className={`${className} ${isLiveAddCart ? 'py-8 px-16 rounded-8 border border-dashed group transition duration-800 ease-in-out' : ''}`}
      onClick={onClickHandler}
    >
      {isLiveAddCart ? (
        <span className="font-bold tracking-widest rounded-8 w-full flex justify-center gap-8">
          <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow group-hover:translate-x-4" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default GlobalLink;
