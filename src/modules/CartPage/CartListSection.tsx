import LogoImg from '@/common/components/Logo/LogoImg';
import Image from '@/common/components/CustomImage';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import CartLink from './CartLink';
import SpecSelect from '@/common/components/Select/SpecSelect';
import { generateSpecData } from '@/common/components/Select/SpecSelect/data';
import { CartProps, productData } from './data';
import DeleteBtn from '@/common/components/Button/DeleteBtn';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { mutate } from 'swr';
const CartListSection = ({ cartData }: CartProps) => {
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
      console.log('QtyChange', result);
      if (result.statusCode === 200) {
        mutate('/api/cart/getcart')
      } else {
        // setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
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
    // try {
    //   const result = await fetchNextApi(apiParams);
    //   console.log('putspec', result);
    //   // if (result.statusCode === 200) {
    //   //   mutate('/api/cart/getcart')
    //   // } else {
    //   //   setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
    //   // }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const productData = cartData?.cartItemProductInfo ?? [];
  const priceData = cartData?.cartInfo?.[0] ?? null;
  // console.log('priceData', cartData);
  
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
              const productSpecId=
                        productSpecSize
                          ? largeProductSpecId
                          : smallProductSpecId
                      
              return (
                <li key={productId} className="p-24 flex gap-60">
                  <div className="flex gap-16 flex-grow">
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
                    <div>
                      <h6 className=" font-normal mb-8">{productTitle}</h6>
                      <div className="text-14 flex gap-8 items-center">
                        <p>
                          NT$
                          <span>
                            {productSpecSize
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
                  />
                  <div>
                    <div className="flex gap-x-12 items-center">
                      <Image
                        src="/images/cart/dec.png"
                        alt="dec"
                        className="w-20 h-20 cursor-pointer hover:opacity-70"
                        onClick={() =>
                          handlerQtyChange(productId,productSpecId, cartItemQty - 1)
                        }
                      />
                      <p className="text-18">{cartItemQty}</p>
                      <Image
                        src="/images/cart/plus.png"
                        alt="plus"
                        className="w-20 h-20 cursor-pointer hover:opacity-70"
                        onClick={() =>
                          handlerQtyChange(productId,productSpecId,cartItemQty + 1)
                        }
                      />
                    </div>
                  </div>
                  <div className=" flex gap-40">
                    <h6 className=" font-normal">
                      <span>$</span>
                      {subtotal}
                    </h6>
                    <DeleteBtn
                      size={24}
                      className="text-darkGray cursor-pointer hover:opacity-70"
                      productSpecId={
                        productSpecId
                      }
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-3/12">
          <div className="bg-white px-16 py-20 rounded-20 flex flex-col gap-8 items-center mb-32">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex">
                <div className="text-18 w-1/2">商品原價</div>
                <p className="text-16 w-1/2">
                  $<span>500</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 w-1/2">運費</div>
                <p className="text-16 w-1/2">
                  $<span>100</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 w-1/2">總額</div>
                <p className="text-16 w-1/2">
                  $<span>650</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 text-primary-red w-1/2">折扣</div>
                <p className="text-20 text-primary-red font-bold w-1/2">
                  $<span>150</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-20 rounded-20  flex flex-col gap-8 items-center">
            <div className="flex items-center gap-8">
              <LogoImg classProps="w-32 h-32" />
              <p className="text-18">商品總價</p>
            </div>
            <h5 className=" text-primary-green font-bold">
              <span>$</span>500
            </h5>
          </div>
        </div>
      </div>
      <CartLink />
    </section>
  );
};

export default CartListSection;
