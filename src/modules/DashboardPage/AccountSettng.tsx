import Button from '@/common/components/Button';
import PersonInput from '@/common/components/Input/PersonInput';
import { FormValues } from '@/common/components/Input/data';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { fetcher } from '@/common/helpers/fetcher';
import useAuth from '@/common/hooks/useAuth';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import { nextRoutes } from '@/constants/apiPaths';
import { setUserData } from '@/redux/features/authSlice';
import { setToast } from '@/redux/features/messageSlice';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useSWR, { mutate } from 'swr';

const AccountSettng = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
   const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['farminfo_get']}` : null,
    fetcher
  );
  const authData = data?.data;
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  useEffect(() => {
    if (authData) {
      reset({
        nickName: authData.nickName || '',
        phone: authData.phone || '',
        vision: authData.vision || '',
        description: authData.description || '',
      });
    }
  }, [authData]);
  const onSubmit = async (data: FormValues) => {
    const dataObj = {
      ...data,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['farminfo_set'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        dispatch(setToast({ message: result.message }));
        dispatch(setUserData(result.data.nickName));
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow self-start">
      <h3 className=" text-20 font-semibold mb-32">帳號設定</h3>
      <form className="flex flex-col gap-32" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-24">
          <PersonInput
            type="text"
            labelText="暱稱"
            inputText="請輸入暱稱"
            inputStyle="text-14 w-full h-[53px]"
            id="nickName"
            register={register}
          />
          <PersonInput
            type="email"
            labelText="電子郵件"
            inputText="XXX@gmil.com"
            inputStyle="text-14 h-[53px]"
            id="email"
            isdisabled={true}
            value={decodeURIComponent(auth?.account || '')}
          />
          <PersonInput
            type="tel"
            labelText="電話"
            inputText="請輸入聯絡電話"
            inputStyle="text-14 h-[53px]"
            id="phone"
            errors={errors}
            register={register}
            rules={{
              required: {
                value: true,
                message: '請輸入您的手機電話!',
              },
              pattern: {
                value: /^09\d{8}$/,
                message: '手機號碼格式有誤',
              },
            }}
          />
        </div>
        <PersonInput
          type="text"
          labelText="小農理念 (請用一句話形容，會標示在產品介紹裡)"
          inputText="我希望大家都能吃得很健康"
          inputStyle="text-14 w-full h-[53px]"
          id="vision"
          register={register}
        />
        <div className="">
          <label htmlFor="description" className="block mb-8">
            小農介紹
          </label>
          <textarea
            id="description"
            {...(register && register('description'))}
            className="h-[74px] w-full border border-lightGray rounded-8 py-16 px-12 text-14 resize-none overflow-hidden tracking-widest focus-visible:outline-primary-green"
            placeholder="我種植的草莓真的很好吃，品種繁多，包括了甜蜜時光、金莓、霓虹草莓等友善種植作品。我的草莓園地位於美麗的苗栗，充滿愛和專業的栽培，每一顆草莓都是經過細心呵護的結晶。"></textarea>
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </div>
  );
};

export default AccountSettng;
