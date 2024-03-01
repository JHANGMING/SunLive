import { mutate } from 'swr';
import { BsX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { nextRoutes } from '@/constants/apiPaths';
import { setToast } from '@/redux/features/messageSlice';
import { useDebounceFn } from '@/common/hooks/useDebounceFn';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { DeleteBtnPropsType } from './data';
const DeleteBtn = ({ size, className, productSpecId }: DeleteBtnPropsType) => {
  const dispatch = useDispatch();
  const handlerDeleteItem = async () => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['deletecart'],
      method: 'POST',
      data: {
        productSpecId,
      },
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
      } else {
        dispatch(setToast({ message: result.message }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedDelete = useDebounceFn(handlerDeleteItem, 500);
  return (
    <>
      <BsX size={size} className={className} onClick={debouncedDelete} />
    </>
  );
};

export default DeleteBtn;
