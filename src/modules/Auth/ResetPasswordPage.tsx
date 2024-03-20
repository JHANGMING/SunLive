import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@/common/components/Button';
import DefaultInput from '@/common/components/Input';
import ArrowLeft from '@/common/components/ArrowLeft';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
import { resetpasswordParams } from '@/constants/api/nextApiParams';
import SendMailLoading from '@/common/components/Loading/SendMailLoading';

const ResetPasswordPage = () => {
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
    const apiParams = { ...resetpasswordParams, data: dataObj };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setShowLoading(true);
        setTimeout(() => {
          setShowLoading(false);
          router.push('/auth/login');
        }, 3000);
      }
      dispatch(
        setToast({
          message: `${result.message || '未知錯誤'}`,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {showLoading && <SendMailLoading />}
      <div className="flex flex-col justify-between h-full relative">
        <ArrowLeft />
        <form
          className="flex flex-col gap-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-40 text-center">忘記密碼</h2>
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
            btnStyle="mb-60 bg-primary-yellow"
          >
            發送驗證信至信箱
          </Button>
        </form>
        <p className="flex justify-center">
          還未成為會員 ?
          <Link
            href="/auth/register"
            className=" cursor-pointer text-primary-green font-bold"
          >
            立即註冊 !
          </Link>
        </p>
      </div>
    </>
  );
};

export default ResetPasswordPage;
