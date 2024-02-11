import Link from 'next/link';
import { BsX, BsCart2 } from 'react-icons/bs';

import Image from '@/common/components/CustomImage';
import { productData } from '@/modules/CartPage/data';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import { LoggingInfoProps } from './data';
import handler from '@/pages/api/hello';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';

const CartInfo = ({ dropdownClass, cartData }: LoggingInfoProps) => {
  const { authStatus } = useAuthStatus();
  const cartLength = cartData?.cartItemLength;
  const productData = cartData?.cartItemInfo;
  
  const handlerDeleteItem = async (productSpecId: number) => {
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
      console.log('re', result);
      // if (result.statusCode === 200) {
      //   mutate('/api/cart/getcart')
      // } else {
      //   setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${dropdownClass} fixed right-0 top-100 w-[304px] bg-white shadow-cartInfo z-50`}>
      {authStatus && cartLength !== 0 ? (
        <>
          <ul className="px-16 pb-16 cartlist">
            {productData?.map((data) => {
              const {
                productId,
                productSpecId,
                productImg,
                productTitle,
                cartItemPromotionPrice,
                cartItemQty,
              } = data;
              return (
                <li key={productId} className="py-16 px-14 flex gap-12">
                  <div className="flex gap-16 flex-grow">
                    <Image
                      src={productImg.src}
                      alt={productImg.alt}
                      roundedStyle="object-cover"
                      className="w-80 h-80"
                    />
                    <div>
                      <h6 className=" text-16 text-darkGray mb-8">
                        {productTitle}
                      </h6>
                      <p className="text-14  flex gap-8 items-center">
                        {cartItemQty}x<span>${cartItemPromotionPrice}</span>
                      </p>
                    </div>
                  </div>

                  <div className=" flex gap-40">
                    <BsX
                      size={24}
                      className=" text-darkGray cursor-pointer hover:opacity-70 "
                      onClick={() => handlerDeleteItem(productSpecId)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href="/cart"
            className=" font-bold py-8 w-full text-center bg-primary-yellow hover:text-white">
            訂單結帳
          </Link>
        </>
      ) : (
        <div className="bg-white col-span-12 py-24 rounded-20 mb-16 flex flex-col items-center gap-24">
          <div className="w-80 h-80 rounded-full bg-dashboardGray flex justify-center items-center">
            <BsCart2 size={40} className=" text-darkGray" />
          </div>
          <h4 className="text-16 text-darkGray">您的購物車是空的</h4>
        </div>
      )}
    </div>
  );
};

export default CartInfo;
