import { useForm } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';
import PersonInput from '@/common/components/Input/PersonInput';
import Button from '@/common/components/Button';
import DatePickerShow from '@/common/components/DatePicker';
import { format } from 'date-fns';
import GenderSelect from '@/common/components/Select/GenderSelect';
import useAuth from '@/common/hooks/useAuth';

const AccountSetting = () => {
  const auth = useAuth();
  const genderDefaultValue = {
    value: auth?.sex === '1' ? '1' : '0',
    label: auth?.sex === '1' ? '女' : '男',
  };
  const defaultBirthday = auth?.birthday ? new Date(auth.birthday) : new Date();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    //儲存日期格式
    // const formattedDate = format(data.birthday, 'yyyy/MM/dd');
    // const { email, password, identity } = data;
    // const dataObj = {
    //   email: email.trim(),
    //   password: password.trim(),
    //   identity,
    // };
    console.log(data);
  };
  return (
    <>
      <h3 className=" text-20 font-semibold mb-32">帳號設定</h3>
      <form className="flex flex-col gap-24" onSubmit={handleSubmit(onSubmit)}>
        <PersonInput
          type="email"
          labelText="電子郵件"
          labelStyle="text-18"
          inputText={'XXX@gmil.com'}
          inputStyle="text-14"
          id="email"
          isdisabled={true}
          value={decodeURIComponent(auth?.account || '')}
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
            value={auth?.nickName || ''}
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
            value={auth?.phone || ''}
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
          <GenderSelect
            control={control}
            labelText="性別"
            id="gender"
            defaultValue={genderDefaultValue}
          />
          <div className="w-full">
            <label htmlFor="" className="text-18 block mb-8">
              生日
            </label>
            <DatePickerShow control={control} defaultValue={defaultBirthday} />
          </div>
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </>
  );
};

export default AccountSetting;
