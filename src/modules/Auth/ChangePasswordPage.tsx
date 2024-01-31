import Button from "@/common/components/Button";
import DefaultInput from "@/common/components/Input";
import { FormValues } from "@/common/components/Input/data";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ChangePasswordPage = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    const {  password } = data;
    const dataObj = {
      password: password.trim(),
    };
    console.log(dataObj);
    
  };
  return (
    <>
      <h2 className="text-center mb-40">修改密碼</h2>
      <form
        className="flex flex-col gap-24 px-55.5 mb-[308px]"
        onSubmit={handleSubmit(onSubmit)}>
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
            },
          }}
        />
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black">
          使用新密碼登入
        </Button>
      </form>
      <div className="px-55.5">
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
}
 
export default ChangePasswordPage;