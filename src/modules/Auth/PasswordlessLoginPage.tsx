import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '@/common/components/Button';
import { nextRoutes } from '@/constants/apiPaths';
import DefaultInput from '@/common/components/Input';
import ArrowLeft from '@/common/components/arrowLeft';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
import SendMailLoading from '@/common/components/Loading/SendMailLoading';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
const PasswordlessLoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    const dataObj = {
      account: data.email.trim(),
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['passwordless'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setShowLoading(true);
        const timer = setTimeout(() => {
          setShowLoading(false);
          router.push('/auth/login'); 
        }, 5000);
        return () => clearTimeout(timer);
      } else {
        dispatch(
          setToast({
            message: `${result.message || '未知錯誤'}`,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {showLoading && <SendMailLoading />}
      <div className="flex flex-col justify-between h-full relative">
        <ArrowLeft />
        <form
          className="flex flex-col gap-16"
          onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-40 text-center">無密碼快速登入</h2>
          <DefaultInput
            type="email"
            labelText="信箱"
            inputText="請輸入電子郵件"
            icon="*"
            id="email"
            errors={errors}
            register={register}
            rules={{
              required: 'Email 為必填',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email 格式不正確',
              },
            }}
          />
          <Button
            type="submit"
            category="auth"
            btnStyle="mb-60 bg-primary-green text-white">
            發送無密碼驗證信至信箱
          </Button>
        </form>
        <p className="flex justify-center">
          還未成為會員 ?
          <Link
            href="/auth/register"
            className=" cursor-pointer text-primary-green font-bold">
            立即註冊 !
          </Link>
        </p>
      </div>
    </>
  );
};

export default PasswordlessLoginPage;
