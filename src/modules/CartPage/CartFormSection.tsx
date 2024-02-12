import { useForm } from 'react-hook-form';
import { BsChevronDown } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import DefaultInput from '@/common/components/Input';
import LocationSelect from '@/common/components/Select/LocationSelect';
import { FormValues } from '@/common/components/Input/data';

const CartFormSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };
  const onSubmit = (data: FormValues) => {
    //送出時要一併將購物車資料一併送出
    console.log(data);

    //  const { email, password, nickname } = data;
    //  const dataObj = {
    //    email: email.trim(),
    //    password: password.trim(),
    //    nickname: nickname.trim(),
    //  };
    //  console.log(dataObj);
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
                inputText="請輸入聯絡電話"
                globalStyle="w-full"
                register={register}
                errors={errors}
                rules={{
                  required: {
                    value: true,
                    message: '請輸入您的聯絡電話!',
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: '請輸入有效的數字',
                  },
                  maxLength: {
                    value: 10,
                    message: '聯絡電話不能超過10位數',
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
    </section>
  );
};

export default CartFormSection;
