import { format } from 'date-fns';
import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '@/common/components/Button';
import { nextRoutes } from '@/constants/api/apiPaths';
import fetcher from '@/common/helpers/fetcher';
import { setToast } from '@/redux/features/messageSlice';
import useAuthStatus from '@/common/hooks/useAuthStatus';
import { FormValues } from '@/common/components/Input/data';
import DatePickerShow from '@/common/components/DatePicker';
import PersonInput from '@/common/components/Input/PersonInput';
import GenderSelect from '@/common/components/Select/GenderSelect';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';

const AccountSetting = () => {
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes.account_get}` : null,
    fetcher,
  );
  const authData = data?.data;
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: decodeURIComponent(authData?.account || ''),
      nickName: authData?.nickName || '',
      userPhone: authData?.phone || '',
    },
  });
  useEffect(() => {
    if (authData) {
      const birthday = authData.birthday
        ? new Date(authData.birthday)
        : undefined;
      const genderDefaultValue = {
        value: authData?.sex ? '1' : '0',
        label: authData?.sex ? '女' : '男',
      };
      reset({
        email: decodeURIComponent(authData.account || ''),
        nickName: authData.nickName || '',
        userPhone: authData.phone || '',
        datePicker: birthday,
        gender: genderDefaultValue,
      });
    }
  }, [authData]);
  const onSubmit = async (formData: FormValues) => {
    // 儲存日期格式
    const birthday = format(formData.datePicker, 'yyyy/MM/dd');
    const sex = formData.gender.value;
    const dataObj = {
      nickName: formData.nickName,
      phone: formData.userPhone,
      sex: Boolean(sex),
      birthday,
    };
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.account_set,
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        dispatch(setToast({ message: result.message }));
        mutate(`/api${nextRoutes.account_get}`);
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h3 className=" text-20 font-semibold mb-32">帳號設定</h3>
      <form className="flex flex-col gap-24" onSubmit={handleSubmit(onSubmit)}>
        <PersonInput
          type="email"
          labelText="電子郵件"
          labelStyle="text-18"
          inputText="XXX@gmil.com"
          inputStyle="text-14"
          id="email"
          isdisabled
          value={decodeURIComponent(authData?.account || '')}
        />
        <div className="flex gap-24">
          <PersonInput
            type="text"
            labelText="暱稱"
            inputText="請輸入暱稱"
            labelStyle="text-18"
            inputStyle="text-14 w-full"
            id="nickName"
            register={register}
          />
          <PersonInput
            type="tel"
            labelText="聯絡電話"
            inputText="請輸入聯絡電話"
            labelStyle="text-18"
            inputStyle="text-14"
            id="userPhone"
            errors={errors}
            register={register}
            rules={{
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
        <div className="flex gap-24">
          <GenderSelect control={control} labelText="性別" id="gender" />
          <div className="w-full">
            <label htmlFor="" className="text-18 block mb-8">
              生日
            </label>
            <DatePickerShow control={control} />
          </div>
        </div>
        <Button
          category="submit"
          classStyle="bg-primary-green self-end hover:opacity-70"
        >
          儲存
        </Button>
      </form>
    </>
  );
};

export default AccountSetting;
