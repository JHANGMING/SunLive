import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '@/common/components/Button';
import { nextRoutes } from '@/constants/api/apiPaths';
import DefaultInput from '@/common/components/Input';
import ArrowLeft from '@/common/components/ArrowLeft';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
// import SendMailLoading from '@/common/components/Loading/SendMailLoading';
import base64URLStringToBuffer from '@/common/helpers/base64URLStringToBuffer';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import { CredentialsProps } from './data';

const PasswordlessLoginPage = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  // const [isRegister, setIsRegister] = useState(true);
  const [isRequestPending, setIsRequestPending] = useState(false);
  // const [showLoading, setShowLoading] = useState(false);
  // const [token, setToken] = useState('');
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const isRegister = watch('isRegister');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerCredentialscreateApi = async (publicKeyCredentialCreationOptions: any) => {
    if (isRequestPending) return;
    try {
      await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      });
      // console.log('credential', credential);
    } catch (error) {
      console.error('Error during credentials creation:', error);
    }
  };
  const handlerCredentialsCreat = ({
    challengeId,
    userData,
  }: CredentialsProps) => {
    const publicKeyCredentialCreationOptions = {
      challenge: challengeId,
      rp: {
        name: 'Example',
        // id: 'example.com',
      },
      user: userData,
      pubKeyCredParams: [
        { alg: -7, type: 'public-key' },
        { alg: -257, type: 'public-key' },
      ],
      excludeCredentials: [
        {
          id: userData?.id,
          type: 'public-key',
          transports: ['internal'],
        },
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        requireResidentKey: true,
      },
    };
    handlerCredentialscreateApi(publicKeyCredentialCreationOptions);
  };
  const handlerCredentialsGetApi = async ({
    challengeId,
  }: CredentialsProps) => {
    if (isRequestPending) return;
    setIsRequestPending(true);
    const abortController = new AbortController();
    const publicKeyCredentialRequestOptions = {
      challenge: challengeId,
      rpId: 'localhost',
    };
    try {
      await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
        signal: abortController.signal,
        mediation: 'conditional',
      });
      // console.log('credential', credential);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRequestPending(false);
    }
  };
  const onSubmit = async (data: FormValues) => {
    const dataObj = {
      inputName: data.username.trim(),
      isRegister: data.isRegister,
    };

    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.passwordless,
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        if (
          window.PublicKeyCredential && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && PublicKeyCredential.isConditionalMediationAvailable
        ) {
          Promise.all([
            PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
            PublicKeyCredential.isConditionalMediationAvailable(),
          ]).then((results) => {
            if (results.every((r) => r === true)) {
              // console.log(result);
              const challengeId = base64URLStringToBuffer(
                result.option.challenge,
              );
              if (data.isRegister) {
                const userData = {
                  ...result.option.user,
                  id: base64URLStringToBuffer(result.option.user.id),
                };
                handlerCredentialsCreat({ challengeId, userData });
              } else {
                // console.log('handlerCredentialsGetApi');
                handlerCredentialsGetApi({ challengeId });
              }
            }
          });
        }
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
  const handleActionClick = (isRegisterStatus: boolean) => {
    setValue('isRegister', isRegisterStatus, { shouldValidate: true });
    handleSubmit(onSubmit)();
  };
  return (
    <>
      {/* {showLoading && <SendMailLoading />} */}
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
              required: isRegister ? 'Email 為必填' : false,
              pattern: isRegister
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
    </>
  );
};

export default PasswordlessLoginPage;
