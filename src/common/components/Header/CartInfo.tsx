import Link from 'next/link';
import { LoggingInfoProps } from './data';
import { BsCart2 } from 'react-icons/bs';
import Image from 'next/image';
import { BsX } from 'react-icons/bs';
import { productData } from '@/modules/CartPage/data';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';

const CartInfo = ({ dropdownClass, cartData }: LoggingInfoProps) => {
  const { authStatus } = useAuthStatus();
  const cartLength=Array.isArray(cartData) && cartData.length
  return (
    <div
      className={`${dropdownClass} fixed right-0 top-100 w-[304px] bg-white shadow-cartInfo z-50`}>
      {authStatus && cartLength !== 0 ? (
        <>
          <ul className="px-16 pb-16 cartlist">
            {productData.map((data) => {
              const {
                productID,
                productImg,
                productTitle,
                smallPromotionPrice,
                qyt,
              } = data;
              return (
                <li key={productID} className="py-16 px-14 flex gap-12">
                  <div className="flex gap-16 flex-grow">
                    <Image
                      src={productImg.src}
                      alt={productImg.alt}
                      width={80}
                      height={80}
                      className="w-80 h-80"
                    />
                    <div>
                      <h6 className=" text-16 text-darkGray mb-8">
                        {productTitle}
                      </h6>
                      <div className="text-14 flex gap-8 items-center">
                        <p>
                          {qyt} x $<span>{smallPromotionPrice}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-40">
                    <BsX
                      size={24}
                      className=" text-darkGray cursor-pointer hover:opacity-70 "
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
