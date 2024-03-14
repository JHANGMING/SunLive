import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import authTabData from '@/constants/lib/authTab';
import Button from '@/common/components/Button';
import { nextRoutes } from '@/constants/api/apiPaths';
import DefaultInput from '@/common/components/Input';
import useGapClass from '@/common/hooks/useGapClass';
import { setAllCookies } from '@/common/helpers/getCookie';
import { FormValues } from '@/common/components/Input/data';
import { setToast, showLoading } from '@/redux/features/messageSlice';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import { ROUTES } from './data';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 800,
    height: 600,
    left: 0,
    top: 0,
  });
  const gapClass = useGapClass(errors);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const left = width / 2 - windowDimensions.width / 2;
    const top = height / 2 - windowDimensions.height / 2;

    setWindowDimensions({ ...windowDimensions, left, top });
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    };
  }, [timeoutId]);
  const handlerToPasswordlessPage = () => {
    router.push('/auth/passwordlessLogin');
  };
  const handlerGoogleIdentity = async () => {
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.googleIdentity,
      method: 'GET',
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        window.open(
          result.url,
          '_blank',
          `width=${windowDimensions.width},height=${windowDimensions.height},top=${windowDimensions.top},left=${windowDimensions.left}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;
    const dataObj = {
      email: email.trim(),
      password: password.trim(),
    };
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.login,
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        dispatch(showLoading());
        setAllCookies(result.data);
        const id = setTimeout(async () => {
          const redirectTo = result.data.category
            ? ROUTES.DASHBOARD_ACCOUNT
            : ROUTES.HOME;
          await router.push(redirectTo);
        }, 1500);
        setTimeoutId(id);
        dispatch(
          setToast({
            message: authTabData.welcome,
          })
        );
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      }
    } catch (error) {
      console.error('登入失败', error);
    }
  };
  return (
    <>
      <h2 className="text-center">會員登入</h2>
      <form
        className={`flex flex-col gap-24 px-55.5 ${gapClass}`}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          className="-mt-16 text-darkGray w-110 hover:opacity-70"
        >
          忘記密碼嗎 ?
        </Link>
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black"
        >
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
          btnStyle="mt-40 mb-32 bg-primary-green text-white w-full"
          onClick={handlerToPasswordlessPage}
        >
          使用無密碼快速登入
        </Button>
        <Button
          type="button"
          category="auth"
          btnStyle=" bg-primary-green text-white mb-48 w-full"
          onClick={handlerGoogleIdentity}
        >
          使用google登入
        </Button>
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

export default LoginPage;
