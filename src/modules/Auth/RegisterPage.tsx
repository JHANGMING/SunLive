import Button from '@/common/components/Button';
import DefaultInput from '@/common/components/Input';
import { FormValues } from '@/common/components/Input/data';
import AuthSelect from '@/common/components/Select/AuthSelect';
import Toast from '@/common/components/Toast';
import { useGapClass } from '@/common/hooks/useGapClass';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type OnSubmitType = {
  (data: FormValues): void;
};
const RegisterPage = () => {
  const [toastMessage, setToastMessage] = useState('');
  const router = useRouter();
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const gapClass = useGapClass(errors);
  const onSubmit: OnSubmitType = async(data) => {
    const { email, password, identity } = data;
    const dataObj = {
      account: email.trim(),
      password: password.trim(),
      category: identity.value,
    };
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(dataObj),
      });
      const result = await response.json();
      if (result.statusCode === 200) {
        router.push('/auth/login');
      } else {
        setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
      <h2 className="text-center">電子郵件註冊</h2>
      <form
        className={`flex flex-col ${gapClass}`}
        onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput
          type="email"
          labelText="電子郵件"
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
        <DefaultInput
          type="password"
          labelText="密碼"
          inputText="請輸入密碼"
          icon="*"
          id="password"
          errors={errors}
          register={register}
          rules={{
            required: {
              value: true,
              message: '請輸入密碼!',
            },
            minLength: {
              value: 6,
              message: '密碼長度至少6位字元',
            },
          }}
        />
        <DefaultInput
          type="password"
          labelText="確認密碼"
          inputText="請輸入密碼"
          icon="*"
          id="confirmPassword"
          errors={errors}
          register={register}
          rules={{
            required: {
              value: true,
              message: '請輸入密碼!',
            },
            minLength: {
              value: 6,
              message: '密碼長度至少6位字元',
            },
            validate: (val) => {
              if (watch('password') !== val) {
                return '密碼沒有一致喔！！';
              }
            },
          }}
        />
        <AuthSelect control={control} />
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black">
          立即註冊
        </Button>
      </form>
      <div className=" self-center text-center">
        <div className="flex justify-center">
          <p className="mb-16">已經成為會員 ?</p>
          <Link
            href="/auth/login"
            className=" cursor-pointer text-primary-green font-bold">
            立即登入 !
          </Link>
        </div>
        <p>註冊表示同意使用者條款 & 隱私權保護政策</p>
      </div>
    </>
  );
};

export default RegisterPage;
