import { mutate } from 'swr';
import { BsX } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { useDebounceFn } from '@/common/hooks/useDebounceFn';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { DeleteBtnPropsType } from './data';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
const DeleteBtn = ({ size, className, productSpecId }: DeleteBtnPropsType) => {
  const dispatch = useDispatch();
  const handlerDeleteItem = async () => {
    const dataObj = {
      productSpecId,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['deletecart'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
      } else {
        dispatch(setToast({message: result.message}));
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
