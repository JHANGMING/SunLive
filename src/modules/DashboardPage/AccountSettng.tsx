import Button from "@/common/components/Button";
import PersonInput from "@/common/components/Input/PersonInput";
import { FormValues } from "@/common/components/Input/data";
import { useForm } from "react-hook-form";

const AccountSettng = () => {
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
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow self-start">
      <h3 className=" text-20 font-semibold mb-32">帳號設定</h3>
      <form className="flex flex-col gap-32" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-24">
          <PersonInput
            type="text"
            labelText="暱稱"
            inputText="請輸入暱稱"
            inputStyle="text-14 w-full h-[53px]"
            id="nickName"
            register={register}
          />
          <PersonInput
            type="email"
            labelText="電子郵件"
            inputText="XXX@gmil.com"
            inputStyle="text-14 h-[53px]"
            id="email"
            isdisabled={true}
          />
          <PersonInput
            type="tel"
            labelText="電話"
            inputText="請輸入聯絡電話"
            inputStyle="text-14 h-[53px]"
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
        <PersonInput
          type="text"
          labelText="小農理念 (請用一句話形容，會標示在產品介紹裡)"
          inputText="我希望大家都能吃得很健康"
          inputStyle="text-14 w-full h-[53px]"
          id="idea"
          register={register}
        />
        <div className="">
          <label htmlFor="introduce" className="block mb-8">
            小農介紹
          </label>
          <textarea
            id="introduce"
            {...(register && register('introduce'))}
            className="h-[74px] w-full border border-lightGray rounded-8 py-16 px-12 text-14 resize-none overflow-hidden tracking-widest focus-visible:outline-primary-green"
            placeholder="我種植的草莓真的很好吃，品種繁多，包括了甜蜜時光、金莓、霓虹草莓等友善種植作品。我的草莓園地位於美麗的苗栗，充滿愛和專業的栽培，每一顆草莓都是經過細心呵護的結晶。"></textarea>
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </div>
  );
};

export default AccountSettng;