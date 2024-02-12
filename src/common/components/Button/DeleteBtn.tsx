import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { BsX } from 'react-icons/bs';
import { DeleteBtnPropsType } from './data';
import { mutate } from 'swr';
const DeleteBtn = ({ size, className, productSpecId }:DeleteBtnPropsType) => {
  const handlerDeleteItem = async () => {
    console.log('delete');
    const dataObj = {
      productSpecId: productSpecId,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['deletecart'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      console.log('deletecart', result);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart')
      } else {
        // setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BsX size={size} className={className} onClick={handlerDeleteItem} />
    </>
  );
};

export default DeleteBtn;
