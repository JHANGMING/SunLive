import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@/common/components/Button';
import { nextRoutes } from '@/constants/api/apiPaths';
import DefaultInput from '@/common/components/Input';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import { ChangePasswordProps } from './data';

const ChangePasswordPage = ({ queryParams }: ChangePasswordProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { guid } = queryParams;
  const { account } = queryParams;
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const { password } = data;
    const dataObj = {
      account,
      guid,
      password: password.trim(),
    };
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.resetpasswordVerify,
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        router.push('/auth/login');
        dispatch(
          setToast({
            message: result.message,
          }),
        );
      } else {
        dispatch(
          setToast({
            message: `${result.message || '未知錯誤'}`,
          }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2 className="text-center mb-40">修改密碼</h2>
      <form
        className="flex flex-col gap-24 px-55.5 mb-[308px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <DefaultInput
          type="password"
          labelText="新密碼"
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
          labelText="再次輸入新密碼"
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
              return true;
            },
          }}
        />
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black"
        >
          重設新密碼
        </Button>
      </form>
      <div className="px-55.5">
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

export default ChangePasswordPage;
