import Link from 'next/link';
import { BsCart2 } from 'react-icons/bs';
import Image from '@/components/CustomImage';
import useAuthStatus from '@/common/hooks/useAuthStatus';
import { useEffect, useRef } from 'react';
import { LoggingInfoProps } from './data';
import DeleteBtn from '../Button/DeleteBtn';

const CartInfo = ({ dropdownClass, cartData, isVisible }: LoggingInfoProps) => {
  const { authStatus } = useAuthStatus();
  const listRef = useRef<HTMLUListElement>(null);
  const cartLength = cartData?.cartItemLength ?? 0;
  const productData = cartData?.cartItemProductInfo;
  const fixedHeaderisVisible = isVisible
    ? 'right-0 top-80'
    : '-right-[200px] top-100';
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [cartData]);

  return (
    <div
      className={`${dropdownClass} ${fixedHeaderisVisible} fixed  w-[304px] bg-white shadow-cartInfo z-50`}
    >
      {authStatus && cartLength > 0 ? (
        <>
          <ul
            className="px-16 pb-16 cartlist max-h-[350px] overflow-y-auto"
            ref={listRef}
          >
            {productData?.map((data) => {
              const {
                productSpecId,
                productImg,
                productTitle,
                cartItemPromotionPrice,
                cartItemQty,
              } = data;
              return (
                <li key={productSpecId} className="py-16 px-14 flex gap-12">
                  <div className="flex gap-16 flex-grow">
                    <Image
                      src={
                        productImg.src === null
                          ? '/images/product/product1.png'
                          : productImg.src
                      }
                      alt={productImg.alt}
                      roundedStyle="object-cover"
                      className="w-80 h-80"
                    />
                    <div>
                      <h6 className=" text-16 text-darkGray mb-8">
                        {productTitle}
                      </h6>
                      <p className="text-14  flex gap-8 items-center">
                        {cartItemQty}
                        x
                        <span>
                          $
                          {cartItemPromotionPrice}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className=" flex gap-40">
                    <DeleteBtn
                      size={24}
                      className="text-darkGray cursor-pointer hover:opacity-70"
                      productSpecId={productSpecId}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href="/cart"
            className=" font-bold py-8 w-full text-center bg-primary-yellow hover:text-white"
          >
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
