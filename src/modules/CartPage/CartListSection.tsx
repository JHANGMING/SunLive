
import { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import Image from '@/common/components/CustomImage';
import { setToast } from '@/redux/features/messageSlice';
import { useDebounceFn } from '@/common/hooks/useDebounceFn';
import DeleteBtn from '@/common/components/Button/DeleteBtn';
import SpecSelect from '@/common/components/Select/SpecSelect';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { generateSpecData } from '@/common/components/Select/SpecSelect/data';
import CartLink from './CartLink';
import { CartProps } from './data';
import CartTotalPrice from './CartTotalPrice';
const CartListSection = ({ cartData }: CartProps) => {
  const dispatch = useDispatch();
  const priceData = cartData?.cartInfo?.[0];
  const productData = cartData?.cartItemProductInfo ?? [];
  
  const handlerQtyChange = async (
    productId: number,
    productSpecId: number,
    cartItemQty: number
  ) => {
    if (cartItemQty < 1) return;

    const dataObj = {
      productId,
      productSpecId,
      cartItemQty,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['putqty'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart')
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }))
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handlerSpecChange = async (productId: any, specId: string) => {
    const dataObj = {
    productId:productId,
	  productSpecId:Number(specId),
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['putspec'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart')
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedQtyChange = useDebounceFn(handlerQtyChange, 500);
  return (
    <section className="container">
      <div className=" flex gap-40">
        <div className="w-9/12 bg-white p-24 rounded-20 mb-16 flex-grow self-start">
          <div className="flex items-center gap-8">
            <BsChevronDown size={24} className="text-primary-green" />
            <p className=" text-darkGray font-semibold text-20">購物車清單</p>
          </div>
          <ul className="cartlist form-transition">
            {productData.map((data) => {
              const {
                cartItemLivePrice,
                productId,
                productImg,
                productTitle,
                smallOriginalPrice,
                smallPromotionPrice,
                productSpecSize,
                largeOriginalPrice,
                largePromotionPrice,
                cartItemQty,
                subtotal,
                smallWeight,
                largeWeight,
                smallProductSpecId,
                largeProductSpecId,
              } = data;
              const productSpecId = productSpecSize
                ? largeProductSpecId
                : smallProductSpecId;

              return (
                <li key={productSpecId} className="p-24 flex gap-60">
                  <div className="flex gap-16 flex-grow relative">
                    <Image
                      src={
                        productImg.src === null
                          ? '/images/product/default.jpg'
                          : productImg.src
                      }
                      alt={productImg.alt}
                      roundedStyle="object-cover"
                      className="w-80 h-80"
                    />
                    {cartItemLivePrice && (
                      <div className=" absolute -left-[28px] -top-[20px]">
                        <Image
                          src="/images/productShop/todaySale.svg"
                          alt="UpcomingIcon"
                          className="w-50 h-50"
                        />
                      </div>
                    )}
                    <div>
                      <h6 className=" font-normal mb-8">{productTitle}</h6>
                      <div className="text-14 flex gap-8 items-center">
                        <p>
                          NT$
                          <span>
                            {cartItemLivePrice
                              ? cartItemLivePrice
                              : productSpecSize
                                ? largePromotionPrice
                                : smallPromotionPrice}
                          </span>
                        </p>
                        <p className=" text-lightGray line-through">
                          {productSpecSize
                            ? largeOriginalPrice
                            : smallOriginalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-7/12">
                    <SpecSelect
                      optionsData={generateSpecData({
                        smallWeight,
                        largeWeight,
                        smallProductSpecId,
                        largeProductSpecId,
                      })}
                      onSpecChange={(option) =>
                        handlerSpecChange(productId, option)
                      }
                      initialSelectIndex={productSpecSize ? 1 : 0}
                      isLive={cartItemLivePrice ? true : false}
                    />
                    <div className="flex-grow ml-50">
                      <div className="flex gap-x-12 items-center">
                        <Image
                          src="/images/cart/dec.png"
                          alt="dec"
                          className="w-20 h-20 cursor-pointer hover:opacity-70"
                          onClick={() =>
                            debouncedQtyChange(
                              productId,
                              productSpecId,
                              cartItemQty - 1
                            )
                          }
                        />
                        <p className="text-18">{cartItemQty}</p>
                        <Image
                          src="/images/cart/plus.png"
                          alt="plus"
                          className="w-20 h-20 cursor-pointer hover:opacity-70"
                          onClick={() =>
                            debouncedQtyChange(
                              productId,
                              productSpecId,
                              cartItemQty + 1
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className=" flex gap-40 flex-grow">
                      <h6 className=" font-normal ">
                        <span>$</span>
                        {subtotal}
                      </h6>
                    </div>
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
        </div>
        {priceData && <CartTotalPrice priceData={priceData} />}
      </div>
      <CartLink />
    </section>
  );
};

export default CartListSection;
