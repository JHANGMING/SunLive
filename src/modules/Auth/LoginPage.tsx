import Button from '@/common/components/Button';
import DefaultInput from '@/common/components/Input';
import { FormValues } from '@/common/components/Input/data';
import { useGapClass } from '@/common/hooks/useGapClass';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const gapClass = useGapClass(errors);
  const handlerToPasswordlessPage = () => {
    router.push('/auth/passwordlessLogin');
  };
  const onSubmit = (data: FormValues) => {
    const { email, password } = data;
    const dataObj = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(dataObj);
  };
  return (
    <>
      <h2 className="text-center">會員登入</h2>
      <form
        className={`flex flex-col gap-24 px-55.5 ${gapClass}`}
        onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput
          type="email"
          labelText="帳號"
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
        <Link
          href="/auth/resetPassword"
          className="-mt-16 text-darkGray w-110 hover:opacity-70">
          忘記密碼嗎 ?
        </Link>
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black">
          立即登入
        </Button>
      </form>
      <div className="text-center text-18 text-with-lines text-darkGray">
        或
      </div>
      <div className="px-55.5">
        <Button
          type="button"
          category="auth"
          btnStyle="mt-60 mb-60 bg-primary-green text-white mb-60 w-full"
          onClick={handlerToPasswordlessPage}>
          使用無密碼快速登入
        </Button>
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

export default LoginPage;
