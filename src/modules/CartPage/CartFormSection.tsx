import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { BsChevronDown } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { nextRoutes } from '@/constants/apiPaths';
import DefaultInput from '@/common/components/Input';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
import LocationSelect from '@/common/components/Select/LocationSelect';
import { transformDataToCartList } from '@/common/helpers/transDataToCartList';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { CartProps, PaymentDataType } from './data';

const CartFormSection = ({ cartData }: CartProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartId = cartData?.cartId || '';
  const formRef = useRef<HTMLFormElement>(null);
  const payformRef = useRef<HTMLFormElement>(null);
  const productData = cartData?.cartItemProductInfo ?? [];
  const cartList = transformDataToCartList(productData);
  const orderSum = cartData?.cartInfo?.[0].totalPromotionPrice || 0;
  const [paymentData, setPaymentData] = useState<PaymentDataType>({});
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({});

  useEffect(() => {
    setValue('city', '新北市' as any);
  }, []);
  useEffect(() => {
    if (
      paymentData.MerchantID &&
      paymentData.TradeInfo &&
      paymentData.TradeSha
    ) {
      payformRef.current?.submit();
    }
  }, [paymentData]);

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };
  const onSubmit = async (data: FormValues) => {
    const { zipCode, ...rest } = data;
    const zipCodeNumber = Number(zipCode);
    const dataObj = {
      ...rest,
      zipCode: zipCodeNumber,
      orderSum: orderSum + 100,
      cartList,
      cartId,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['order'],
      method: 'POST',
      data: dataObj,
    };

    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setPaymentData(result.paymentData);
      } else if (result.statusCode === 409) {
        router.push('/auth/login');
        dispatch(setToast({ message: result.message }));
      } else {
        dispatch(setToast({ message: result.message }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mb-[78px]">
      <div className="w-[73%]">
        <div className="bg-white col-span-9 pt-24 pl-24 pb-48 pr-[43px] rounded-20 mb-32">
          <div className="flex items-center gap-8 mb-24 ">
            <BsChevronDown
              size={24}
              className="text-primary-green cursor-pointer hover:scale-105"
            />
            <p className=" text-darkGray font-semibold text-20">
              填寫資料與付款
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-24 form-transition">
            <div className=" flex gap-24">
              <DefaultInput
                page="cart"
                type="text"
                labelText="收貨人"
                id="receiver"
                inputText="請輸入姓名"
                globalStyle="w-full"
                register={register}
                errors={errors}
                rules={{
                  required: {
                    value: true,
                    message: '請輸入您的姓名!',
                  },
                }}
              />
              <DefaultInput
                page="cart"
                type="tel"
                labelText="聯絡電話"
                id="phone"
                inputText="0910xxxxxxx"
                globalStyle="w-full"
                register={register}
                errors={errors}
                rules={{
                  required: {
                    value: true,
                    message: '請輸入您的聯絡電話!',
                  },
                  pattern: {
                    value: /^09\d{8}$/,
                    message: '手機號碼格式有誤',
                  },
                }}
              />
            </div>
            <LocationSelect
              control={control}
              id="location"
              countyName="city"
              districtName="district"
              errors={errors}
              register={register}
              setValue={setValue}
            />
          </form>
        </div>
        <div className="bg-white col-span-9 p-24 rounded-20 flex items-center justify-between">
          <p className="w-[590px]">
            點擊「確認付款」，即表示您已確認訂單無誤且同意右方顯示的總金額，亦同意使用信用卡付款。
          </p>
          <div className=" flex flex-col gap-8 w-[200px] items-center">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="text-white bg-primary-green rounded-8 py-12 w-full hover:opacity-60">
              確認付款
            </button>
          </div>
        </div>
      </div>
      {/* <!-- 用表單送給藍新 --> */}
      <form
        name="Newebpay"
        method="post"
        action="https://ccore.newebpay.com/MPG/mpg_gateway"
        ref={payformRef}>
        {/* <!-- 設定 hidden 可以隱藏不用給使用者看的資訊 --> */}
        {/* <!-- 藍新金流商店代號 --> */}
        <input
          type="hidden"
          id="MerchantID"
          name="MerchantID"
          value={paymentData?.MerchantID}
        />
        {/* <!-- 交易資料透過 Key 及 IV 進行 AES 加密 --> */}
        <input
          type="hidden"
          id="TradeInfo"
          name="TradeInfo"
          value={paymentData?.TradeInfo}
        />
        {/* <!-- 經過上述 AES 加密過的字串，透過商店 Key 及 IV 進行 SHA256 加密 --> */}
        <input
          type="hidden"
          id="TradeSha"
          name="TradeSha"
          value={paymentData?.TradeSha}
        />
        {/* <!-- 串接程式版本 --> */}
        <input type="hidden" id="Version" name="Version" value="2.0" />
        {/* <!-- 直接執行送出 --> */}
        <button type="submit"></button>
      </form>
    </section>
  );
};

export default CartFormSection;
