import { mutate } from 'swr';
import { BsX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
import useDebounceFn from '@/common/hooks/useDebounceFn';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { deletecartParams } from '@/constants/api/nextApiParams';
import { DeleteBtnPropsType } from './data';

const DeleteBtn = ({ size, className, productSpecId }: DeleteBtnPropsType) => {
  const dispatch = useDispatch();
  const handlerDeleteItem = useDebounceFn(async () => {
    const apiParams = { ...deletecartParams, data: { productSpecId } };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart');
      } else {
        dispatch(setToast({ message: result.message }));
      }
    } catch (error) {
      console.error(error);
    }
  }, 300);
  return <BsX size={size} className={className} onClick={handlerDeleteItem} />;
};

export default DeleteBtn;
