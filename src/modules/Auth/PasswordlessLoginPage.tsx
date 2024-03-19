import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authTab from '@/constants/lib/authTab';
import Button from '@/common/components/Button';
import useWebAuthn from '@/common/hooks/useWebAuthn';
import DefaultInput from '@/common/components/Input';
import ArrowLeft from '@/common/components/ArrowLeft';
import { setToast } from '@/redux/features/messageSlice';
import useAuthProcess from '@/common/hooks/useAuthProcess';
import { FormValues } from '@/common/components/Input/data';
import useCredentialManagement from '@/common/hooks/useCredentialManagement';

const PasswordlessLoginPage = () => {
  const dispatch = useDispatch();
  const { handleCredential } = useWebAuthn();
  const { prepareOptions } = useCredentialManagement();
  const [loginResponse, setLoginResponse] = useState(null);
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const isRegisterForm = watch('isRegister');
  const onSubmit = async (data: FormValues) => {
    try {
      const { isRegister, username } = data;
      const options = await prepareOptions(isRegister, username);
      if (options.resultOption.status === 'ok') {
        if (
          window.PublicKeyCredential && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && PublicKeyCredential.isConditionalMediationAvailable
        ) {
          Promise.all([
            PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
            PublicKeyCredential.isConditionalMediationAvailable(),
          ]).then(async (results) => {
            if (results.every((r) => r === true)) {
              const result = await handleCredential(options, isRegister);
              if (result && result.statusCode === 200) {
                setLoginResponse(result);
                dispatch(setToast({ message: authTab.register }));
              } else {
                dispatch(setToast({ message: authTab.noToken }));
              }
            }
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleActionClick = (isRegisterStatus: boolean) => {
    setValue('isRegister', isRegisterStatus, { shouldValidate: true });
    handleSubmit(onSubmit)();
  };
  useAuthProcess(loginResponse);
  return (
    <div className="flex flex-col justify-between h-full relative">
      <ArrowLeft />
      <form
        className="flex flex-col gap-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-40 text-center">無密碼快速登入</h2>
        <DefaultInput
          type="text"
          labelText="信箱"
          inputText="請輸入電子郵件"
          icon="*"
          id="username"
          autocomplete
          errors={errors}
          register={register}
          rules={{
            required: isRegisterForm ? 'Email 為必填' : false,
            pattern: isRegisterForm
              ? { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email 格式不正確' }
              : undefined,
          }}
        />
        <input type="hidden" {...register('isRegister')} />
        <Button
          type="button"
          category="auth"
          btnStyle="mb-60 bg-primary-green text-white"
          onClick={() => handleActionClick(true)}
        >
          註冊
        </Button>
        <Button
          type="button"
          category="auth"
          btnStyle="mb-60 bg-primary-green text-white"
          onClick={() => handleActionClick(false)}
        >
          登入
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
  );
};

export default PasswordlessLoginPage;
